"""Application settings loaded from environment variables."""

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # Database
    database_url: str = "postgresql+asyncpg://catechist:devpassword@localhost:5432/catechist"

    # JWT
    jwt_secret: str = Field(min_length=32)
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 30
    student_token_expire_hours: int = 2
    max_login_attempts: int = Field(default=5, ge=3, le=20)
    login_lockout_minutes: int = Field(default=15, ge=1, le=1440)
    auth_rate_limit_requests: int = Field(default=30, ge=5, le=1000)
    auth_rate_limit_window_seconds: int = Field(default=60, ge=1, le=3600)

    # Privacy operations
    inactive_student_retention_days: int = Field(default=365, ge=1, le=3650)
    audit_event_retention_days: int = Field(default=365, ge=30, le=3650)
    exported_backup_retention_days: int = Field(default=30, ge=1, le=3650)

    # CORS
    cors_origins: list[str] = ["http://localhost:5173", "http://localhost:5175"]

    # App
    debug: bool = False


settings = Settings()
