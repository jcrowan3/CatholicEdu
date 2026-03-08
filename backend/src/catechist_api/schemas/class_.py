"""Pydantic schemas for class endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class ClassResponse(BaseModel):
    """Class response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    grade_config_id: uuid.UUID
    name: str
    join_code: str
    is_active: bool
    created_at: datetime
    student_count: int = 0


class ClassCreateRequest(BaseModel):
    """Create a class."""

    name: str = Field(..., min_length=1, max_length=100)


class ClassUpdateRequest(BaseModel):
    """Update a class."""

    name: str | None = Field(None, min_length=1, max_length=100)
    is_active: bool | None = None
