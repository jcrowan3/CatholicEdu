"""Session override business logic."""

import uuid
from typing import Any

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import SessionOverride


async def list_session_overrides(
    db: AsyncSession,
    *,
    grade_config_id: uuid.UUID,
) -> list[SessionOverride]:
    """List all session overrides for a grade config."""
    result = await db.execute(
        select(SessionOverride)
        .where(SessionOverride.grade_config_id == grade_config_id)
        .order_by(SessionOverride.week)
    )
    return list(result.scalars().all())


async def upsert_session_override(
    db: AsyncSession,
    *,
    grade_config_id: uuid.UUID,
    week: int,
    session_data: dict[str, Any],
    created_by: uuid.UUID | None = None,
) -> SessionOverride:
    """Create or update a session override for a specific week."""
    result = await db.execute(
        select(SessionOverride).where(
            SessionOverride.grade_config_id == grade_config_id,
            SessionOverride.week == week,
        )
    )
    existing = result.scalar_one_or_none()

    if existing is not None:
        existing.session_data = session_data
        existing.created_by = created_by
        await db.flush()
        return existing

    override = SessionOverride(
        grade_config_id=grade_config_id,
        week=week,
        session_data=session_data,
        created_by=created_by,
    )
    db.add(override)
    await db.flush()
    return override


async def delete_session_override(
    db: AsyncSession,
    *,
    grade_config_id: uuid.UUID,
    week: int,
) -> None:
    """Delete a session override."""
    result = await db.execute(
        select(SessionOverride).where(
            SessionOverride.grade_config_id == grade_config_id,
            SessionOverride.week == week,
        )
    )
    override = result.scalar_one_or_none()
    if override is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No session override for week {week}",
        )
    await db.delete(override)
    await db.flush()
