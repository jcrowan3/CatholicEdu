"""Parish router — read and update parish info."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist, require_parish_admin
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.audit import AuditEventResponse
from catechist_api.schemas.parish import ParishResponse, ParishUpdateRequest
from catechist_api.services import audit_service, parish_service

router = APIRouter()


@router.get("", response_model=ParishResponse)
async def get_parish(
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Get the current user's parish info."""
    parish = await parish_service.get_parish(db, parish_id=user.parish_id)
    return parish


@router.get("/audit-events", response_model=list[AuditEventResponse])
async def list_audit_events(
    limit: int = 100,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
):
    """List recent security and privacy events for the current parish."""
    bounded_limit = min(max(limit, 1), 500)
    return await audit_service.list_events(
        db,
        parish_id=user.parish_id,
        limit=bounded_limit,
    )


@router.patch("", response_model=ParishResponse)
async def update_parish(
    body: ParishUpdateRequest,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
):
    """Update parish info (admin only)."""
    parish = await parish_service.update_parish(
        db,
        parish_id=user.parish_id,
        name=body.name,
    )
    return parish
