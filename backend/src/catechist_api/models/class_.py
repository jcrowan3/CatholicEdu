"""Class model — a class within a grade at a parish."""

import secrets
import string
import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import Boolean, DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from catechist_api.database import Base

if TYPE_CHECKING:
    from catechist_api.models import ClassEnrollment, GradeConfig


def _generate_join_code() -> str:
    """Generate a 6-character alphanumeric join code (uppercase, no ambiguous chars)."""
    alphabet = string.ascii_uppercase.replace("O", "").replace("I", "") + string.digits
    alphabet = alphabet.replace("0", "").replace("1", "")  # Remove ambiguous: O/0, I/1
    return "".join(secrets.choice(alphabet) for _ in range(6))


class Class(Base):
    __tablename__ = "classes"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    grade_config_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("grade_configs.id", ondelete="CASCADE"), nullable=False, index=True
    )
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    join_code: Mapped[str] = mapped_column(
        String(8), unique=True, nullable=False, default=_generate_join_code
    )
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
    grade_config: Mapped["GradeConfig"] = relationship(back_populates="classes")
    enrollments: Mapped[list["ClassEnrollment"]] = relationship(back_populates="class_")
