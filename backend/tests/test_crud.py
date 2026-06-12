"""Tests for CRUD endpoints — parish, grades, classes, students."""

import csv
import io

import pytest
from httpx import AsyncClient


# ─── Helper ───


async def _register_and_get_headers(client: AsyncClient, suffix: str) -> dict:
    """Register a parish and return auth headers."""
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": f"CRUD Test Parish {suffix}",
            "email": f"admin-{suffix}@test.org",
            "password": "securepass123",
            "display_name": f"Admin {suffix}",
        },
    )
    token = reg.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


# ─── Parish ───


@pytest.mark.asyncio
async def test_get_parish(client: AsyncClient):
    """GET /parish returns the authenticated catechist's parish."""
    headers = await _register_and_get_headers(client, "get-parish")
    response = await client.get("/api/v1/parish", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "CRUD Test Parish get-parish" in data["name"]
    assert data["is_active"] is True


@pytest.mark.asyncio
async def test_update_parish(client: AsyncClient):
    """PATCH /parish updates parish name."""
    headers = await _register_and_get_headers(client, "update-parish")
    response = await client.patch(
        "/api/v1/parish",
        json={"name": "Renamed Parish"},
        headers=headers,
    )
    assert response.status_code == 200
    assert response.json()["name"] == "Renamed Parish"


@pytest.mark.asyncio
async def test_parish_requires_auth(client: AsyncClient):
    """GET /parish without token returns 401/403."""
    response = await client.get("/api/v1/parish")
    assert response.status_code in (401, 403)


# ─── Grades ───


@pytest.mark.asyncio
async def test_grade_crud(client: AsyncClient):
    """Full grade config CRUD cycle."""
    headers = await _register_and_get_headers(client, "grade-crud")

    # Create
    r1 = await client.post(
        "/api/v1/grades",
        json={"grade": 3, "program_name": "Grade 3 CCD"},
        headers=headers,
    )
    assert r1.status_code == 201
    assert r1.json()["grade"] == 3
    assert r1.json()["program_name"] == "Grade 3 CCD"

    # Create another
    r2 = await client.post(
        "/api/v1/grades",
        json={"grade": 4},
        headers=headers,
    )
    assert r2.status_code == 201

    # List
    r_list = await client.get("/api/v1/grades", headers=headers)
    assert r_list.status_code == 200
    assert len(r_list.json()) == 2

    # Duplicate → 409
    r_dup = await client.post(
        "/api/v1/grades",
        json={"grade": 3},
        headers=headers,
    )
    assert r_dup.status_code == 409

    # Update
    r_update = await client.patch(
        "/api/v1/grades/3",
        json={"program_name": "Updated CCD", "is_active": False},
        headers=headers,
    )
    assert r_update.status_code == 200
    assert r_update.json()["program_name"] == "Updated CCD"
    assert r_update.json()["is_active"] is False


# ─── Classes ───


@pytest.mark.asyncio
async def test_class_crud(client: AsyncClient):
    """Full class CRUD cycle within a grade."""
    headers = await _register_and_get_headers(client, "class-crud")

    # Setup: create grade
    await client.post("/api/v1/grades", json={"grade": 2}, headers=headers)

    # Create class
    r1 = await client.post(
        "/api/v1/grades/2/classes",
        json={"name": "Monday 3pm"},
        headers=headers,
    )
    assert r1.status_code == 201
    data = r1.json()
    assert data["name"] == "Monday 3pm"
    assert len(data["join_code"]) == 6
    assert data["student_count"] == 0
    class_id = data["id"]

    # Create another class
    r2 = await client.post(
        "/api/v1/grades/2/classes",
        json={"name": "Wednesday 5pm"},
        headers=headers,
    )
    assert r2.status_code == 201

    # List classes
    r_list = await client.get("/api/v1/grades/2/classes", headers=headers)
    assert r_list.status_code == 200
    assert len(r_list.json()) == 2

    # Update class
    r_update = await client.patch(
        f"/api/v1/grades/2/classes/{class_id}",
        json={"name": "Monday 4pm"},
        headers=headers,
    )
    assert r_update.status_code == 200
    assert r_update.json()["name"] == "Monday 4pm"

    # Soft-delete class
    r_delete = await client.delete(
        f"/api/v1/grades/2/classes/{class_id}",
        headers=headers,
    )
    assert r_delete.status_code == 204


# ─── Students ───


@pytest.mark.asyncio
async def test_student_crud(client: AsyncClient):
    """Full student CRUD cycle."""
    headers = await _register_and_get_headers(client, "student-crud")

    # Setup: grade + class
    await client.post("/api/v1/grades", json={"grade": 6}, headers=headers)
    cls = await client.post(
        "/api/v1/grades/6/classes",
        json={"name": "Saturday 10am"},
        headers=headers,
    )
    class_id = cls.json()["id"]

    # Create student
    r1 = await client.post(
        f"/api/v1/grades/6/classes/{class_id}/students",
        json={
            "display_name": "Maria",
            "avatar_emoji": "🌟",
            "parent_email": "maria.parent@example.org",
            "pickup_contact_notes": "Aunt Lucia may pick up after class.",
            "media_permission_granted": True,
            "allergy_privacy_flags": "Peanut allergy",
            "weekly_digest_permission": True,
        },
        headers=headers,
    )
    assert r1.status_code == 201
    data = r1.json()
    assert data["display_name"] == "Maria"
    assert data["avatar_emoji"] == "🌟"
    assert data["parent_email"] == "maria.parent@example.org"
    assert data["pickup_contact_notes"] == "Aunt Lucia may pick up after class."
    assert data["media_permission_granted"] is True
    assert data["allergy_privacy_flags"] == "Peanut allergy"
    assert data["weekly_digest_permission"] is True
    assert data["has_pin"] is False
    student_id = data["id"]

    # Create student with PIN
    r2 = await client.post(
        f"/api/v1/grades/6/classes/{class_id}/students",
        json={"display_name": "Jose", "access_pin": "4321"},
        headers=headers,
    )
    assert r2.status_code == 201
    assert r2.json()["has_pin"] is True

    # List students
    r_list = await client.get(f"/api/v1/grades/6/classes/{class_id}/students", headers=headers)
    assert r_list.status_code == 200
    assert len(r_list.json()) == 2
    maria = next(student for student in r_list.json() if student["display_name"] == "Maria")
    assert maria["parent_email"] == "maria.parent@example.org"
    assert maria["weekly_digest_permission"] is True

    # Update student
    r_update = await client.patch(
        f"/api/v1/students/{student_id}",
        json={
            "display_name": "Maria Elena",
            "avatar_emoji": "💖",
            "parent_email": "new.parent@example.org",
            "pickup_contact_notes": "Only listed guardians may pick up.",
            "media_permission_granted": False,
            "allergy_privacy_flags": "Peanut allergy; carries epipen",
            "weekly_digest_permission": False,
        },
        headers=headers,
    )
    assert r_update.status_code == 200
    assert r_update.json()["display_name"] == "Maria Elena"
    assert r_update.json()["avatar_emoji"] == "💖"
    assert r_update.json()["parent_email"] == "new.parent@example.org"
    assert r_update.json()["pickup_contact_notes"] == "Only listed guardians may pick up."
    assert r_update.json()["media_permission_granted"] is False
    assert r_update.json()["allergy_privacy_flags"] == "Peanut allergy; carries epipen"
    assert r_update.json()["weekly_digest_permission"] is False

    export = await client.get(
        f"/api/v1/grades/6/classes/{class_id}/students/communication-export",
        headers=headers,
    )
    assert export.status_code == 200
    assert export.headers["content-type"].startswith("text/csv")
    csv_rows = list(csv.DictReader(io.StringIO(export.text)))
    assert csv_rows == [
        {
            "student_name": "Jose",
            "parent_email": "",
            "pickup_contact_notes": "",
            "media_permission_granted": "no",
            "allergy_privacy_flags": "",
            "weekly_digest_permission": "no",
        },
        {
            "student_name": "Maria Elena",
            "parent_email": "new.parent@example.org",
            "pickup_contact_notes": "Only listed guardians may pick up.",
            "media_permission_granted": "no",
            "allergy_privacy_flags": "Peanut allergy; carries epipen",
            "weekly_digest_permission": "no",
        },
    ]

    # Soft-delete student
    r_delete = await client.delete(
        f"/api/v1/students/{student_id}",
        headers=headers,
    )
    assert r_delete.status_code == 204

    # After deactivation, list should show fewer active students
    r_list2 = await client.get(f"/api/v1/grades/6/classes/{class_id}/students", headers=headers)
    assert len(r_list2.json()) == 1  # Only Jose remains active


@pytest.mark.asyncio
async def test_roster_import_preview_and_import(client: AsyncClient):
    """Roster import previews exact duplicates and duplicate-family matches."""
    headers = await _register_and_get_headers(client, "roster-import")

    await client.post("/api/v1/grades", json={"grade": 5}, headers=headers)
    cls = await client.post(
        "/api/v1/grades/5/classes",
        json={"name": "Sunday 9am"},
        headers=headers,
    )
    class_id = cls.json()["id"]

    existing = await client.post(
        f"/api/v1/grades/5/classes/{class_id}/students",
        json={"display_name": "Maria Santos", "avatar_emoji": "🌟"},
        headers=headers,
    )
    assert existing.status_code == 201

    rows = [
        {"display_name": "Maria Santos", "family_name": "Santos"},
        {"display_name": "Jose Santos", "family_name": "Santos"},
        {"display_name": "Ana Rivera", "family_name": "Rivera", "avatar_emoji": "📚"},
        {"display_name": "Ana Rivera", "family_name": "Rivera"},
    ]

    preview = await client.post(
        f"/api/v1/grades/5/classes/{class_id}/students/import/preview",
        json={"rows": rows},
        headers=headers,
    )
    assert preview.status_code == 200
    data = preview.json()
    assert data["ready_count"] == 1
    assert data["warning_count"] == 1
    assert data["duplicate_count"] == 2
    assert [row["match_status"] for row in data["rows"]] == [
        "duplicate",
        "warning",
        "ready",
        "duplicate",
    ]
    assert data["rows"][1]["existing_family_students"] == ["Maria Santos"]

    imported = await client.post(
        f"/api/v1/grades/5/classes/{class_id}/students/import",
        json={"rows": rows},
        headers=headers,
    )
    assert imported.status_code == 201
    import_data = imported.json()
    assert [s["display_name"] for s in import_data["imported_students"]] == [
        "Jose Santos",
        "Ana Rivera",
    ]

    roster = await client.get(f"/api/v1/grades/5/classes/{class_id}/students", headers=headers)
    assert roster.status_code == 200
    assert [student["display_name"] for student in roster.json()] == [
        "Ana Rivera",
        "Jose Santos",
        "Maria Santos",
    ]
