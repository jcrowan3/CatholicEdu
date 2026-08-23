"""Audit event API schemas."""

import uuid
from datetime import datetime

from pydantic import BaseModel, Field


class AuditEventResponse(BaseModel):
    """One privacy-minimized operational audit event."""

    model_config = {"from_attributes": True}

    id: uuid.UUID
    actor_type: str
    actor_id: uuid.UUID | None
    action: str
    metadata: dict | None = Field(validation_alias="metadata_")
    created_at: datetime
