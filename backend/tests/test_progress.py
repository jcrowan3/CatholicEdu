"""Tests for progress and bookmark endpoints."""

import pytest
from httpx import AsyncClient


async def _full_setup(client: AsyncClient, suffix: str) -> dict:
    """Register parish → grade → class → student, return student token + IDs."""
    # Register parish
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": f"Progress Parish {suffix}",
            "email": f"cat-{suffix}@prog.org",
            "password": "securepass123",
            "display_name": "Catechist",
        },
    )
    cat_token = reg.json()["access_token"]
    cat_headers = {"Authorization": f"Bearer {cat_token}"}

    # Create grade
    await client.post("/api/v1/grades", json={"grade": 3}, headers=cat_headers)

    # Create class
    cls = await client.post(
        "/api/v1/grades/3/classes",
        json={"name": "Tuesday"},
        headers=cat_headers,
    )
    class_id = cls.json()["id"]
    join_code = cls.json()["join_code"]

    # Create student
    stu = await client.post(
        f"/api/v1/grades/3/classes/{class_id}/students",
        json={"display_name": "Maria"},
        headers=cat_headers,
    )
    student_id = stu.json()["id"]

    # Student login
    login = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": student_id},
    )
    stu_token = login.json()["access_token"]
    stu_headers = {"Authorization": f"Bearer {stu_token}"}

    return {
        "cat_headers": cat_headers,
        "stu_headers": stu_headers,
        "student_id": student_id,
        "class_id": class_id,
    }


# ─── Progress ───


@pytest.mark.asyncio
async def test_record_and_get_progress(client: AsyncClient):
    """Student records progress and retrieves it."""
    ctx = await _full_setup(client, "prog-1")
    sid = ctx["student_id"]
    headers = ctx["stu_headers"]

    # Record quiz completion
    r = await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 1, "activity": "quiz", "stars_earned": 4},
        headers=headers,
    )
    assert r.status_code == 201
    assert r.json()["stars_earned"] == 4

    # Record discover completion
    r2 = await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 1, "activity": "discover", "stars_earned": 3},
        headers=headers,
    )
    assert r2.status_code == 201

    # Get progress
    r3 = await client.get(f"/api/v1/students/{sid}/progress/3", headers=headers)
    assert r3.status_code == 200
    data = r3.json()
    assert data["grade"] == 3
    assert len(data["entries"]) == 2
    assert data["total_stars"] == 7


@pytest.mark.asyncio
async def test_progress_idempotent_keeps_best(client: AsyncClient):
    """Recording progress twice keeps the best score."""
    ctx = await _full_setup(client, "prog-2")
    sid = ctx["student_id"]
    headers = ctx["stu_headers"]

    # First attempt: 3 stars
    await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 2, "activity": "quiz", "stars_earned": 3},
        headers=headers,
    )

    # Second attempt: 5 stars (better)
    r = await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 2, "activity": "quiz", "stars_earned": 5},
        headers=headers,
    )
    assert r.status_code == 201
    assert r.json()["stars_earned"] == 5

    # Third attempt: 2 stars (worse) — should keep 5
    r2 = await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 2, "activity": "quiz", "stars_earned": 2},
        headers=headers,
    )
    assert r2.status_code == 201
    assert r2.json()["stars_earned"] == 5


@pytest.mark.asyncio
async def test_catechist_can_view_student_progress(client: AsyncClient):
    """Catechist can view any student's progress in their parish."""
    ctx = await _full_setup(client, "prog-3")
    sid = ctx["student_id"]

    # Student records progress
    await client.post(
        f"/api/v1/students/{sid}/progress",
        json={"grade": 3, "week": 1, "activity": "prayer", "stars_earned": 3},
        headers=ctx["stu_headers"],
    )

    # Catechist views it
    r = await client.get(
        f"/api/v1/students/{sid}/progress/3",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200
    assert len(r.json()["entries"]) == 1


# ─── Bookmarks ───


@pytest.mark.asyncio
async def test_bookmark_crud(client: AsyncClient):
    """Full bookmark lifecycle: create, list, delete."""
    ctx = await _full_setup(client, "bkmk-1")
    sid = ctx["student_id"]
    headers = ctx["stu_headers"]

    # Create bookmark
    r = await client.post(
        f"/api/v1/students/{sid}/bookmarks",
        json={
            "grade": 3,
            "week": 1,
            "discover_index": 0,
            "item_name": "The Holy Trinity",
            "item_desc": "God is three persons in one.",
            "item_icon": "✝️",
            "pillar": "Creed",
        },
        headers=headers,
    )
    assert r.status_code == 201
    bookmark_id = r.json()["id"]
    assert r.json()["item_name"] == "The Holy Trinity"

    # Create another
    await client.post(
        f"/api/v1/students/{sid}/bookmarks",
        json={
            "grade": 3,
            "week": 2,
            "discover_index": 1,
            "item_name": "Baptism",
            "pillar": "Sacraments",
        },
        headers=headers,
    )

    # List
    r_list = await client.get(f"/api/v1/students/{sid}/bookmarks/3", headers=headers)
    assert r_list.status_code == 200
    assert len(r_list.json()) == 2

    # Delete
    r_del = await client.delete(
        f"/api/v1/students/{sid}/bookmarks/{bookmark_id}",
        headers=headers,
    )
    assert r_del.status_code == 204

    # List again — should be 1
    r_list2 = await client.get(f"/api/v1/students/{sid}/bookmarks/3", headers=headers)
    assert len(r_list2.json()) == 1


@pytest.mark.asyncio
async def test_duplicate_bookmark_returns_409(client: AsyncClient):
    """Creating the same bookmark twice returns 409."""
    ctx = await _full_setup(client, "bkmk-2")
    sid = ctx["student_id"]
    headers = ctx["stu_headers"]

    payload = {
        "grade": 3,
        "week": 1,
        "discover_index": 0,
        "item_name": "Item A",
    }

    r1 = await client.post(f"/api/v1/students/{sid}/bookmarks", json=payload, headers=headers)
    assert r1.status_code == 201

    r2 = await client.post(f"/api/v1/students/{sid}/bookmarks", json=payload, headers=headers)
    assert r2.status_code == 409
