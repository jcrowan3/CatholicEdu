"""Pydantic schemas for student endpoints."""

import uuid
from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class StudentResponse(BaseModel):
    """Student response."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    parish_id: uuid.UUID
    display_name: str
    avatar_emoji: str
    parent_email: EmailStr | None = None
    pickup_contact_notes: str | None = None
    media_permission_granted: bool = False
    allergy_privacy_flags: str | None = None
    weekly_digest_permission: bool = False
    has_pin: bool = False
    is_active: bool
    created_at: datetime


class StudentCreateRequest(BaseModel):
    """Create a student and optionally enroll in a class."""

    display_name: str = Field(..., min_length=1, max_length=100)
    avatar_emoji: str = Field(default="😊", max_length=10)
    access_pin: str | None = Field(None, min_length=4, max_length=4, pattern=r"^\d{4}$")
    parent_email: EmailStr | None = None
    pickup_contact_notes: str | None = Field(None, max_length=2000)
    media_permission_granted: bool = False
    allergy_privacy_flags: str | None = Field(None, max_length=2000)
    weekly_digest_permission: bool = False


class StudentUpdateRequest(BaseModel):
    """Update a student."""

    display_name: str | None = Field(None, min_length=1, max_length=100)
    avatar_emoji: str | None = Field(None, max_length=10)
    access_pin: str | None = Field(None, min_length=4, max_length=4, pattern=r"^\d{4}$")
    parent_email: EmailStr | None = None
    pickup_contact_notes: str | None = Field(None, max_length=2000)
    media_permission_granted: bool | None = None
    allergy_privacy_flags: str | None = Field(None, max_length=2000)
    weekly_digest_permission: bool | None = None
    is_active: bool | None = None


class RosterImportRow(BaseModel):
    """One incoming roster row."""

    display_name: str = Field(..., min_length=1, max_length=100)
    family_name: str | None = Field(None, max_length=100)
    avatar_emoji: str = Field(default="😊", max_length=10)


class RosterImportRequest(BaseModel):
    """Preview or import a batch roster."""

    rows: list[RosterImportRow] = Field(..., min_length=1, max_length=100)


class RosterImportPreviewRow(BaseModel):
    """Duplicate-family matching result for one incoming roster row."""

    row_index: int
    display_name: str
    family_name: str | None
    avatar_emoji: str
    match_status: str
    match_reason: str
    existing_family_students: list[str] = Field(default_factory=list)


class RosterImportPreviewResponse(BaseModel):
    """Preview summary for a roster import."""

    rows: list[RosterImportPreviewRow]
    ready_count: int
    warning_count: int
    duplicate_count: int


class RosterImportResponse(BaseModel):
    """Result of importing a roster."""

    imported_students: list[StudentResponse]
    preview: RosterImportPreviewResponse
