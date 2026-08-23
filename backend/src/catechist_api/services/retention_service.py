"""Configured retention discovery and execution."""

from datetime import datetime, timedelta

from sqlalchemy import delete, func, select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.config import settings
from catechist_api.models import ActivityLog, Student
from catechist_api.services import audit_service, student_service


async def apply_retention(
    db: AsyncSession,
    *,
    now: datetime,
    execute: bool = False,
) -> dict[str, int | bool]:
    """Find expired records and optionally delete them in the current transaction."""
    student_cutoff = now - timedelta(days=settings.inactive_student_retention_days)
    audit_cutoff = now - timedelta(days=settings.audit_event_retention_days)
    students_result = await db.execute(
        select(Student).where(
            Student.is_active.is_(False),
            Student.updated_at < student_cutoff,
        )
    )
    students = list(students_result.scalars().all())
    audit_candidates = await db.scalar(
        select(func.count()).select_from(ActivityLog).where(ActivityLog.created_at < audit_cutoff)
    )

    students_deleted = 0
    audit_deleted = 0
    if execute:
        for student in students:
            student_ref = audit_service.subject_reference(
                parish_id=student.parish_id,
                subject_id=student.id,
            )
            deleted = await student_service.permanently_delete_student(
                db,
                student_id=student.id,
                parish_id=student.parish_id,
            )
            students_deleted += deleted["students"]
            await audit_service.record_event(
                db,
                parish_id=student.parish_id,
                actor_type="system",
                action="retention.student_deleted",
                metadata={"student_ref": student_ref, "records_deleted": deleted},
            )

        result = await db.execute(delete(ActivityLog).where(ActivityLog.created_at < audit_cutoff))
        audit_deleted = result.rowcount or 0

    return {
        "execute": execute,
        "student_candidates": len(students),
        "students_deleted": students_deleted,
        "audit_candidates": audit_candidates or 0,
        "audit_deleted": audit_deleted,
    }
