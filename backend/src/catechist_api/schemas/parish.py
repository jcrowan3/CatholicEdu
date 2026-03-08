"""Pydantic schemas for parish endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class ParishResponse(BaseModel):
    """Parish info response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    name: str
    slug: str
    is_active: bool
    created_at: datetime


class ParishUpdateRequest(BaseModel):
    """Update parish info."""

    name: str | None = Field(None, min_length=1, max_length=200)
