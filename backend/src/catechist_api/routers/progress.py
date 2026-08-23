"""Progress router — record and retrieve activity completions."""

import uuid

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import get_current_user
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.progress import (
    GradeProgressResponse,
    ProgressCreateRequest,
    ProgressEntryResponse,
)
from catechist_api.services import progress_service, student_service

router = APIRouter()


@router.get("/{student_id}/progress/{grade}", response_model=GradeProgressResponse)
async def get_progress(
    student_id: uuid.UUID,
    grade: int,
    user: TokenPayload = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get all progress entries for a student in a grade.

    Accessible by the student themselves or any catechist in the same parish.
    """
    # Students can only view their own progress
    if user.type == "student" and user.sub != student_id:
        from fastapi import HTTPException, status

        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")
    if user.type == "catechist":
        await student_service.get_student(db, student_id=student_id, parish_id=user.parish_id)

    result = await progress_service.get_student_grade_progress(
        db, student_id=student_id, grade=grade
    )
    return result


@router.post("/{student_id}/progress", response_model=ProgressEntryResponse, status_code=201)
async def record_progress(
    student_id: uuid.UUID,
    body: ProgressCreateRequest,
    user: TokenPayload = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Record an activity completion. Idempotent — keeps the best score.

    Students can only record their own progress.
    """
    if user.type == "student" and user.sub != student_id:
        from fastapi import HTTPException, status

        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Access denied")
    if user.type == "catechist":
        await student_service.get_student(db, student_id=student_id, parish_id=user.parish_id)

    entry = await progress_service.record_progress(
        db,
        student_id=student_id,
        grade=body.grade,
        week=body.week,
        activity=body.activity,
        stars_earned=body.stars_earned,
    )
    return entry
