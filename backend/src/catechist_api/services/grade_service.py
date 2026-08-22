"""Grade config business logic."""

import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import GradeConfig


async def list_grades(db: AsyncSession, *, parish_id: uuid.UUID) -> list[GradeConfig]:
    """List all grade configs for a parish."""
    result = await db.execute(
        select(GradeConfig).where(GradeConfig.parish_id == parish_id).order_by(GradeConfig.grade)
    )
    return list(result.scalars().all())


async def create_grade(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    grade: int,
    program_name: str | None = None,
) -> GradeConfig:
    """Create a grade config for a parish."""
    # Check for duplicate
    existing = await db.execute(
        select(GradeConfig).where(
            GradeConfig.parish_id == parish_id,
            GradeConfig.grade == grade,
        )
    )
    if existing.scalar_one_or_none() is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Grade {grade} already configured for this parish",
        )

    gc = GradeConfig(parish_id=parish_id, grade=grade, program_name=program_name)
    db.add(gc)
    await db.flush()
    return gc


async def get_grade(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    grade: int,
) -> GradeConfig:
    """Get a specific grade config by grade number."""
    result = await db.execute(
        select(GradeConfig).where(
            GradeConfig.parish_id == parish_id,
            GradeConfig.grade == grade,
        )
    )
    gc = result.scalar_one_or_none()
    if gc is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Grade {grade} not configured for this parish",
        )
    return gc


async def update_grade(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    grade: int,
    program_name: str | None = None,
    is_active: bool | None = None,
) -> GradeConfig:
    """Update a grade config."""
    gc = await get_grade(db, parish_id=parish_id, grade=grade)
    if program_name is not None:
        gc.program_name = program_name
    if is_active is not None:
        gc.is_active = is_active
    await db.flush()
    return gc
