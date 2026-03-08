"""Parish business logic."""

import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import Parish


async def get_parish(db: AsyncSession, *, parish_id: uuid.UUID) -> Parish:
    """Get a parish by ID."""
    result = await db.execute(select(Parish).where(Parish.id == parish_id))
    parish = result.scalar_one_or_none()
    if parish is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Parish not found",
        )
    return parish


async def update_parish(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    name: str | None = None,
) -> Parish:
    """Update parish information."""
    parish = await get_parish(db, parish_id=parish_id)
    if name is not None:
        parish.name = name
    await db.flush()
    return parish
