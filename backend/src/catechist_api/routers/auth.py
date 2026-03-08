"""Authentication router — register, login, refresh, student login."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.database import get_db
from catechist_api.schemas.auth import (
    ClassRosterResponse,
    LoginRequest,
    RefreshRequest,
    RegisterRequest,
    RegisterResponse,
    StudentLoginRequest,
    StudentLoginResponse,
    TokenResponse,
)
from catechist_api.services import auth_service

router = APIRouter()


@router.post("/register", response_model=RegisterResponse, status_code=201)
async def register(body: RegisterRequest, db: AsyncSession = Depends(get_db)):
    """Register a new parish and create the admin catechist account."""
    result = await auth_service.register_parish(
        db,
        parish_name=body.parish_name,
        email=body.email,
        password=body.password,
        display_name=body.display_name,
    )
    return result


@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest, db: AsyncSession = Depends(get_db)):
    """Authenticate a catechist with email and password."""
    result = await auth_service.login_catechist(
        db,
        email=body.email,
        password=body.password,
    )
    return result


@router.post("/refresh", response_model=TokenResponse)
async def refresh(body: RefreshRequest, db: AsyncSession = Depends(get_db)):
    """Exchange a refresh token for a new access + refresh token pair."""
    result = await auth_service.refresh_tokens(
        db,
        refresh_token_str=body.refresh_token,
    )
    return result


@router.post("/student/roster", response_model=ClassRosterResponse)
async def get_roster(join_code: str, db: AsyncSession = Depends(get_db)):
    """Look up a class by join code and return the student roster."""
    result = await auth_service.get_class_roster(db, join_code=join_code)
    return result


@router.post("/student/login", response_model=StudentLoginResponse)
async def student_login(body: StudentLoginRequest, db: AsyncSession = Depends(get_db)):
    """Authenticate a student via join code + name selection + optional PIN."""
    result = await auth_service.login_student(
        db,
        join_code=body.join_code,
        student_id=body.student_id,
        access_pin=body.access_pin,
    )
    return result
