"""FastAPI application factory."""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from catechist_api.config import settings
from catechist_api.database import engine


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan: startup and shutdown."""
    yield
    await engine.dispose()


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    app = FastAPI(
        title="Catholic Catechist Toolkit API",
        version="0.1.0",
        description="Backend API for the Catholic Catechist Toolkit",
        lifespan=lifespan,
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Health check
    @app.get("/api/v1/health")
    async def health_check():
        return {"status": "ok", "version": "0.1.0"}

    # Routers
    from catechist_api.routers import (
        auth, bookmarks, classes, grades, parish, progress, reports, sessions, students,
    )

    app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
    app.include_router(parish.router, prefix="/api/v1/parish", tags=["parish"])
    app.include_router(grades.router, prefix="/api/v1/grades", tags=["grades"])
    app.include_router(classes.router, prefix="/api/v1", tags=["classes"])
    app.include_router(students.router, prefix="/api/v1/students", tags=["students"])
    app.include_router(progress.router, prefix="/api/v1/students", tags=["progress"])
    app.include_router(bookmarks.router, prefix="/api/v1/students", tags=["bookmarks"])
    app.include_router(sessions.router, prefix="/api/v1/grades", tags=["sessions"])
    app.include_router(reports.router, prefix="/api/v1/reports", tags=["reports"])

    return app


app = create_app()
