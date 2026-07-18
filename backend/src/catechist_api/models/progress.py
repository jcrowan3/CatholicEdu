"""ProgressEntry model — one row per activity completion."""

import uuid
from datetime import datetime, timezone
from typing import TYPE_CHECKING

from sqlalchemy import DateTime, ForeignKey, SmallInteger, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base

if TYPE_CHECKING:
    from catechist_api.models import Student


class ProgressEntry(Base):
    __tablename__ = "progress_entries"
    __table_args__ = (
        UniqueConstraint(
            "student_id", "grade", "week", "activity",
            name="uq_progress_student_grade_week_activity",
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("students.id", ondelete="CASCADE"), nullable=False, index=True
    )
    grade: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    week: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    activity: Mapped[str] = mapped_column(
        String(20), nullable=False
    )  # discover, sort, timeline, fillblank, quiz, prayer
    stars_earned: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    earned_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )

    # Relationships
    student: Mapped["Student"] = relationship(back_populates="progress_entries")
