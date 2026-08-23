"""Tests for authentication endpoints."""

import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_register_creates_parish_and_catechist(client: AsyncClient):
    """POST /auth/register creates a parish + admin catechist and returns tokens."""
    response = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "St. Mary's Parish",
            "email": "admin@stmary.org",
            "password": "securepass123",
            "display_name": "Fr. Smith",
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data
    assert data["token_type"] == "bearer"
    assert data["parish_id"] is not None
    assert data["catechist_id"] is not None


@pytest.mark.asyncio
async def test_register_duplicate_slug_gets_unique_suffix(client: AsyncClient):
    """Two parishes with the same name get different slugs."""
    # Register first
    r1 = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Holy Cross",
            "email": "admin1@hc.org",
            "password": "securepass123",
            "display_name": "Admin One",
        },
    )
    assert r1.status_code == 201

    # Register second with same name
    r2 = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Holy Cross",
            "email": "admin2@hc.org",
            "password": "securepass123",
            "display_name": "Admin Two",
        },
    )
    assert r2.status_code == 201
    assert r1.json()["parish_id"] != r2.json()["parish_id"]


@pytest.mark.asyncio
async def test_register_password_too_short(client: AsyncClient):
    """Registration fails with a password shorter than 12 characters."""
    response = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Test",
            "email": "test@test.org",
            "password": "short",
            "display_name": "Test",
        },
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_register_rejects_email_already_used_by_another_parish(client: AsyncClient):
    payload = {
        "parish_name": "First Parish",
        "email": "shared@example.org",
        "password": "securepass123",
        "display_name": "First Admin",
    }
    assert (await client.post("/api/v1/auth/register", json=payload)).status_code == 201

    payload.update(parish_name="Second Parish", display_name="Second Admin")
    response = await client.post("/api/v1/auth/register", json=payload)
    assert response.status_code == 409
    assert response.json()["detail"] == "Email already registered"


@pytest.mark.asyncio
async def test_login_success(client: AsyncClient):
    """Login with valid credentials returns tokens."""
    # Register first
    await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Login Test Parish",
            "email": "login@test.org",
            "password": "securepass123",
            "display_name": "Login Tester",
        },
    )

    # Login
    response = await client.post(
        "/api/v1/auth/login",
        json={"email": "login@test.org", "password": "securepass123"},
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data


@pytest.mark.asyncio
async def test_login_wrong_password(client: AsyncClient):
    """Login with wrong password returns 401."""
    # Register first
    await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Wrong Pass Parish",
            "email": "wrong@test.org",
            "password": "securepass123",
            "display_name": "Tester",
        },
    )

    # Login with wrong password
    response = await client.post(
        "/api/v1/auth/login",
        json={"email": "wrong@test.org", "password": "wrongpassword"},
    )
    assert response.status_code == 401


@pytest.mark.asyncio
async def test_login_nonexistent_email(client: AsyncClient):
    """Login with unknown email returns 401."""
    response = await client.post(
        "/api/v1/auth/login",
        json={"email": "nobody@test.org", "password": "whatever123"},
    )
    assert response.status_code == 401


@pytest.mark.asyncio
async def test_login_temporarily_locks_account_after_repeated_failures(client: AsyncClient):
    await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Lockout Parish",
            "email": "lockout@test.org",
            "password": "securepass123",
            "display_name": "Lockout Tester",
        },
    )

    for _ in range(5):
        response = await client.post(
            "/api/v1/auth/login",
            json={"email": "lockout@test.org", "password": "wrongpassword"},
        )
        assert response.status_code == 401

    locked = await client.post(
        "/api/v1/auth/login",
        json={"email": "lockout@test.org", "password": "securepass123"},
    )
    assert locked.status_code == 429
    assert int(locked.headers["Retry-After"]) > 0


