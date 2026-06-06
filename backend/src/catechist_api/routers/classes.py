"""Class router — CRUD for classes within a grade."""

import uuid

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.class_ import ClassCreateRequest, ClassResponse, ClassUpdateRequest
from catechist_api.schemas.student import (
    RosterImportPreviewResponse,
    RosterImportRequest,
    RosterImportResponse,
    StudentCreateRequest,
    StudentResponse,
)
from catechist_api.services import class_service, grade_service, student_service

router = APIRouter()


@router.get("/grades/{grade}/classes", response_model=list[ClassResponse])
async def list_classes(
    grade: int,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """List all classes for a grade."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    classes_with_counts = await class_service.list_classes(db, grade_config_id=gc.id)
    return [
        ClassResponse(
            id=item["class"].id,
            grade_config_id=item["class"].grade_config_id,
            name=item["class"].name,
            join_code=item["class"].join_code,
            is_active=item["class"].is_active,
            created_at=item["class"].created_at,
            student_count=item["student_count"],
        )
        for item in classes_with_counts
    ]


@router.post("/grades/{grade}/classes", response_model=ClassResponse, status_code=201)
async def create_class(
    grade: int,
    body: ClassCreateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Create a new class within a grade."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    cls = await class_service.create_class(db, grade_config_id=gc.id, name=body.name)
    return ClassResponse(
        id=cls.id,
        grade_config_id=cls.grade_config_id,
        name=cls.name,
        join_code=cls.join_code,
        is_active=cls.is_active,
        created_at=cls.created_at,
        student_count=0,
    )


@router.patch("/grades/{grade}/classes/{class_id}", response_model=ClassResponse)
async def update_class(
    grade: int,
    class_id: uuid.UUID,
    body: ClassUpdateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Update a class."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    cls = await class_service.update_class(
        db,
        class_id=class_id,
        grade_config_id=gc.id,
        name=body.name,
        is_active=body.is_active,
    )
    return cls


@router.delete("/grades/{grade}/classes/{class_id}", status_code=204)
async def delete_class(
    grade: int,
    class_id: uuid.UUID,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Soft-delete a class (deactivate)."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    await class_service.deactivate_class(db, class_id=class_id, grade_config_id=gc.id)


# ─── Students within a class ───


@router.get(
    "/grades/{grade}/classes/{class_id}/students",
    response_model=list[StudentResponse],
)
async def list_students(
    grade: int,
    class_id: uuid.UUID,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """List all students enrolled in a class."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    # Verify the class belongs to this grade
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)
    students = await student_service.list_students_in_class(db, class_id=class_id)
    return [
        StudentResponse(
            id=s.id,
            parish_id=s.parish_id,
            display_name=s.display_name,
            avatar_emoji=s.avatar_emoji,
            has_pin=s.access_pin is not None,
            is_active=s.is_active,
            created_at=s.created_at,
        )
        for s in students
    ]


@router.post(
    "/grades/{grade}/classes/{class_id}/students",
    response_model=StudentResponse,
    status_code=201,
)
async def create_student(
    grade: int,
    class_id: uuid.UUID,
    body: StudentCreateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Create a new student and enroll them in a class."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    # Verify the class belongs to this grade
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)
    student = await student_service.create_student_and_enroll(
        db,
        parish_id=user.parish_id,
        class_id=class_id,
        display_name=body.display_name,
        avatar_emoji=body.avatar_emoji,
        access_pin=body.access_pin,
    )
    return StudentResponse(
        id=student.id,
        parish_id=student.parish_id,
        display_name=student.display_name,
        avatar_emoji=student.avatar_emoji,
        has_pin=student.access_pin is not None,
        is_active=student.is_active,
        created_at=student.created_at,
    )


@router.post(
    "/grades/{grade}/classes/{class_id}/students/import/preview",
    response_model=RosterImportPreviewResponse,
)
async def preview_roster_import(
    grade: int,
    class_id: uuid.UUID,
    body: RosterImportRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Preview a roster import with duplicate-family matching."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)
    rows = await student_service.preview_roster_import(
        db,
        class_id=class_id,
        rows=body.rows,
    )
    return _build_roster_preview_response(rows)


@router.post(
    "/grades/{grade}/classes/{class_id}/students/import",
    response_model=RosterImportResponse,
    status_code=201,
)
async def import_roster(
    grade: int,
    class_id: uuid.UUID,
    body: RosterImportRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Import roster rows, skipping exact duplicate students."""
    gc = await grade_service.get_grade(db, parish_id=user.parish_id, grade=grade)
    await class_service.get_class(db, class_id=class_id, grade_config_id=gc.id)
    students, rows = await student_service.import_roster(
        db,
        parish_id=user.parish_id,
        class_id=class_id,
        rows=body.rows,
    )
    return RosterImportResponse(
        imported_students=[
            StudentResponse(
                id=s.id,
                parish_id=s.parish_id,
                display_name=s.display_name,
                avatar_emoji=s.avatar_emoji,
                has_pin=s.access_pin is not None,
                is_active=s.is_active,
                created_at=s.created_at,
            )
            for s in students
        ],
        preview=_build_roster_preview_response(rows),
    )


def _build_roster_preview_response(rows):
    return RosterImportPreviewResponse(
        rows=rows,
        ready_count=sum(1 for row in rows if row.match_status == "ready"),
        warning_count=sum(1 for row in rows if row.match_status == "warning"),
        duplicate_count=sum(1 for row in rows if row.match_status == "duplicate"),
    )
