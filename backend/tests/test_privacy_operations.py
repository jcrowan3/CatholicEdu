"""Tests for data export, verified deletion, audit, and retention operations."""

import uuid
from datetime import UTC, datetime, timedelta

import pytest
from httpx import AsyncClient
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.models import ActivityLog, Bookmark, ClassEnrollment, ProgressEntry, Student
from catechist_api.services.retention_service import apply_retention


async def _student_context(client: AsyncClient) -> dict:
    registered = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Privacy Operations Parish",
            "email": "privacy-ops@example.org",
            "password": "securepass123",
            "display_name": "Privacy Admin",
        },
    )
    headers = {"Authorization": f"Bearer {registered.json()['access_token']}"}
    await client.post("/api/v1/grades", json={"grade": 4}, headers=headers)
    class_response = await client.post(
        "/api/v1/grades/4/classes",
        json={"name": "Privacy Test Class"},
        headers=headers,
    )
    class_id = class_response.json()["id"]
    student_response = await client.post(
        f"/api/v1/grades/4/classes/{class_id}/students",
        json={
            "display_name": "Export Student",
            "access_pin": "2468",
            "parent_email": "family@example.org",
        },
        headers=headers,
    )
    student_id = student_response.json()["id"]
    await client.post(
        f"/api/v1/students/{student_id}/progress",
        json={"grade": 4, "week": 1, "activity": "discover", "stars_earned": 2},
        headers=headers,
    )
    await client.post(
        f"/api/v1/students/{student_id}/bookmarks",
        json={
            "grade": 4,
            "week": 1,
            "discover_index": 0,
            "item_name": "A saved concept",
        },
        headers=headers,
    )
    return {"headers": headers, "student_id": student_id}


@pytest.mark.asyncio
async def test_student_export_and_confirmation_gated_permanent_deletion(
    client: AsyncClient,
    db_session: AsyncSession,
):
    context = await _student_context(client)
    student_id = context["student_id"]
    student_uuid = uuid.UUID(student_id)
    headers = context["headers"]

    exported = await client.get(f"/api/v1/students/{student_id}/export", headers=headers)
    assert exported.status_code == 200
    data = exported.json()
    assert data["schema_version"] == 1
    assert data["student"]["display_name"] == "Export Student"
    assert data["student"]["has_pin"] is True
    assert "access_pin" not in data["student"]
    assert len(data["enrollments"]) == 1
    assert len(data["progress"]) == 1
    assert len(data["bookmarks"]) == 1

    rejected = await client.request(
        "DELETE",
        f"/api/v1/students/{student_id}/permanent",
        json={"confirmation": f"delete {student_id}"},
        headers=headers,
    )
    assert rejected.status_code == 400

    deleted = await client.request(
        "DELETE",
        f"/api/v1/students/{student_id}/permanent",
        json={"confirmation": f"DELETE {student_id}"},
        headers=headers,
    )
    assert deleted.status_code == 204

    for model in (Student, ClassEnrollment, ProgressEntry, Bookmark):
        count = await db_session.scalar(
            select(func.count())
            .select_from(model)
            .where(
                (model.id == student_uuid)
                if model is Student
                else (model.student_id == student_uuid)
            )
        )
        assert count == 0

    audit_response = await client.get("/api/v1/parish/audit-events", headers=headers)
    assert audit_response.status_code == 200
    events = audit_response.json()
    deletion_event = next(
        event for event in events if event["action"] == "student.permanently_deleted"
    )
    assert str(student_id) not in str(deletion_event["metadata"])
    assert deletion_event["metadata"]["records_deleted"]["students"] == 1


@pytest.mark.asyncio
async def test_retention_defaults_to_preview_and_executes_expired_deletions(
    db_session: AsyncSession,
    parish,
):
    now = datetime.now(UTC)
    expired = Student(
        parish_id=parish.id,
        display_name="Expired Student",
        is_active=False,
        updated_at=now - timedelta(days=500),
    )
    old_event = ActivityLog(
        parish_id=parish.id,
        actor_type="system",
        action="old.event",
        created_at=now - timedelta(days=500),
    )
    db_session.add_all([expired, old_event])
    await db_session.flush()

    preview = await apply_retention(db_session, now=now)
    assert preview == {
        "execute": False,
        "student_candidates": 1,
        "students_deleted": 0,
        "audit_candidates": 1,
        "audit_deleted": 0,
    }
    assert await db_session.get(Student, expired.id) is not None

    result = await apply_retention(db_session, now=now, execute=True)
    assert result["students_deleted"] == 1
    assert result["audit_deleted"] == 1
    assert await db_session.get(Student, expired.id) is None
