"""family_communication_fields

Revision ID: bb36332d
Revises: 4f0808e46062
Create Date: 2026-06-12 09:00:00.000000
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = "bb36332d"
down_revision: Union[str, None] = "4f0808e46062"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column("students", sa.Column("parent_email", sa.String(length=254), nullable=True))
    op.add_column("students", sa.Column("pickup_contact_notes", sa.Text(), nullable=True))
    op.add_column(
        "students",
        sa.Column(
            "media_permission_granted",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
    )
    op.add_column("students", sa.Column("allergy_privacy_flags", sa.Text(), nullable=True))
    op.add_column(
        "students",
        sa.Column(
            "weekly_digest_permission",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
    )
    op.alter_column("students", "media_permission_granted", server_default=None)
    op.alter_column("students", "weekly_digest_permission", server_default=None)


def downgrade() -> None:
    op.drop_column("students", "weekly_digest_permission")
    op.drop_column("students", "allergy_privacy_flags")
    op.drop_column("students", "media_permission_granted")
    op.drop_column("students", "pickup_contact_notes")
    op.drop_column("students", "parent_email")
