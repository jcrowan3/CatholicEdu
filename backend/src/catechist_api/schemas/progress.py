"""Pydantic schemas for progress endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class ProgressCreateRequest(BaseModel):
    """Record a completed activity (idempotent via unique constraint)."""

    grade: int = Field(..., ge=1, le=8)
    week: int = Field(..., ge=1, le=30)
    activity: str = Field(..., pattern=r"^(discover|sort|timeline|fillblank|quiz|prayer)$")
    stars_earned: int = Field(..., ge=0, le=5)


class ProgressEntryResponse(BaseModel):
    """Progress entry response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    student_id: uuid.UUID
    grade: int
    week: int
    activity: str
    stars_earned: int
    earned_at: datetime


class GradeProgressResponse(BaseModel):
    """All progress entries for a student in a given grade."""

    student_id: uuid.UUID
    grade: int
    entries: list[ProgressEntryResponse]
    total_stars: int
