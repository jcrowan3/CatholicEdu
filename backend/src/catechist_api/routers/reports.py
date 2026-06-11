"""Reporting router — parish overview, class grid, student summary, CSV export."""

import uuid

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.report import (
    ClassProgressGridResponse,
    ParishOverviewResponse,
    StandardsCoverageResponse,
    StudentSummaryResponse,
)
from catechist_api.services import grade_service, class_service, report_service

router = APIRouter()


@router.get("/parish/overview", response_model=ParishOverviewResponse)
async def parish_overview(
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Get parish-wide statistics."""
    return await report_service.get_parish_overview(db, parish_id=user.parish_id)


@router.get("/grade/{grade}/class/{class_id}/grid", response_model=ClassProgressGridResponse)
async def class_progress_grid(
    grade: int,
    class_id: uuid.UUID,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Get the progress grid for a class."""
    # Verify the grade belongs to this parish
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    # Verify the class belongs to this grade
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)
    return await report_service.get_class_progress_grid(
        db, class_id=class_id, grade=grade
    )


@router.get("/grade/{grade}/standards/coverage", response_model=StandardsCoverageResponse)
async def standards_coverage(
    grade: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Get a grade's curriculum coverage against standards evidence."""
    await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    return report_service.get_standards_coverage(grade=grade)


@router.get("/grade/{grade}/standards/pdf")
async def standards_coverage_pdf(
    grade: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Export a grade's standards coverage report as a PDF download."""
    await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    pdf_content = report_service.export_standards_coverage_pdf(grade=grade)

    return StreamingResponse(
        iter([pdf_content]),
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=standards-coverage-grade{grade}.pdf"
        },
    )


@router.get("/student/{student_id}/summary", response_model=StudentSummaryResponse)
async def student_summary(
    student_id: uuid.UUID,
    grade: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Get an individual student's progress report."""
    return await report_service.get_student_summary(
        db, student_id=student_id, grade=grade
    )


@router.get("/export/csv")
async def export_csv(
    grade: int,
    class_id: uuid.UUID,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Export a class's progress as a CSV download."""
    # Verify access
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)

    csv_content = await report_service.export_csv(
        db, class_id=class_id, grade=grade
    )

    return StreamingResponse(
        iter([csv_content]),
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename=progress-grade{grade}.csv"},
    )
