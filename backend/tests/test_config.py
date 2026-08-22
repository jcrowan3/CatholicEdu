"""Configuration safety checks."""

import pytest
from pydantic import ValidationError

from catechist_api.config import Settings


def test_jwt_secret_must_be_at_least_32_characters():
    with pytest.raises(ValidationError):
        Settings(_env_file=None, jwt_secret="too-short")
