"""JWT token creation and validation."""

import uuid
from datetime import UTC, datetime, timedelta

import jwt
from jwt.exceptions import InvalidTokenError as JWTError
from pydantic import BaseModel

from catechist_api.config import settings


class TokenPayload(BaseModel):
    """Decoded JWT token payload."""

    sub: uuid.UUID  # User ID (catechist or student)
    parish_id: uuid.UUID
    type: str  # 'catechist' or 'student'
    role: str | None = None  # 'parish_admin' or 'catechist' (catechist tokens only)
    class_id: uuid.UUID | None = None  # Student tokens only
    grade: int | None = None  # Student tokens only
    exp: datetime | None = None


def create_access_token(
    *,
    sub: uuid.UUID,
    parish_id: uuid.UUID,
    token_type: str,
    role: str | None = None,
    class_id: uuid.UUID | None = None,
    grade: int | None = None,
) -> str:
    """Create a JWT access token."""
    if token_type == "student":
        expire_delta = timedelta(hours=settings.student_token_expire_hours)
    else:
        expire_delta = timedelta(minutes=settings.access_token_expire_minutes)

    now = datetime.now(UTC)
    payload = {
        "sub": str(sub),
        "parish_id": str(parish_id),
        "type": token_type,
        "iat": now,
        "exp": now + expire_delta,
    }

    if role:
        payload["role"] = role
    if class_id:
        payload["class_id"] = str(class_id)
    if grade:
        payload["grade"] = grade

    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def create_refresh_token(*, sub: uuid.UUID, parish_id: uuid.UUID) -> str:
    """Create a long-lived refresh token for catechists."""
    now = datetime.now(UTC)
    payload = {
        "sub": str(sub),
        "parish_id": str(parish_id),
        "type": "refresh",
        "iat": now,
        "exp": now + timedelta(days=settings.refresh_token_expire_days),
    }
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def decode_token(token: str) -> TokenPayload:
    """Decode and validate a JWT token. Raises JWTError on failure."""
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        return TokenPayload(
            sub=uuid.UUID(payload["sub"]),
            parish_id=uuid.UUID(payload["parish_id"]),
            type=payload["type"],
            role=payload.get("role"),
            class_id=uuid.UUID(payload["class_id"]) if payload.get("class_id") else None,
            grade=payload.get("grade"),
            exp=datetime.fromtimestamp(payload["exp"], tz=UTC) if payload.get("exp") else None,
        )
    except (JWTError, KeyError, ValueError) as e:
        raise JWTError(f"Invalid token: {e}") from e
