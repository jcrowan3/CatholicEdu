"""Progress recording business logic."""

import uuid

from sqlalchemy import func, select
from sqlalchemy.dialects.postgresql import insert as pg_insert
from sqlalchemy.dialects.sqlite import insert as sqlite_insert
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import ProgressEntry


async def get_student_grade_progress(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    grade: int,
) -> dict:
    """Get all progress entries for a student in a given grade."""
    result = await db.execute(
        select(ProgressEntry)
        .where(
            ProgressEntry.student_id == student_id,
            ProgressEntry.grade == grade,
        )
        .order_by(ProgressEntry.week, ProgressEntry.activity)
    )
    entries = list(result.scalars().all())

    total_stars = sum(e.stars_earned for e in entries)

    return {
        "student_id": student_id,
        "grade": grade,
        "entries": entries,
        "total_stars": total_stars,
    }


async def record_progress(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    grade: int,
    week: int,
    activity: str,
    stars_earned: int,
) -> ProgressEntry:
    """Record an activity completion. Idempotent — upserts on conflict.

    If the student already has progress for this (grade, week, activity),
    update stars_earned only if the new value is higher (best score wins).
    """
    values = {
        "student_id": student_id,
        "grade": grade,
        "week": week,
        "activity": activity,
        "stars_earned": stars_earned,
    }
    bind = db.get_bind()
    if bind.dialect.name == "sqlite":
        stmt = (
            sqlite_insert(ProgressEntry)
            .values(**values)
            .on_conflict_do_update(
                index_elements=["student_id", "grade", "week", "activity"],
                set_={"stars_earned": func.max(ProgressEntry.stars_earned, stars_earned)},
            )
            .returning(ProgressEntry)
        )
    else:
        stmt = (
            pg_insert(ProgressEntry)
            .values(**values)
            .on_conflict_do_update(
                constraint="uq_progress_student_grade_week_activity",
                set_={"stars_earned": func.greatest(ProgressEntry.stars_earned, stars_earned)},
            )
            .returning(ProgressEntry)
        )
    result = await db.execute(stmt)
    entry = result.scalar_one()
    return entry
