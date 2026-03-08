"""Tests for multi-tenant parish data isolation.

Verifies that catechists from one parish cannot access another parish's data.
"""

import pytest
from httpx import AsyncClient


async def _setup_parish(client: AsyncClient, suffix: str) -> dict:
    """Register a parish and create grade + class + student. Returns context dict."""
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": f"Isolation Parish {suffix}",
            "email": f"admin-{suffix}@isolation.org",
            "password": "securepass123",
            "display_name": f"Admin {suffix}",
        },
    )
    token = reg.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create grade
    await client.post("/api/v1/grades", json={"grade": 3}, headers=headers)

    # Create class
    cls = await client.post(
        "/api/v1/grades/3/classes",
        json={"name": f"Class {suffix}"},
        headers=headers,
    )
    class_id = cls.json()["id"]
    join_code = cls.json()["join_code"]

    # Create student
    stu = await client.post(
        f"/api/v1/grades/3/classes/{class_id}/students",
        json={"display_name": f"Student {suffix}"},
        headers=headers,
    )
    student_id = stu.json()["id"]

    return {
        "token": token,
        "headers": headers,
        "class_id": class_id,
        "join_code": join_code,
        "student_id": student_id,
    }


@pytest.mark.asyncio
async def test_parish_isolation_grades(client: AsyncClient):
    """Catechist from Parish A cannot see Parish B's grades."""
    a = await _setup_parish(client, "iso-a1")
    b = await _setup_parish(client, "iso-b1")

    # Parish A should see their own grade
    grades_a = await client.get("/api/v1/grades", headers=a["headers"])
    assert grades_a.status_code == 200
    assert len(grades_a.json()) == 1

    # Parish B should see their own grade (not A's)
    grades_b = await client.get("/api/v1/grades", headers=b["headers"])
    assert grades_b.status_code == 200
    assert len(grades_b.json()) == 1


@pytest.mark.asyncio
async def test_parish_isolation_classes(client: AsyncClient):
    """Catechist from Parish A cannot see Parish B's classes."""
    a = await _setup_parish(client, "iso-a2")
    b = await _setup_parish(client, "iso-b2")

    # Parish A's classes for grade 3
    classes_a = await client.get("/api/v1/grades/3/classes", headers=a["headers"])
    assert classes_a.status_code == 200
    assert len(classes_a.json()) == 1
    assert classes_a.json()[0]["id"] == a["class_id"]

    # Parish B's classes — should only see B's
    classes_b = await client.get("/api/v1/grades/3/classes", headers=b["headers"])
    assert classes_b.status_code == 200
    assert len(classes_b.json()) == 1
    assert classes_b.json()[0]["id"] == b["class_id"]


@pytest.mark.asyncio
async def test_parish_isolation_students(client: AsyncClient):
    """Catechist from Parish A cannot update Parish B's students."""
    a = await _setup_parish(client, "iso-a3")
    b = await _setup_parish(client, "iso-b3")

    # A tries to update B's student → should fail (404, student not in A's parish)
    response = await client.patch(
        f"/api/v1/students/{b['student_id']}",
        json={"display_name": "Hacked!"},
        headers=a["headers"],
    )
    assert response.status_code == 404


@pytest.mark.asyncio
async def test_parish_isolation_parish_info(client: AsyncClient):
    """Each catechist only sees their own parish info."""
    a = await _setup_parish(client, "iso-a4")
    b = await _setup_parish(client, "iso-b4")

    parish_a = await client.get("/api/v1/parish", headers=a["headers"])
    parish_b = await client.get("/api/v1/parish", headers=b["headers"])

    assert parish_a.json()["name"] != parish_b.json()["name"]
    assert "iso-a4" in parish_a.json()["name"]
    assert "iso-b4" in parish_b.json()["name"]
