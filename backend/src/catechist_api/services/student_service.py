"""Student business logic."""

import csv
import io
import uuid
from collections import defaultdict
from dataclasses import dataclass
from datetime import UTC, datetime

from fastapi import HTTPException, status
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import (
    ActivityLog,
    Bookmark,
    Class,
    ClassEnrollment,
    ProgressEntry,
    Student,
)
from catechist_api.schemas.student import RosterImportPreviewRow, RosterImportRow
from catechist_api.services.csv_safety import sanitize_csv_cell


@dataclass(frozen=True)
class _ExistingStudentMatch:
    """Normalized details used for roster matching."""

    display_name: str
    name_key: str
    family_key: str


async def list_students_in_class(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
) -> list[Student]:
    """List all active students enrolled in a class."""
    result = await db.execute(
        select(Student)
        .join(ClassEnrollment, ClassEnrollment.student_id == Student.id)
        .where(
            ClassEnrollment.class_id == class_id,
            ClassEnrollment.is_active.is_(True),
            Student.is_active.is_(True),
        )
        .order_by(Student.display_name)
    )
    return list(result.scalars().all())


def _normalize_match_key(value: str | None) -> str:
    """Normalize a name fragment for conservative roster matching."""
    if not value:
        return ""
    return " ".join("".join(ch.lower() if ch.isalnum() else " " for ch in value).split())


def _family_key(row: RosterImportRow) -> str:
    if row.family_name:
        return _normalize_match_key(row.family_name)
    parts = row.display_name.split()
    if len(parts) < 2:
        return ""
    return _normalize_match_key(parts[-1])


def _existing_match(student: Student) -> _ExistingStudentMatch:
    parts = student.display_name.split()
    family_name = parts[-1] if len(parts) > 1 else ""
    return _ExistingStudentMatch(
        display_name=student.display_name,
        name_key=_normalize_match_key(student.display_name),
        family_key=_normalize_match_key(family_name),
    )


async def preview_roster_import(
    db: AsyncSession,
    *,
    class_id: uuid.UUID,
    rows: list[RosterImportRow],
) -> list[RosterImportPreviewRow]:
    """Preview duplicate names and possible duplicate-family matches."""
    existing_students = await list_students_in_class(db, class_id=class_id)
    existing_matches = [_existing_match(student) for student in existing_students]
    existing_name_keys = {student.name_key for student in existing_matches}

    family_students: dict[str, list[str]] = defaultdict(list)
    for student in existing_matches:
        if student.family_key:
            family_students[student.family_key].append(student.display_name)

    seen_import_names: set[str] = set()
    preview_rows: list[RosterImportPreviewRow] = []
    for index, row in enumerate(rows):
        name_key = _normalize_match_key(row.display_name)
        family_key = _family_key(row)
        existing_family_students = family_students.get(family_key, []) if family_key else []

        if name_key in existing_name_keys:
            match_status = "duplicate"
            match_reason = "Student already exists in this class."
        elif name_key in seen_import_names:
            match_status = "duplicate"
            match_reason = "Duplicate student name in this import."
        elif existing_family_students:
            match_status = "warning"
            match_reason = "Possible family match in this class."
        else:
            match_status = "ready"
            match_reason = "Ready to import."

        preview_rows.append(
            RosterImportPreviewRow(
                row_index=index,
                display_name=row.display_name.strip(),
                family_name=row.family_name.strip() if row.family_name else None,
                avatar_emoji=row.avatar_emoji,
                match_status=match_status,
                match_reason=match_reason,
                existing_family_students=existing_family_students,
            )
        )
        seen_import_names.add(name_key)

    return preview_rows


async def create_student_and_enroll(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    class_id: uuid.UUID,
    display_name: str,
    avatar_emoji: str = "😊",
    access_pin: str | None = None,
    parent_email: str | None = None,
    pickup_contact_notes: str | None = None,
    media_permission_granted: bool = False,
    allergy_privacy_flags: str | None = None,
    weekly_digest_permission: bool = False,
) -> Student:
    """Create a student and enroll them in a class."""
    student = Student(
        parish_id=parish_id,
        display_name=display_name,
        avatar_emoji=avatar_emoji,
        access_pin=access_pin,
        parent_email=parent_email,
        pickup_contact_notes=pickup_contact_notes,
        media_permission_granted=media_permission_granted,
        allergy_privacy_flags=allergy_privacy_flags,
        weekly_digest_permission=weekly_digest_permission,
    )
    db.add(student)
    await db.flush()

    enrollment = ClassEnrollment(class_id=class_id, student_id=student.id)
    db.add(enrollment)
    await db.flush()

    return student


async def import_roster(
    db: AsyncSession,
    *,
    parish_id: uuid.UUID,
    class_id: uuid.UUID,
    rows: list[RosterImportRow],
) -> tuple[list[Student], list[RosterImportPreviewRow]]:
    """Import roster rows, skipping exact duplicates."""
    preview_rows = await preview_roster_import(db, class_id=class_id, rows=rows)
    imported_students: list[Student] = []
    for row, preview in zip(rows, preview_rows, strict=True):
        if preview.match_status == "duplicate":
            continue
        student = await create_student_and_enroll(
            db,
            parish_id=parish_id,
            class_id=class_id,
            display_name=row.display_name.strip(),
            avatar_emoji=row.avatar_emoji,
        )
        imported_students.append(student)
    return imported_students, preview_rows


async def get_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> Student:
    """Get a student by ID, scoped to a parish."""
    result = await db.execute(
        select(Student).where(
            Student.id == student_id,
            Student.parish_id == parish_id,
        )
    )
    student = result.scalar_one_or_none()
    if student is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    return student


