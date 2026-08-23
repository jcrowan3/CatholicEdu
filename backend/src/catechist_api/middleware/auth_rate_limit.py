"""Process-local defense-in-depth rate limiting for public authentication routes."""

from collections import defaultdict, deque
from threading import Lock
from time import monotonic

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse

from catechist_api.config import settings

RATE_LIMITED_PATHS = {
    "/api/v1/auth/register",
    "/api/v1/auth/login",
    "/api/v1/auth/refresh",
    "/api/v1/auth/student/roster",
    "/api/v1/auth/student/login",
}


class SlidingWindowRateLimiter:
    """Bound requests per key within a rolling process-local window."""

    def __init__(self, *, limit: int, window_seconds: int):
        self.limit = limit
        self.window_seconds = window_seconds
        self._requests: dict[str, deque[float]] = defaultdict(deque)
        self._lock = Lock()

    def check(self, key: str, *, now: float | None = None) -> int | None:
        """Record an allowed request or return seconds until the key can retry."""
        current = monotonic() if now is None else now
        cutoff = current - self.window_seconds
        with self._lock:
            attempts = self._requests[key]
            while attempts and attempts[0] <= cutoff:
                attempts.popleft()
            if len(attempts) >= self.limit:
                return max(1, int(self.window_seconds - (current - attempts[0]) + 0.999))
            attempts.append(current)
            return None


class AuthRateLimitMiddleware(BaseHTTPMiddleware):
    """Rate limit unauthenticated auth requests by direct client address and route."""

    def __init__(self, app):
        super().__init__(app)
        self.limiter = SlidingWindowRateLimiter(
            limit=settings.auth_rate_limit_requests,
            window_seconds=settings.auth_rate_limit_window_seconds,
        )

    async def dispatch(self, request: Request, call_next):
        if request.method == "POST" and request.url.path in RATE_LIMITED_PATHS:
            client_host = request.client.host if request.client else "unknown"
            retry_after = self.limiter.check(f"{client_host}:{request.url.path}")
            if retry_after is not None:
                return JSONResponse(
                    status_code=429,
                    content={"detail": "Too many authentication attempts; try again later"},
                    headers={"Retry-After": str(retry_after)},
                )
        return await call_next(request)
