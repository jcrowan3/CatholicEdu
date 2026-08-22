"""Authentication business logic."""

import re
import uuid

from fastapi import HTTPException, status
from jwt.exceptions import InvalidTokenError as JWTError
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from catechist_api.auth.jwt import create_access_token, create_refresh_token, decode_token
from catechist_api.auth.password import hash_password, verify_password
from catechist_api.models import Catechist, Class, ClassEnrollment, Parish, Student


def _slugify(name: str) -> str:
    """Convert a parish name to a URL-safe slug."""
    slug = name.lower().strip()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_]+", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    return slug[:100]


async def register_parish(
    db: AsyncSession,
    *,
    parish_name: str,
    email: str,
    password: str,
    display_name: str,
) -> dict:
    """Register a new parish and create the admin catechist account."""
    # Generate a unique slug
    base_slug = _slugify(parish_name)
    slug = base_slug
    suffix = 0
    while True:
        existing = await db.execute(select(Parish).where(Parish.slug == slug))
        if existing.scalar_one_or_none() is None:
            break
        suffix += 1
        slug = f"{base_slug}-{suffix}"

    # Create parish
    parish = Parish(name=parish_name, slug=slug)
    db.add(parish)
    await db.flush()

    # Check if email is already taken in this parish
    existing_catechist = await db.execute(
        select(Catechist).where(
            Catechist.parish_id == parish.id,
            Catechist.email == email.lower(),
        )
    )
    if existing_catechist.scalar_one_or_none() is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered for this parish",
        )

    # Create admin catechist
    catechist = Catechist(
        parish_id=parish.id,
        email=email.lower(),
        password_hash=hash_password(password),
        display_name=display_name,
        role="parish_admin",
    )
    db.add(catechist)
    await db.flush()

    # Generate tokens
    access_token = create_access_token(
        sub=catechist.id,
        parish_id=parish.id,
        token_type="catechist",
        role="parish_admin",
    )
    refresh_token = create_refresh_token(sub=catechist.id, parish_id=parish.id)

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "parish_id": parish.id,
        "catechist_id": catechist.id,
    }


async def login_catechist(
    db: AsyncSession,
    *,
    email: str,
    password: str,
) -> dict:
    """Authenticate a catechist with email/password and return tokens."""
    result = await db.execute(
        select(Catechist).where(
            Catechist.email == email.lower(),
            Catechist.is_active.is_(True),
        )
    )
    catechist = result.scalar_one_or_none()

    if catechist is None or not verify_password(password, catechist.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    access_token = create_access_token(
        sub=catechist.id,
        parish_id=catechist.parish_id,
        token_type="catechist",
        role=catechist.role,
    )
    refresh_token = create_refresh_token(sub=catechist.id, parish_id=catechist.parish_id)

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
    }


async def refresh_tokens(
    db: AsyncSession,
    *,
    refresh_token_str: str,
) -> dict:
    """Validate a refresh token and issue new access + refresh tokens."""
    try:
        payload = decode_token(refresh_token_str)
    except JWTError as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired refresh token",
        ) from error

    if payload.type != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token type",
        )

    # Verify catechist still exists and is active
    result = await db.execute(
        select(Catechist).where(
            Catechist.id == payload.sub,
            Catechist.is_active.is_(True),
        )
    )
    catechist = result.scalar_one_or_none()
    if catechist is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Account not found or deactivated",
        )

    access_token = create_access_token(
        sub=catechist.id,
        parish_id=catechist.parish_id,
        token_type="catechist",
        role=catechist.role,
    )
    new_refresh_token = create_refresh_token(sub=catechist.id, parish_id=catechist.parish_id)

    return {
        "access_token": access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer",
    }


async def get_class_roster(
    db: AsyncSession,
    *,
    join_code: str,
) -> dict:
    """Look up a class by join code and return the student roster."""
    result = await db.execute(
        select(Class)
        .where(Class.join_code == join_code.upper(), Class.is_active.is_(True))
        .options(selectinload(Class.grade_config))
    )
    cls = result.scalar_one_or_none()

    if cls is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid join code",
        )

    # Get enrolled students
    enrollment_result = await db.execute(
        select(Student)
        .join(ClassEnrollment, ClassEnrollment.student_id == Student.id)
        .where(
            ClassEnrollment.class_id == cls.id,
            ClassEnrollment.is_active.is_(True),
            Student.is_active.is_(True),
        )
        .order_by(Student.display_name)
    )
    students = enrollment_result.scalars().all()

    return {
        "class_id": cls.id,
        "class_name": cls.name,
        "grade": cls.grade_config.grade,
        "students": [
            {
                "id": s.id,
                "display_name": s.display_name,
                "avatar_emoji": s.avatar_emoji,
                "requires_pin": s.access_pin is not None,
            }
            for s in students
        ],
    }


async def login_student(
    db: AsyncSession,
    *,
    join_code: str,
    student_id: uuid.UUID,
    access_pin: str | None = None,
) -> dict:
    """Authenticate a student via join code + name selection (+ optional PIN)."""
    # Find the class
    result = await db.execute(
        select(Class)
        .where(Class.join_code == join_code.upper(), Class.is_active.is_(True))
        .options(selectinload(Class.grade_config))
    )
    cls = result.scalar_one_or_none()

    if cls is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid join code",
        )

    # Verify student is enrolled in this class
    enrollment_result = await db.execute(
        select(Student)
        .join(ClassEnrollment, ClassEnrollment.student_id == Student.id)
        .where(
            ClassEnrollment.class_id == cls.id,
            ClassEnrollment.is_active.is_(True),
            Student.id == student_id,
            Student.is_active.is_(True),
        )
    )
    student = enrollment_result.scalar_one_or_none()

    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found in this class",
        )

    # Check PIN if required
    if student.access_pin is not None and (access_pin is None or access_pin != student.access_pin):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid PIN",
        )

    # Get parish_id from grade_config
    grade_config = cls.grade_config
    parish_id = grade_config.parish_id

    access_token = create_access_token(
        sub=student.id,
        parish_id=parish_id,
        token_type="student",
        class_id=cls.id,
        grade=grade_config.grade,
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "student_id": student.id,
        "display_name": student.display_name,
        "grade": grade_config.grade,
        "class_name": cls.name,
    }
