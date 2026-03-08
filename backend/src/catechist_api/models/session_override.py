"""SessionOverride model — catechist edits to curriculum."""

import uuid
from datetime import datetime, timezone

from sqlalchemy import DateTime, ForeignKey, SmallInteger, UniqueConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base


class SessionOverride(Base):
    __tablename__ = "session_overrides"
    __table_args__ = (
        UniqueConstraint(
            "grade_config_id", "week", name="uq_session_override_grade_week"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    grade_config_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("grade_configs.id", ondelete="CASCADE"), nullable=False, index=True
    )
    week: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    session_data: Mapped[dict] = mapped_column(JSONB, nullable=False)
    created_by: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("catechists.id", ondelete="SET NULL")
    )
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
    grade_config: Mapped["GradeConfig"] = relationship(back_populates="session_overrides")
