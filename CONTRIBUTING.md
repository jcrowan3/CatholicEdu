# Contributing

Thank you for helping make Catholic Catechist Toolkit safer, clearer, and more useful.

## Before you begin

- Search existing issues and pull requests before opening a new one.
- Open an issue before a large architecture change, new grade, schema migration, or material curriculum rewrite.
- Never commit real student, family, parish, credential, or production database information.
- Treat curriculum changes as both software and editorial changes: cite sources, explain the teaching objective, and identify the human-review status.

## Local setup

Use the offline quick start in [README.md](README.md), or install both applications. Before submitting a pull request, run:

```bash
./scripts/check.sh
```

The gate covers frontend lint, unit tests, content provenance, production build, dependency audit, and Chromium smoke/accessibility tests, plus backend formatting, lint, tests, coverage, and dependency audit. Install the browser once with `cd frontend && npx playwright install chromium` before running the complete gate locally.

## Pull requests

Keep changes focused and explain:

1. The user problem being solved.
2. The implementation approach and important tradeoffs.
3. The checks and user flows you ran.
4. Screenshots for visible changes.
5. Privacy, safeguarding, accessibility, migration, and curriculum implications.

Add or update tests when behavior changes. Preserve backward compatibility for browser-local data unless the pull request includes a tested migration.

## Code conventions

- Frontend: React function components, ESLint, small shared utilities for repeated transformations, and accessible native controls.
- Backend: service-layer business logic, parish-scoped queries, Pydantic schemas, Ruff formatting, and async SQLAlchemy.
- Dependencies: use `npm ci` and `uv sync --frozen`; commit both lockfiles when dependency state changes.
- Documentation: verify every command from a clean environment when practical.

## Curriculum contributions

Curriculum pull requests must update `frontend/src/data/contentProvenance.js` when they add or materially change a tracked content surface. Include specific Scripture and Catechism references, avoid presenting automated review as ecclesial approval, and follow [docs/content-and-review.md](docs/content-and-review.md).

By contributing, you agree that your contribution can be distributed under the repository's MIT License unless a file explicitly states otherwise.
