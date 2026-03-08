FROM python:3.14-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copy project files and install dependencies
COPY pyproject.toml uv.lock* ./
RUN uv sync --frozen 2>/dev/null || uv sync

# Copy source code
COPY src/ src/
COPY alembic/ alembic/
COPY alembic.ini ./

CMD ["uv", "run", "uvicorn", "catechist_api.main:app", "--host", "0.0.0.0", "--port", "8000"]
