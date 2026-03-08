"""GradeConfig model — per-parish grade setup."""

import uuid
from datetime import datetime, timezone

from sqlalchemy import Boolean, DateTime, ForeignKey, SmallInteger, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base


class GradeConfig(Base):
    __tablename__ = "grade_configs"
    __table_args__ = (UniqueConstraint("parish_id", "grade", name="uq_grade_config_parish_grade"),)

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    parish_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("parishes.id", ondelete="CASCADE"), nullable=False, index=True
    )
    grade: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    program_name: Mapped[str | None] = mapped_column(String(200))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    # Relationships
    parish: Mapped["Parish"] = relationship(back_populates="grade_configs")
    classes: Mapped[list["Class"]] = relationship(back_populates="grade_config")
    session_overrides: Mapped[list["SessionOverride"]] = relationship(
        back_populates="grade_config"
    )
