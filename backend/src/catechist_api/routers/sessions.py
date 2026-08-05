"""Session override router — catechist edits to curriculum."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.session import (
    DoctrinalReviewResponse,
    SessionOverrideCreateRequest,
    SessionOverrideResponse,
)
from catechist_api.services import doctrinal_review, grade_service, session_service

router = APIRouter()


@router.post("/{grade}/sessions/review", response_model=DoctrinalReviewResponse)
async def review_session(
    grade: int,
    body: SessionOverrideCreateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Review an edited session with deterministic doctrinal safety rules."""
    await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    findings = doctrinal_review.review_session(body.session_data)
    return {"passed": not findings, "findings": findings}


@router.get("/{grade}/sessions", response_model=list[SessionOverrideResponse])
async def list_sessions(
    grade: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """List all session overrides for a grade."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    overrides = await session_service.list_session_overrides(db, grade_config_id=gc.id)
    return overrides


@router.put("/{grade}/sessions/{week}", response_model=SessionOverrideResponse)
async def upsert_session(
    grade: int,
    week: int,
    body: SessionOverrideCreateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Create or update a session override for a specific week."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    override = await session_service.upsert_session_override(
        db,
        grade_config_id=gc.id,
        week=week,
        session_data=body.session_data,
        created_by=user.sub,
    )
    return override


@router.delete("/{grade}/sessions/{week}", status_code=204)
async def delete_session(
    grade: int,
    week: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Delete a session override (revert to default)."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    await session_service.delete_session_override(db, grade_config_id=gc.id, week=week)
