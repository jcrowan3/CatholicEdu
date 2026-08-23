"""Tests for authentication abuse throttling."""

import pytest
from httpx import AsyncClient

from catechist_api.middleware.auth_rate_limit import SlidingWindowRateLimiter


def test_sliding_window_limiter_blocks_and_recovers():
    limiter = SlidingWindowRateLimiter(limit=2, window_seconds=10)

    assert limiter.check("client", now=0) is None
    assert limiter.check("client", now=1) is None
    assert limiter.check("client", now=2) == 8
    assert limiter.check("other-client", now=2) is None
    assert limiter.check("client", now=11) is None


@pytest.mark.asyncio
async def test_auth_middleware_returns_retry_after(client: AsyncClient):
    for _ in range(30):
        response = await client.post("/api/v1/auth/student/roster?join_code=NOPE00")
        assert response.status_code == 404

    limited = await client.post("/api/v1/auth/student/roster?join_code=NOPE00")
    assert limited.status_code == 429
    assert int(limited.headers["Retry-After"]) > 0
    assert limited.json()["detail"] == "Too many authentication attempts; try again later"
