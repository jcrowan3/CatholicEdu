"""Grade config router — CRUD for grade configs."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist, require_parish_admin
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.grade import (
    GradeConfigCreateRequest,
    GradeConfigResponse,
    GradeConfigUpdateRequest,
)
from catechist_api.services import grade_service

router = APIRouter()


@router.get("", response_model=list[GradeConfigResponse])
async def list_grades(
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """List all grade configs for the parish."""
    grades = await grade_service.list_grades(db, parish_id=user.parish_id)
    return grades


@router.post("", response_model=GradeConfigResponse, status_code=201)
async def create_grade(
    body: GradeConfigCreateRequest,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
):
    """Create a new grade config (admin only)."""
    gc = await grade_service.create_grade(
        db,
        parish_id=user.parish_id,
        grade=body.grade,
        program_name=body.program_name,
    )
    return gc


@router.patch("/{grade}", response_model=GradeConfigResponse)
async def update_grade(
    grade: int,
    body: GradeConfigUpdateRequest,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
):
    """Update a grade config (admin only)."""
    gc = await grade_service.update_grade(
        db,
        parish_id=user.parish_id,
        grade=grade,
        program_name=body.program_name,
        is_active=body.is_active,
    )
    return gc
