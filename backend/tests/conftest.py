"""Shared test fixtures for the catechist API tests."""

import os
import uuid
from collections.abc import AsyncGenerator

import pytest
import pytest_asyncio
from httpx import ASGITransport, AsyncClient
from sqlalchemy import text
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

os.environ.setdefault("JWT_SECRET", "test-only-jwt-secret-at-least-32-chars")

# Import all models to register them with Base.metadata
import catechist_api.models  # noqa: F401
from catechist_api.auth.jwt import create_access_token
from catechist_api.auth.password import hash_password
from catechist_api.database import Base, get_db
from catechist_api.main import create_app
from catechist_api.models import Catechist, Class, ClassEnrollment, GradeConfig, Parish, Student

# Use a self-contained SQLite database by default so report/API tests can run without
# a local Postgres service. Set TEST_DATABASE_URL to exercise a real Postgres database.
TEST_DATABASE_URL = os.environ.get(
    "TEST_DATABASE_URL", "sqlite+aiosqlite:///./.pytest-catechist.db"
)


@pytest.fixture(scope="session")
def anyio_backend():
    return "asyncio"


@pytest_asyncio.fixture(scope="session", loop_scope="session")
async def test_engine() -> AsyncGenerator[AsyncEngine, None]:
    """Create the test engine on the session event loop."""
    engine = create_async_engine(TEST_DATABASE_URL, echo=False)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    yield engine
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
    await engine.dispose()


@pytest_asyncio.fixture(scope="session", loop_scope="session")
async def test_session_factory(test_engine):
    """Create a session factory bound to the test engine."""
    return async_sessionmaker(test_engine, class_=AsyncSession, expire_on_commit=False)


@pytest_asyncio.fixture
async def db_session(test_session_factory) -> AsyncGenerator[AsyncSession, None]:
    """Provide a database session for direct DB access in tests."""
    async with test_session_factory() as session:
        yield session


@pytest_asyncio.fixture
async def client(test_engine, test_session_factory) -> AsyncGenerator[AsyncClient, None]:
    """Provide an async HTTP test client.

    Each request gets its own session pointed at the test database.
    Data is cleaned up after each test.
    """
    app = create_app()

    # Override get_db to use the test engine's session factory
    async def override_get_db() -> AsyncGenerator[AsyncSession, None]:
        async with test_session_factory() as session:
            try:
                yield session
                await session.commit()
            except Exception:
                await session.rollback()
                raise

    app.dependency_overrides[get_db] = override_get_db

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac

    # Clean up all data after each test to ensure isolation
    async with test_engine.begin() as conn:
        for table in reversed(Base.metadata.sorted_tables):
            await conn.execute(text(f"DELETE FROM {table.name}"))


# ─── Factory Fixtures ───
# These use db_session for direct DB access (e.g., in test_health.py)


@pytest_asyncio.fixture
async def parish(db_session: AsyncSession) -> Parish:
    """Create a test parish."""
    p = Parish(name="St. Test Parish", slug=f"st-test-{uuid.uuid4().hex[:8]}")
    db_session.add(p)
    await db_session.flush()
    return p


@pytest_asyncio.fixture
async def catechist(db_session: AsyncSession, parish: Parish) -> Catechist:
    """Create a test catechist (parish admin)."""
    c = Catechist(
        parish_id=parish.id,
        email=f"catechist-{uuid.uuid4().hex[:8]}@test.com",
        password_hash=hash_password("testpass123"),
        display_name="Test Catechist",
        role="parish_admin",
    )
    db_session.add(c)
    await db_session.flush()
    return c


@pytest_asyncio.fixture
async def catechist_token(catechist: Catechist, parish: Parish) -> str:
    """Create a JWT access token for the test catechist."""
    return create_access_token(
        sub=catechist.id,
        parish_id=parish.id,
        token_type="catechist",
        role=catechist.role,
    )


@pytest_asyncio.fixture
async def grade_config(db_session: AsyncSession, parish: Parish) -> GradeConfig:
    """Create a test grade config (grade 3)."""
    gc = GradeConfig(parish_id=parish.id, grade=3, program_name="Test CCD Grade 3")
    db_session.add(gc)
    await db_session.flush()
    return gc


@pytest_asyncio.fixture
async def class_(db_session: AsyncSession, grade_config: GradeConfig) -> Class:
    """Create a test class."""
    c = Class(grade_config_id=grade_config.id, name="Tuesday 4pm")
    db_session.add(c)
    await db_session.flush()
    return c


@pytest_asyncio.fixture
async def student(db_session: AsyncSession, parish: Parish, class_: Class) -> Student:
    """Create a test student enrolled in the test class."""
    s = Student(parish_id=parish.id, display_name="Maria", avatar_emoji="😊")
    db_session.add(s)
    await db_session.flush()

    enrollment = ClassEnrollment(class_id=class_.id, student_id=s.id)
    db_session.add(enrollment)
    await db_session.flush()

    return s


@pytest_asyncio.fixture
async def student_token(student: Student, parish: Parish, class_: Class) -> str:
    """Create a JWT access token for the test student."""
    return create_access_token(
        sub=student.id,
        parish_id=parish.id,
        token_type="student",
        class_id=class_.id,
        grade=3,
    )
