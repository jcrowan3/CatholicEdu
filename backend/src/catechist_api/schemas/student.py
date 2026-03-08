"""Pydantic schemas for student endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class StudentResponse(BaseModel):
    """Student response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    parish_id: uuid.UUID
    display_name: str
    avatar_emoji: str
    has_pin: bool = False
    is_active: bool
    created_at: datetime


class StudentCreateRequest(BaseModel):
    """Create a student and optionally enroll in a class."""

    display_name: str = Field(..., min_length=1, max_length=100)
    avatar_emoji: str = Field(default="😊", max_length=10)
    access_pin: str | None = Field(None, min_length=4, max_length=4, pattern=r"^\d{4}$")


class StudentUpdateRequest(BaseModel):
    """Update a student."""

    display_name: str | None = Field(None, min_length=1, max_length=100)
    avatar_emoji: str | None = Field(None, max_length=10)
    access_pin: str | None = Field(None, min_length=4, max_length=4, pattern=r"^\d{4}$")
    is_active: bool | None = None
