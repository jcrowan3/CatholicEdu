"""Student model — child accounts with simple auth."""

import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import Boolean, DateTime, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base

if TYPE_CHECKING:
    from catechist_api.models import Bookmark, ClassEnrollment, Parish, ProgressEntry


class Student(Base):
    __tablename__ = "students"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    parish_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("parishes.id", ondelete="CASCADE"), nullable=False, index=True
    )
    display_name: Mapped[str] = mapped_column(String(100), nullable=False)
    avatar_emoji: Mapped[str] = mapped_column(String(10), nullable=False, default="😊")
    access_pin: Mapped[str | None] = mapped_column(String(4))  # Optional 4-digit PIN
    parent_email: Mapped[str | None] = mapped_column(String(254))
    pickup_contact_notes: Mapped[str | None] = mapped_column(Text)
    media_permission_granted: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    allergy_privacy_flags: Mapped[str | None] = mapped_column(Text)
    weekly_digest_permission: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(UTC), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
        onupdate=lambda: datetime.now(UTC),
        nullable=False,
    )

    # Relationships
    parish: Mapped["Parish"] = relationship(back_populates="students")
    enrollments: Mapped[list["ClassEnrollment"]] = relationship(back_populates="student")
    progress_entries: Mapped[list["ProgressEntry"]] = relationship(back_populates="student")
    bookmarks: Mapped[list["Bookmark"]] = relationship(back_populates="student")
