FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN groupadd --gid 10001 appuser \
    && useradd --uid 10001 --gid appuser --create-home appuser

# Keep the package manager version explicit so builds are reproducible.
COPY --from=ghcr.io/astral-sh/uv:0.10.2 /uv /usr/local/bin/uv

COPY backend/pyproject.toml backend/uv.lock* ./
RUN uv sync --frozen --no-dev --no-install-project

COPY --chown=appuser:appuser backend/src/ src/
COPY --chown=appuser:appuser backend/alembic/ alembic/
COPY --chown=appuser:appuser backend/alembic.ini ./

# Package read-only curriculum metadata for deployed standards coverage exports.
COPY --chown=appuser:appuser frontend/src/data/grade*.js curriculum/

RUN uv sync --frozen --no-dev \
    && chown -R appuser:appuser /app

USER appuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/api/v1/health', timeout=3)" || exit 1

CMD ["uv", "run", "uvicorn", "catechist_api.main:app", "--host", "0.0.0.0", "--port", "8000"]
