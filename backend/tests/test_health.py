"""Smoke tests for the API health endpoint and model creation."""

import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_health_endpoint(client: AsyncClient):
    """Health check returns 200 with version info."""
    response = await client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "version" in data


@pytest.mark.asyncio
async def test_parish_fixture(parish):
    """Parish factory fixture creates a valid parish."""
    assert parish.id is not None
    assert parish.name == "St. Test Parish"
    assert parish.is_active is True


@pytest.mark.asyncio
async def test_catechist_fixture(catechist, parish):
    """Catechist factory fixture creates a valid catechist linked to parish."""
    assert catechist.id is not None
    assert catechist.parish_id == parish.id
    assert catechist.role == "parish_admin"


@pytest.mark.asyncio
async def test_student_fixture(student, parish):
    """Student factory fixture creates a valid student linked to parish."""
    assert student.id is not None
    assert student.parish_id == parish.id
    assert student.display_name == "Maria"


@pytest.mark.asyncio
async def test_catechist_token(catechist_token):
    """Catechist token is a non-empty string."""
    assert isinstance(catechist_token, str)
    assert len(catechist_token) > 0


@pytest.mark.asyncio
async def test_student_token(student_token):
    """Student token is a non-empty string."""
    assert isinstance(student_token, str)
    assert len(student_token) > 0
