"""Bookmark model — saved discover items."""

import uuid
from datetime import datetime, timezone
from typing import TYPE_CHECKING

from sqlalchemy import DateTime, ForeignKey, SmallInteger, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base

if TYPE_CHECKING:
    from catechist_api.models import Student


class Bookmark(Base):
    __tablename__ = "bookmarks"
    __table_args__ = (
        UniqueConstraint(
            "student_id", "grade", "week", "discover_index",
            name="uq_bookmark_student_grade_week_index",
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("students.id", ondelete="CASCADE"), nullable=False, index=True
    )
    grade: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    week: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    discover_index: Mapped[int] = mapped_column(SmallInteger, nullable=False)
    # Denormalized from static content for display
    item_name: Mapped[str] = mapped_column(String(200), nullable=False)
    item_desc: Mapped[str | None] = mapped_column(Text)
    item_icon: Mapped[str | None] = mapped_column(String(10))
    pillar: Mapped[str | None] = mapped_column(String(20))
    saved_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )

    # Relationships
    student: Mapped["Student"] = relationship(back_populates="bookmarks")
