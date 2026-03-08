"""Pydantic schemas for grade config endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class GradeConfigResponse(BaseModel):
    """Grade config response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    parish_id: uuid.UUID
    grade: int
    program_name: str | None
    is_active: bool
    created_at: datetime


class GradeConfigCreateRequest(BaseModel):
    """Create a grade config."""

    grade: int = Field(..., ge=1, le=8)
    program_name: str | None = Field(None, max_length=200)


class GradeConfigUpdateRequest(BaseModel):
    """Update a grade config."""

    program_name: str | None = Field(None, max_length=200)
    is_active: bool | None = None
