"""Pydantic schemas for session override endpoints."""

import uuid
from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field


class SessionOverrideCreateRequest(BaseModel):
    """Create or update a session override (JSONB data)."""

    session_data: dict[str, Any] = Field(..., description="Full session data as JSON")


class DoctrinalReviewFinding(BaseModel):
    code: str
    severity: str
    message: str


class DoctrinalReviewResponse(BaseModel):
    passed: bool
    findings: list[DoctrinalReviewFinding]


class SessionOverrideResponse(BaseModel):
    """Session override response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    grade_config_id: uuid.UUID
    week: int
    session_data: dict[str, Any]
    created_by: uuid.UUID | None
    created_at: datetime
    updated_at: datetime
