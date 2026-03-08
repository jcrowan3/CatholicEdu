"""Student business logic."""

import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import ClassEnrollment, Student


async def list_students_in_class(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
) -> list[Student]:
    """List all active students enrolled in a class."""
    result = await db.execute(
        select(Student)
        .join(ClassEnrollment, ClassEnrollment.student_id == Student.id)
        .where(
            ClassEnrollment.class_id == class_id,
            ClassEnrollment.is_active.is_(True),
            Student.is_active.is_(True),
        )
        .order_by(Student.display_name)
    )
    return list(result.scalars().all())


async def create_student_and_enroll(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    class_id: uuid.UUID,
    display_name: str,
    avatar_emoji: str = "😊",
    access_pin: str | None = None,
) -> Student:
    """Create a student and enroll them in a class."""
    student = Student(
        parish_id=parish_id,
        display_name=display_name,
        avatar_emoji=avatar_emoji,
        access_pin=access_pin,
    )
    db.add(student)
    await db.flush()

    enrollment = ClassEnrollment(class_id=class_id, student_id=student.id)
    db.add(enrollment)
    await db.flush()

    return student


async def get_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> Student:
    """Get a student by ID, scoped to a parish."""
    result = await db.execute(
        select(Student).where(
            Student.id == student_id,
            Student.parish_id == parish_id,
        )
    )
    student = result.scalar_one_or_none()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    return student


async def update_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
    display_name: str | None = None,
    avatar_emoji: str | None = None,
    access_pin: str | None = None,
    is_active: bool | None = None,
) -> Student:
    """Update a student."""
    student = await get_student(db, student_id=student_id, parish_id=parish_id)
    if display_name is not None:
        student.display_name = display_name
    if avatar_emoji is not None:
        student.avatar_emoji = avatar_emoji
    if access_pin is not None:
        student.access_pin = access_pin
    if is_active is not None:
        student.is_active = is_active
    await db.flush()
    return student


async def deactivate_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> Student:
    """Soft-delete a student."""
    return await update_student(
        db, student_id=student_id, parish_id=parish_id, is_active=False
    )
