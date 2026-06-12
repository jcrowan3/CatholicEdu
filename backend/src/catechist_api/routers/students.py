"""Student router — update and deactivate students."""

import uuid

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.dependencies import require_catechist
from catechist_api.auth.jwt import TokenPayload
from catechist_api.database import get_db
from catechist_api.schemas.student import StudentResponse, StudentUpdateRequest
from catechist_api.services import student_service

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
