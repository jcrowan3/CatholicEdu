"""Privacy-conscious security and data-operation audit events."""

import hashlib
import uuid

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import ActivityLog


def subject_reference(*, parish_id: uuid.UUID, subject_id: uuid.UUID) -> str:
    """Return a stable, non-reversible reference without retaining a raw student identifier."""
    value = f"{parish_id}:{subject_id}".encode()
    return hashlib.sha256(value).hexdigest()[:20]


async def record_event(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    actor_type: str,
    action: str,
    actor_id: uuid.UUID | None = None,
    metadata: dict | None = None,
) -> ActivityLog:
    """Append an event containing identifiers/counts, never secrets or free-form student data."""
    event = ActivityLog(
        parish_id=parish_id,
        actor_type=actor_type,
        actor_id=actor_id,
        action=action,
        metadata_=metadata,
    )
    db.add(event)
    await db.flush()
    return event


async def list_events(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    limit: int = 100,
) -> list[ActivityLog]:
    result = await db.execute(
        select(ActivityLog)
        .where(ActivityLog.parish_id == parish_id)
        .order_by(ActivityLog.created_at.desc())
        .limit(limit)
    )
    return list(result.scalars().all())
