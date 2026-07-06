FROM python:3.14-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copy project files and install dependencies
COPY backend/pyproject.toml backend/uv.lock* ./
RUN uv sync --frozen 2>/dev/null || uv sync

# Copy source code
COPY backend/src/ src/
COPY backend/alembic/ alembic/
COPY backend/alembic.ini ./

# Package read-only curriculum metadata for deployed standards coverage exports.
COPY frontend/src/data/grade*.js curriculum/

CMD ["uv", "run", "uvicorn", "catechist_api.main:app", "--host", "0.0.0.0", "--port", "8000"]
