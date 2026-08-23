"""auth hardening

Revision ID: c8b7a2f109de
Revises: bb36332d
Create Date: 2026-08-23 09:10:00.000000
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "c8b7a2f109de"
down_revision: Union[str, None] = "bb36332d"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "catechists",
        sa.Column("auth_version", sa.Integer(), nullable=False, server_default="0"),
    )
    op.add_column(
        "catechists",
        sa.Column("failed_login_attempts", sa.Integer(), nullable=False, server_default="0"),
    )
    op.add_column("catechists", sa.Column("locked_until", sa.DateTime(timezone=True)))
    op.drop_constraint("uq_catechist_parish_email", "catechists", type_="unique")
    op.create_unique_constraint("uq_catechist_email", "catechists", ["email"])
    op.alter_column("catechists", "auth_version", server_default=None)
    op.alter_column("catechists", "failed_login_attempts", server_default=None)


def downgrade() -> None:
    op.drop_constraint("uq_catechist_email", "catechists", type_="unique")
    op.create_unique_constraint(
        "uq_catechist_parish_email", "catechists", ["parish_id", "email"]
    )
    op.drop_column("catechists", "locked_until")
    op.drop_column("catechists", "failed_login_attempts")
    op.drop_column("catechists", "auth_version")
