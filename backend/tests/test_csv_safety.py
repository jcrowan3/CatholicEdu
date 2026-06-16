"""Tests for CSV export safety helpers."""

import pytest

from catechist_api.services.csv_safety import sanitize_csv_cell


@pytest.mark.parametrize("prefix", ["=", "+", "-", "@", "\t", "\r", "\n"])
def test_sanitize_csv_cell_prefixes_formula_triggers(prefix: str):
    assert sanitize_csv_cell(f"{prefix}SUM(A1:A2)") == f"'{prefix}SUM(A1:A2)"


def test_sanitize_csv_cell_leaves_safe_values_unchanged():
    assert sanitize_csv_cell("Maria") == "Maria"
    assert sanitize_csv_cell("") == ""
    assert sanitize_csv_cell(12) == 12
