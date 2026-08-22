#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

cd "$repo_dir/frontend"
npm run lint
npm test
npm run audit:content
npm run build
npm audit --omit=dev --audit-level=high
npm run test:e2e

cd "$repo_dir/backend"
uv sync --frozen --extra dev
uv run ruff check src tests
uv run ruff format --check src tests
uv run pytest --cov=catechist_api --cov-report=term --cov-fail-under=95
uv run pip-audit --local
