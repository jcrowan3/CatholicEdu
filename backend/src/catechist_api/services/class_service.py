"""Class business logic."""

import uuid

from fastapi import HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import Class, ClassEnrollment


async def list_classes(
    db: AsyncSession,
    *,
    grade_config_id: uuid.UUID,
) -> list[dict]:
    """List all classes for a grade config with student counts."""
    result = await db.execute(
        select(
            Class,
            func.count(ClassEnrollment.id).filter(ClassEnrollment.is_active.is_(True)).label(
                "student_count"
            ),
        )
        .outerjoin(ClassEnrollment, ClassEnrollment.class_id == Class.id)
        .where(Class.grade_config_id == grade_config_id)
        .group_by(Class.id)
        .order_by(Class.name)
    )
    rows = result.all()
    return [
        {
            "class": cls,
            "student_count": count or 0,
        }
        for cls, count in rows
    ]


async def create_class(
    db: AsyncSession,
    *,
    grade_config_id: uuid.UUID,
    name: str,
) -> Class:
    """Create a class within a grade config."""
    cls = Class(grade_config_id=grade_config_id, name=name)
    db.add(cls)
    await db.flush()
    return cls


async def get_class(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    grade_config_id: uuid.UUID,
) -> Class:
    """Get a specific class by ID, ensuring it belongs to the given grade config."""
    result = await db.execute(
        select(Class).where(
            Class.id == class_id,
            Class.grade_config_id == grade_config_id,
        )
    )
    cls = result.scalar_one_or_none()
    if cls is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Class not found",
        )
    return cls


async def update_class(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    grade_config_id: uuid.UUID,
    name: str | None = None,
    is_active: bool | None = None,
) -> Class:
    """Update a class."""
    cls = await get_class(db, class_id=class_id, grade_config_id=grade_config_id)
    if name is not None:
        cls.name = name
    if is_active is not None:
        cls.is_active = is_active
    await db.flush()
    return cls


async def deactivate_class(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    grade_config_id: uuid.UUID,
) -> Class:
    """Soft-delete a class (set is_active=False)."""
    return await update_class(
        db, class_id=class_id, grade_config_id=grade_config_id, is_active=False
    )
