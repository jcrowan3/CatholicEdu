"""Helpers for safely exporting user-controlled CSV cells."""

FORMULA_PREFIXES = ("=", "+", "-", "@", "\t", "\r")


def sanitize_csv_cell(value: object) -> object:
    """Prefix spreadsheet formula-like text cells with an apostrophe."""
    if isinstance(value, str) and value.startswith(FORMULA_PREFIXES):
        return f"'{value}"
    return value
