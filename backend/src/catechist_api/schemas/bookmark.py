"""Pydantic schemas for bookmark endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class BookmarkCreateRequest(BaseModel):
    """Save a discover item as a bookmark."""

    grade: int = Field(..., ge=1, le=8)
    week: int = Field(..., ge=1, le=30)
    discover_index: int = Field(..., ge=0)
    item_name: str = Field(..., max_length=200)
    item_desc: str | None = None
    item_icon: str | None = Field(None, max_length=10)
    pillar: str | None = Field(None, max_length=20)


class BookmarkResponse(BaseModel):
    """Bookmark response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    student_id: uuid.UUID
    grade: int
    week: int
    discover_index: int
    item_name: str
    item_desc: str | None
    item_icon: str | None
    pillar: str | None
    saved_at: datetime
