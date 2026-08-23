"""Pydantic schemas for authentication endpoints."""

import uuid

from pydantic import BaseModel, EmailStr, Field

# ─── Register ───


class RegisterRequest(BaseModel):
    """Catechist registration: creates a new parish + admin catechist."""

    parish_name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    password: str = Field(..., min_length=12, max_length=72)
    display_name: str = Field(..., min_length=1, max_length=100)


class RegisterResponse(BaseModel):
    """Response after successful registration."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    parish_id: uuid.UUID
    catechist_id: uuid.UUID


# ─── Login ───


class LoginRequest(BaseModel):
    """Catechist email/password login."""

    email: EmailStr
    password: str = Field(..., max_length=72)


class TokenResponse(BaseModel):
    """JWT token pair response."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"


# ─── Refresh ───


class RefreshRequest(BaseModel):
    """Refresh token request."""

    refresh_token: str


# ─── Student Login ───


class StudentLoginRequest(BaseModel):
    """Student join-code login."""

    join_code: str = Field(..., min_length=6, max_length=8)
    student_id: uuid.UUID
    access_pin: str | None = Field(None, min_length=4, max_length=4)


class StudentLoginResponse(BaseModel):
    """Response after successful student login."""

    access_token: str
    token_type: str = "bearer"
    student_id: uuid.UUID
    display_name: str
    grade: int
    class_name: str


# ─── Student Roster (for join-code flow) ───


class StudentRosterItem(BaseModel):
    """Student entry in class roster (shown after entering join code)."""

    id: uuid.UUID
    display_name: str
    avatar_emoji: str
    requires_pin: bool


class ClassRosterResponse(BaseModel):
    """Class roster returned when a valid join code is entered."""

    class_id: uuid.UUID
    class_name: str
    grade: int
    students: list[StudentRosterItem]
