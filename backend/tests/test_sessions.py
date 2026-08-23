"""Tests for session override endpoints."""

import pytest
from httpx import AsyncClient


async def _setup_with_grade(client: AsyncClient, suffix: str) -> dict:
    """Register parish + grade, return headers."""
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "parish_name": f"Session Parish {suffix}",
            "email": f"cat-{suffix}@sess.org",
            "password": "securepass123",
            "display_name": "Catechist",
        },
    )
    token = reg.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    await client.post("/api/v1/grades", json={"grade": 4}, headers=headers)
    return {"headers": headers}


@pytest.mark.asyncio
async def test_session_override_crud(client: AsyncClient):
    """Full session override lifecycle: create, list, update, delete."""
    ctx = await _setup_with_grade(client, "sess-1")
    headers = ctx["headers"]

    # Create (PUT)
    r1 = await client.put(
        "/api/v1/grades/4/sessions/1",
        json={"session_data": {"title": "Custom Week 1", "activities": ["quiz", "prayer"]}},
        headers=headers,
    )
    assert r1.status_code == 200
    assert r1.json()["week"] == 1
    assert r1.json()["session_data"]["title"] == "Custom Week 1"

    # Create another
    await client.put(
        "/api/v1/grades/4/sessions/5",
        json={"session_data": {"title": "Custom Week 5"}},
        headers=headers,
    )

    # List
    r_list = await client.get("/api/v1/grades/4/sessions", headers=headers)
    assert r_list.status_code == 200
    assert len(r_list.json()) == 2

    # Update (PUT same week)
    r_update = await client.put(
        "/api/v1/grades/4/sessions/1",
        json={"session_data": {"title": "Updated Week 1", "activities": ["quiz"]}},
        headers=headers,
    )
    assert r_update.status_code == 200
    assert r_update.json()["session_data"]["title"] == "Updated Week 1"

    # Delete
    r_del = await client.delete("/api/v1/grades/4/sessions/1", headers=headers)
    assert r_del.status_code == 204

    # List — should be 1
    r_list2 = await client.get("/api/v1/grades/4/sessions", headers=headers)
    assert len(r_list2.json()) == 1


@pytest.mark.asyncio
async def test_delete_nonexistent_session_returns_404(client: AsyncClient):
    """Deleting a non-existent session override returns 404."""
    ctx = await _setup_with_grade(client, "sess-2")
    r = await client.delete("/api/v1/grades/4/sessions/99", headers=ctx["headers"])
    assert r.status_code == 404


@pytest.mark.asyncio
async def test_doctrinal_review_returns_concrete_fix_checklist(client: AsyncClient):
    ctx = await _setup_with_grade(client, "review-1")
    response = await client.post(
        "/api/v1/grades/4/sessions/review",
        json={
            "session_data": {
                "title": "A changed lesson",
                "verse": "God loved the world very much.",
                "discover": {"items": [{"desc": "Jesus was only a teacher."}]},
            }
        },
        headers=ctx["headers"],
    )
    assert response.status_code == 200
    result = response.json()
    assert result["passed"] is False
    assert {finding["code"] for finding in result["findings"]} == {
        "missing_ccc_reference",
        "unsupported_scripture_paraphrase",
        "weakened_doctrine",
    }
    assert all(finding["message"] for finding in result["findings"])


@pytest.mark.asyncio
async def test_doctrinal_review_passes_supported_session(client: AsyncClient):
    ctx = await _setup_with_grade(client, "review-2")
    response = await client.post(
        "/api/v1/grades/4/sessions/review",
        json={
            "session_data": {
                "title": "The Incarnation",
                "verse": "The Word was made flesh. — John 1:14",
                "discover": {"items": [{"desc": "Jesus is true God and true man (CCC 464)."}]},
            }
        },
        headers=ctx["headers"],
    )
    assert response.status_code == 200
    assert response.json() == {"passed": True, "findings": []}


@pytest.mark.asyncio
async def test_doctrinal_review_checks_taught_quiz_answer_not_distractors(client: AsyncClient):
    ctx = await _setup_with_grade(client, "review-3")
    supported = {
        "ccc": "1374",
        "verse": "John 6:51",
        "quiz": {
            "questions": [
                {
                    "q": "What is the Eucharist?",
                    "opts": [
                        "The Body and Blood of Christ",
                        "The Eucharist is merely a symbol",
                    ],
                    "correct": 0,
                }
            ]
        },
    }
    response = await client.post(
        "/api/v1/grades/4/sessions/review",
        json={"session_data": supported},
        headers=ctx["headers"],
    )
    assert response.status_code == 200
    assert response.json() == {"passed": True, "findings": []}

    supported["quiz"]["questions"][0]["correct"] = 1
    response = await client.post(
        "/api/v1/grades/4/sessions/review",
        json={"session_data": supported},
        headers=ctx["headers"],
    )
    assert response.status_code == 200
    assert [finding["code"] for finding in response.json()["findings"]] == ["weakened_doctrine"]
