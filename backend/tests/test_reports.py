"""Tests for reporting endpoints."""

import pytest
from httpx import AsyncClient


async def _setup_with_progress(client: AsyncClient, suffix: str) -> dict:
    """Register parish → grade → class → 2 students with progress. Return context."""
    # Register
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": f"Report Parish {suffix}",
            "email": f"cat-{suffix}@report.org",
            "password": "securepass123",
            "display_name": "Catechist",
        },
    )
    cat_token = reg.json()["access_token"]
    cat_headers = {"Authorization": f"Bearer {cat_token}"}

    # Grade + class
    await client.post("/api/v1/grades", json={"grade": 3}, headers=cat_headers)
    cls = await client.post(
        "/api/v1/grades/3/classes", json={"name": "Tuesday"}, headers=cat_headers
    )
    class_id = cls.json()["id"]
    join_code = cls.json()["join_code"]

    # Student 1: Maria
    stu1 = await client.post(
        f"/api/v1/grades/3/classes/{class_id}/students",
        json={"display_name": "Maria", "avatar_emoji": "🌟"},
        headers=cat_headers,
    )
    sid1 = stu1.json()["id"]

    # Student 2: Jose
    stu2 = await client.post(
        f"/api/v1/grades/3/classes/{class_id}/students",
        json={"display_name": "Jose", "avatar_emoji": "⭐"},
        headers=cat_headers,
    )
    sid2 = stu2.json()["id"]

    # Login students
    login1 = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": sid1},
    )
    h1 = {"Authorization": f"Bearer {login1.json()['access_token']}"}

    login2 = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": sid2},
    )
    h2 = {"Authorization": f"Bearer {login2.json()['access_token']}"}

    # Record progress for Maria: 3 activities
    for activity, stars in [("quiz", 5), ("discover", 3), ("prayer", 4)]:
        await client.post(
            f"/api/v1/students/{sid1}/progress",
            json={"grade": 3, "week": 1, "activity": activity, "stars_earned": stars},
            headers=h1,
        )

    # Record progress for Jose: 1 activity
    await client.post(
        f"/api/v1/students/{sid2}/progress",
        json={"grade": 3, "week": 1, "activity": "quiz", "stars_earned": 4},
        headers=h2,
    )

    # Bookmark for Maria
    await client.post(
        f"/api/v1/students/{sid1}/bookmarks",
        json={"grade": 3, "week": 1, "discover_index": 0, "item_name": "Trinity"},
        headers=h1,
    )

    return {
        "cat_headers": cat_headers,
        "class_id": class_id,
        "sid1": sid1,
        "sid2": sid2,
    }


@pytest.mark.asyncio
async def test_parish_overview(client: AsyncClient):
    """Parish overview returns correct aggregate statistics."""
    ctx = await _setup_with_progress(client, "rpt-1")
    r = await client.get("/api/v1/reports/parish/overview", headers=ctx["cat_headers"])
    assert r.status_code == 200
    data = r.json()
    assert data["total_catechists"] == 1
    assert data["total_students"] == 2
    assert data["total_classes"] == 1
    assert data["total_grades"] == 1
    assert data["total_progress_entries"] == 4  # 3 Maria + 1 Jose
    assert data["total_stars"] == 16  # 5+3+4+4


@pytest.mark.asyncio
async def test_class_progress_grid(client: AsyncClient):
    """Class progress grid returns per-student week progress."""
    ctx = await _setup_with_progress(client, "rpt-2")
    r = await client.get(
        f"/api/v1/reports/grade/3/class/{ctx['class_id']}/grid",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200
    data = r.json()
    assert data["grade"] == 3
    assert len(data["students"]) == 2

    # Find Maria's entry
    maria = next(s for s in data["students"] if s["display_name"] == "Maria")
    assert maria["activities_completed"] == 3
    assert maria["total_stars"] == 12
    assert maria["week_progress"]["1"]["quiz"] == 5

    # Find Jose's entry
    jose = next(s for s in data["students"] if s["display_name"] == "Jose")
    assert jose["activities_completed"] == 1
    assert jose["total_stars"] == 4


@pytest.mark.asyncio
async def test_standards_coverage_report(client: AsyncClient):
    """Standards coverage maps grade weeks to catechetical evidence."""
    ctx = await _setup_with_progress(client, "rpt-coverage")
    r = await client.get(
        "/api/v1/reports/grade/3/standards/coverage",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200

    data = r.json()
    assert data["grade"] == 3
    assert data["total_weeks"] >= 30

    first_week = data["rows"][0]
    assert first_week["week"] == 1
    assert first_week["title"] == "The Church Jesus Built"
    assert "748-769" in first_week["ccc_paragraphs"]
    assert first_week["scripture_reference"] == "Matthew 16:18"
    assert first_week["prayer"] == "Prayer for the Church"
    assert first_week["diocesan_outcomes"]


@pytest.mark.asyncio
async def test_standards_coverage_pdf_export(client: AsyncClient):
    """Standards coverage PDF export returns a downloadable PDF."""
    ctx = await _setup_with_progress(client, "rpt-coverage-pdf")
    r = await client.get(
        "/api/v1/reports/grade/3/standards/pdf",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200
    assert r.headers["content-type"] == "application/pdf"
    assert "standards-coverage-grade3.pdf" in r.headers["content-disposition"]
    assert r.content.startswith(b"%PDF-1.4")


@pytest.mark.asyncio
async def test_student_summary(client: AsyncClient):
    """Student summary returns activity breakdown and bookmark count."""
    ctx = await _setup_with_progress(client, "rpt-3")
    r = await client.get(
        f"/api/v1/reports/student/{ctx['sid1']}/summary?grade=3",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200
    data = r.json()
    assert data["display_name"] == "Maria"
    assert data["total_activities"] == 3
    assert data["total_stars"] == 12
    assert data["bookmarks_count"] == 1
    assert data["activity_breakdown"]["quiz"] == 5
    assert data["activity_breakdown"]["prayer"] == 4
    assert data["stars_by_week"]["1"] == 12


@pytest.mark.asyncio
async def test_csv_export(client: AsyncClient):
    """CSV export returns valid CSV data."""
    ctx = await _setup_with_progress(client, "rpt-4")
    rename = await client.patch(
        f"/api/v1/students/{ctx['sid1']}",
        json={"display_name": "@Maria"},
        headers=ctx["cat_headers"],
    )
    assert rename.status_code == 200
    r = await client.get(
        f"/api/v1/reports/export/csv?grade=3&class_id={ctx['class_id']}",
        headers=ctx["cat_headers"],
    )
    assert r.status_code == 200
    assert "text/csv" in r.headers["content-type"]

    lines = r.text.strip().split("\n")
    assert len(lines) == 3  # header + 2 students
    assert "Student" in lines[0]
    assert "'@Maria" in r.text
