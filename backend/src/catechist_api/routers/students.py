"""Student router — update and deactivate students."""

import uuid

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist, require_parish_admin
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.student import (
    PermanentDeleteRequest,
    StudentDataExportResponse,
    StudentResponse,
    StudentUpdateRequest,
)
from catechist_api.services import audit_service, student_service

router = APIRouter()


@router.patch("/{student_id}", response_model=StudentResponse)
async def update_student(
    student_id: uuid.UUID,
    body: StudentUpdateRequest,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Update a student's info."""
    student = await student_service.update_student(
        db,
        student_id=student_id,
        parish_id=user.parish_id,
        display_name=body.display_name,
        avatar_emoji=body.avatar_emoji,
        access_pin=body.access_pin,
        parent_email=str(body.parent_email) if body.parent_email else None,
        pickup_contact_notes=body.pickup_contact_notes,
        media_permission_granted=body.media_permission_granted,
        allergy_privacy_flags=body.allergy_privacy_flags,
        weekly_digest_permission=body.weekly_digest_permission,
        is_active=body.is_active,
    )
    changed_fields = sorted(body.model_fields_set - {"access_pin"})
    await audit_service.record_event(
        db,
        parish_id=user.parish_id,
        actor_type="catechist",
        actor_id=user.sub,
        action="student.updated",
        metadata={
            "student_ref": audit_service.subject_reference(
                parish_id=user.parish_id, subject_id=student.id
            ),
            "changed_fields": changed_fields,
            "pin_changed": "access_pin" in body.model_fields_set,
        },
    )
    return StudentResponse(
        id=student.id,
        parish_id=student.parish_id,
        display_name=student.display_name,
        avatar_emoji=student.avatar_emoji,
        parent_email=student.parent_email,
        pickup_contact_notes=student.pickup_contact_notes,
        media_permission_granted=student.media_permission_granted,
        allergy_privacy_flags=student.allergy_privacy_flags,
        weekly_digest_permission=student.weekly_digest_permission,
        has_pin=student.access_pin is not None,
        is_active=student.is_active,
        created_at=student.created_at,
    )


@router.delete("/{student_id}", status_code=204)
async def delete_student(
    student_id: uuid.UUID,
    user: TokenPayload = Depends(require_catechist),
    db: AsyncSession = Depends(get_db),
):
    """Soft-delete a student (deactivate)."""
    await student_service.deactivate_student(db, student_id=student_id, parish_id=user.parish_id)
    await audit_service.record_event(
        db,
        parish_id=user.parish_id,
        actor_type="catechist",
        actor_id=user.sub,
        action="student.deactivated",
        metadata={
            "student_ref": audit_service.subject_reference(
                parish_id=user.parish_id, subject_id=student_id
            )
        },
    )
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.get("/{student_id}/export", response_model=StudentDataExportResponse)
async def export_student_data(
    student_id: uuid.UUID,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
):
    """Export all stored data for one student; parish administrators only."""
    export = await student_service.export_student_data(
        db,
        student_id=student_id,
        parish_id=user.parish_id,
    )
    await audit_service.record_event(
        db,
        parish_id=user.parish_id,
        actor_type="catechist",
        actor_id=user.sub,
        action="student.exported",
        metadata={
            "student_ref": audit_service.subject_reference(
                parish_id=user.parish_id, subject_id=student_id
            ),
            "enrollments": len(export["enrollments"]),
            "progress": len(export["progress"]),
            "bookmarks": len(export["bookmarks"]),
        },
    )
    return export


@router.delete("/{student_id}/permanent", status_code=status.HTTP_204_NO_CONTENT)
async def permanently_delete_student(
    student_id: uuid.UUID,
    body: PermanentDeleteRequest,
    user: TokenPayload = Depends(require_parish_admin),
    db: AsyncSession = Depends(get_db),
) -> Response:
    """Permanently delete one student after an exact confirmation phrase."""
    expected = f"DELETE {student_id}"
    if body.confirmation != expected:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Confirmation must exactly match: {expected}",
        )
    student_ref = audit_service.subject_reference(
        parish_id=user.parish_id,
        subject_id=student_id,
    )
    deleted = await student_service.permanently_delete_student(
        db,
        student_id=student_id,
        parish_id=user.parish_id,
    )
    await audit_service.record_event(
        db,
        parish_id=user.parish_id,
        actor_type="catechist",
        actor_id=user.sub,
        action="student.permanently_deleted",
        metadata={"student_ref": student_ref, "records_deleted": deleted},
    )
    return Response(status_code=status.HTTP_204_NO_CONTENT)