async def update_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
    display_name: str | None = None,
    avatar_emoji: str | None = None,
    access_pin: str | None = None,
    parent_email: str | None = None,
    pickup_contact_notes: str | None = None,
    media_permission_granted: bool | None = None,
    allergy_privacy_flags: str | None = None,
    weekly_digest_permission: bool | None = None,
    is_active: bool | None = None,
) -> Student:
    """Update a student."""
    student = await get_student(db, student_id=student_id, parish_id=parish_id)
    if display_name is not None:
        student.display_name = display_name
    if avatar_emoji is not None:
        student.avatar_emoji = avatar_emoji
    if access_pin is not None:
        student.access_pin = access_pin
    if parent_email is not None:
        student.parent_email = parent_email
    if pickup_contact_notes is not None:
        student.pickup_contact_notes = pickup_contact_notes
    if media_permission_granted is not None:
        student.media_permission_granted = media_permission_granted
    if allergy_privacy_flags is not None:
        student.allergy_privacy_flags = allergy_privacy_flags
    if weekly_digest_permission is not None:
        student.weekly_digest_permission = weekly_digest_permission
    if is_active is not None:
        student.is_active = is_active
    await db.flush()
    return student


async def deactivate_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> Student:
    """Soft-delete a student."""
    return await update_student(db, student_id=student_id, parish_id=parish_id, is_active=False)


async def export_student_data(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> dict:
    """Build a complete tenant-scoped export without exposing the authentication PIN."""
    student = await get_student(db, student_id=student_id, parish_id=parish_id)
    enrollment_result = await db.execute(
        select(ClassEnrollment, Class)
        .join(Class, Class.id == ClassEnrollment.class_id)
        .where(ClassEnrollment.student_id == student.id)
        .order_by(ClassEnrollment.enrolled_at)
    )
    progress_result = await db.execute(
        select(ProgressEntry)
        .where(ProgressEntry.student_id == student.id)
        .order_by(ProgressEntry.grade, ProgressEntry.week, ProgressEntry.activity)
    )
    bookmark_result = await db.execute(
        select(Bookmark)
        .where(Bookmark.student_id == student.id)
        .order_by(Bookmark.grade, Bookmark.week, Bookmark.discover_index)
    )

    return {
        "schema_version": 1,
        "exported_at": datetime.now(UTC),
        "student": {
            "id": str(student.id),
            "display_name": student.display_name,
            "avatar_emoji": student.avatar_emoji,
            "parent_email": student.parent_email,
            "pickup_contact_notes": student.pickup_contact_notes,
            "media_permission_granted": student.media_permission_granted,
            "allergy_privacy_flags": student.allergy_privacy_flags,
            "weekly_digest_permission": student.weekly_digest_permission,
            "has_pin": student.access_pin is not None,
            "is_active": student.is_active,
            "created_at": student.created_at,
            "updated_at": student.updated_at,
        },
        "enrollments": [
            {
                "class_id": str(enrollment.class_id),
                "class_name": class_.name,
                "is_active": enrollment.is_active,
                "enrolled_at": enrollment.enrolled_at,
            }
            for enrollment, class_ in enrollment_result.all()
        ],
        "progress": [
            {
                "grade": entry.grade,
                "week": entry.week,
                "activity": entry.activity,
                "stars_earned": entry.stars_earned,
                "earned_at": entry.earned_at,
            }
            for entry in progress_result.scalars().all()
        ],
        "bookmarks": [
            {
                "grade": bookmark.grade,
                "week": bookmark.week,
                "discover_index": bookmark.discover_index,
                "item_name": bookmark.item_name,
                "item_desc": bookmark.item_desc,
                "item_icon": bookmark.item_icon,
                "pillar": bookmark.pillar,
                "saved_at": bookmark.saved_at,
            }
            for bookmark in bookmark_result.scalars().all()
        ],
    }


async def permanently_delete_student(
    db: AsyncSession,
    *,
    student_id: uuid.UUID,
    parish_id: uuid.UUID,
) -> dict[str, int]:
    """Hard-delete a student and every directly associated database record."""
    student = await get_student(db, student_id=student_id, parish_id=parish_id)
    deleted: dict[str, int] = {}
    for label, model, condition in [
        ("bookmarks", Bookmark, Bookmark.student_id == student.id),
        ("progress", ProgressEntry, ProgressEntry.student_id == student.id),
        ("enrollments", ClassEnrollment, ClassEnrollment.student_id == student.id),
        (
            "student_audit_events",
            ActivityLog,
            (ActivityLog.actor_type == "student") & (ActivityLog.actor_id == student.id),
        ),
    ]:
        result = await db.execute(delete(model).where(condition))
        deleted[label] = result.rowcount or 0

    await db.delete(student)
    await db.flush()
    deleted["students"] = 1
    return deleted


def build_family_communication_csv(students: list[Student]) -> str:
    """Build an audit CSV for family communication permissions."""
    output = io.StringIO()
    writer = csv.DictWriter(
        output,
        fieldnames=[
            "student_name",
            "parent_email",
            "pickup_contact_notes",
            "media_permission_granted",
            "allergy_privacy_flags",
            "weekly_digest_permission",
        ],
    )
    writer.writeheader()
    for student in students:
        writer.writerow(
            {
                "student_name": sanitize_csv_cell(student.display_name),
                "parent_email": sanitize_csv_cell(student.parent_email or ""),
                "pickup_contact_notes": sanitize_csv_cell(student.pickup_contact_notes or ""),
                "media_permission_granted": "yes" if student.media_permission_granted else "no",
                "allergy_privacy_flags": sanitize_csv_cell(student.allergy_privacy_flags or ""),
                "weekly_digest_permission": "yes" if student.weekly_digest_permission else "no",
            }
        )
    return output.getvalue()