@pytest.mark.asyncio
async def test_refresh_token_flow(client: AsyncClient):
    """Refresh token returns new access + refresh tokens."""
    # Register
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Refresh Test Parish",
            "email": "refresh@test.org",
            "password": "securepass123",
            "display_name": "Refresher",
        },
    )
    refresh_token = reg.json()["refresh_token"]

    # Refresh
    response = await client.post(
        "/api/v1/auth/refresh",
        json={"refresh_token": refresh_token},
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data


@pytest.mark.asyncio
async def test_refresh_with_invalid_token(client: AsyncClient):
    """Refresh with invalid token returns 401."""
    response = await client.post(
        "/api/v1/auth/refresh",
        json={"refresh_token": "invalid-token-here"},
    )
    assert response.status_code == 401


@pytest.mark.asyncio
async def test_logout_revokes_existing_access_and_refresh_tokens(client: AsyncClient):
    registered = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Logout Parish",
            "email": "logout@test.org",
            "password": "securepass123",
            "display_name": "Logout Tester",
        },
    )
    tokens = registered.json()
    headers = {"Authorization": f"Bearer {tokens['access_token']}"}

    assert (await client.get("/api/v1/parish", headers=headers)).status_code == 200
    assert (await client.post("/api/v1/auth/logout", headers=headers)).status_code == 204
    revoked_access = await client.get("/api/v1/parish", headers=headers)
    revoked_refresh = await client.post(
        "/api/v1/auth/refresh",
        json={"refresh_token": tokens["refresh_token"]},
    )

    assert revoked_access.status_code == 401
    assert revoked_access.json()["detail"] == "Session has been revoked"
    assert revoked_refresh.status_code == 401


@pytest.mark.asyncio
async def test_student_login_flow(client: AsyncClient):
    """Full student login flow: register → create grade → class → student → login."""
    # 1. Register parish
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "Student Login Parish",
            "email": "catechist@slp.org",
            "password": "securepass123",
            "display_name": "Catechist Sue",
        },
    )
    token = reg.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Create grade
    gc = await client.post(
        "/api/v1/grades",
        json={"grade": 3, "program_name": "Grade 3 CCD"},
        headers=headers,
    )
    assert gc.status_code == 201

    # 3. Create class
    cls = await client.post(
        "/api/v1/grades/3/classes",
        json={"name": "Tuesday 4pm"},
        headers=headers,
    )
    assert cls.status_code == 201
    join_code = cls.json()["join_code"]
    class_id = cls.json()["id"]

    # 4. Create student
    stu = await client.post(
        f"/api/v1/grades/3/classes/{class_id}/students",
        json={"display_name": "Maria", "avatar_emoji": "😊"},
        headers=headers,
    )
    assert stu.status_code == 201
    student_id = stu.json()["id"]

    # 5. Get roster
    roster = await client.post(
        f"/api/v1/auth/student/roster?join_code={join_code}",
    )
    assert roster.status_code == 200
    assert len(roster.json()["students"]) == 1
    assert roster.json()["students"][0]["display_name"] == "Maria"

    # 6. Student login
    login = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": student_id},
    )
    assert login.status_code == 200
    data = login.json()
    assert "access_token" in data
    assert data["display_name"] == "Maria"
    assert data["grade"] == 3


@pytest.mark.asyncio
async def test_student_login_with_pin(client: AsyncClient):
    """Student with PIN requires correct PIN to login."""
    # Setup
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": "PIN Test Parish",
            "email": "cat@pin.org",
            "password": "securepass123",
            "display_name": "Catechist",
        },
    )
    token = reg.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    await client.post("/api/v1/grades", json={"grade": 5}, headers=headers)
    cls = await client.post("/api/v1/grades/5/classes", json={"name": "Wed 5pm"}, headers=headers)
    join_code = cls.json()["join_code"]
    class_id = cls.json()["id"]

    stu = await client.post(
        f"/api/v1/grades/5/classes/{class_id}/students",
        json={"display_name": "Jose", "access_pin": "1234"},
        headers=headers,
    )
    student_id = stu.json()["id"]

    # Login without PIN → fail
    login_no_pin = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": student_id},
    )
    assert login_no_pin.status_code == 401

    # Login with wrong PIN → fail
    login_wrong = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": student_id, "access_pin": "9999"},
    )
    assert login_wrong.status_code == 401

    # Login with correct PIN → success
    login_ok = await client.post(
        "/api/v1/auth/student/login",
        json={"join_code": join_code, "student_id": student_id, "access_pin": "1234"},
    )
    assert login_ok.status_code == 200
