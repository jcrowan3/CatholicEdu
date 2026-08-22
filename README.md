# Catholic Catechist Toolkit

[![CI](https://github.com/jcrowan3/CatholicEdu/actions/workflows/ci.yml/badge.svg)](https://github.com/jcrowan3/CatholicEdu/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Grades 2–8](https://img.shields.io/badge/grades-2--8-D4A843.svg)](#curriculum-and-content)

An offline-friendly, open-source toolkit for Catholic parish faith formation. It gives catechists 30 interactive sessions per grade and gives students short activities, quizzes, guided prayer, vocabulary, bookmarks, and progress tracking.

![Catholic Catechist Toolkit grade selector](docs/images/landing.png)

> [!IMPORTANT]
> This is an independent community project. It is not an official publication of the Holy See, a diocese, the USCCB, or a curriculum publisher. Parishes remain responsible for local safe-environment, privacy, accessibility, and doctrinal review requirements.

## Why use it?

- **Start locally in minutes.** Offline mode needs only Node.js and stores data in the browser.
- **Use classroom-friendly activities.** Discover cards, sorting, timelines, fill-in-the-blank exercises, quizzes, and guided prayers are included.
- **Choose the operating model.** Run entirely offline or add the FastAPI/PostgreSQL backend for multi-device sync and class join codes.
- **Inspect and adapt it.** The application, curriculum files, tests, provenance notes, and deterministic doctrinal-review rules are all visible in the repository.
- **Export useful artifacts.** Catechists can create session handouts, standards-coverage PDFs, progress CSVs, and family communication exports.

## Quick start

### Offline classroom mode

Requirements: Node.js 22 or later and npm.

```bash
git clone https://github.com/jcrowan3/CatholicEdu.git
cd CatholicEdu/frontend
npm ci
npm run dev
```

Open <http://localhost:5173>, choose a grade, and complete the local setup. Data remains in that browser's `localStorage`; it is not synchronized or backed up automatically.

### Full stack with Docker

Requirements: Docker with Compose.

```bash
git clone https://github.com/jcrowan3/CatholicEdu.git
cd CatholicEdu
docker compose up --build
```

Open:

- Application: <http://localhost:5173>
- API documentation: <http://localhost:8000/docs>

The Compose configuration is for local development. Its database password and JWT secret must never be reused in a deployed environment. See [deployment guidance](docs/deployment.md) before hosting the toolkit.

### Full stack without Docker

Requirements: Node.js 22+, Python 3.12+, [uv](https://docs.astral.sh/uv/), and PostgreSQL 17+.

```bash
# Backend
cd backend
cp .env.example .env
# Replace JWT_SECRET with: openssl rand -hex 32
uv sync --frozen --extra dev
uv run alembic upgrade head
uv run uvicorn catechist_api.main:app --reload

# Frontend, in another terminal
cd frontend
npm ci
npm run dev
```

## Operating modes

| Capability | Offline | Online |
| --- | --- | --- |
| Curriculum and activities | Yes | Yes |
| Browser-local progress and bookmarks | Yes | Cached locally |
| Multi-device synchronization | No | Yes |
| Catechist accounts and class join codes | No | Yes |
| PostgreSQL reporting | No | Yes |
| Internet required during a session | No, after PWA assets are cached | Normally yes |

## Development

Run the complete repository gate from the project root:

```bash
./scripts/check.sh
```

Or run each side independently:

```bash
cd frontend
npm run lint
npm test
npm run audit:content
npm run build

cd ../backend
uv sync --frozen --extra dev
uv run ruff check src tests
uv run ruff format --check src tests
uv run pytest --cov=catechist_api
```

Pull requests run the same checks in GitHub Actions. See [CONTRIBUTING.md](CONTRIBUTING.md) for the expected workflow.

## Architecture

```text
Browser / PWA
├── React + Vite interface
├── grade curriculum loaded on demand
├── offline localStorage adapter
└── optional REST client
        │
        ▼
FastAPI service
├── JWT authentication
├── parish-scoped services
├── SQLAlchemy models and Alembic migrations
└── PostgreSQL
```

Read [docs/architecture.md](docs/architecture.md) for the main modules, data boundaries, and extension points.

## Curriculum and content

Grades 2–8 currently include 30 sessions each. Curriculum modules live in `frontend/src/data/grade*.js` and are loaded only when a grade is selected.

- Scripture quotations identify the Catholic Public Domain Version (CPDV). The [translator's site](https://sacredbible.org/studybible/version.htm) states that the CPDV is in the public domain.
- Catechism references point readers to numbered paragraphs; the project does not reproduce the full Catechism.
- Curriculum may include AI-assisted drafting. Provenance and current review posture are documented in [docs/ai-provenance-audit.md](docs/ai-provenance-audit.md) and enforced by `npm run audit:content`.
- Automated doctrinal checks are guardrails, not a substitute for review by an appropriately qualified catechist, pastor, or diocesan authority.

See [docs/content-and-review.md](docs/content-and-review.md) before editing or redistributing curriculum.

## Privacy and safeguarding

This application can store student display names, progress, family contact information, permissions, and sensitive notes. Do not enter data unless your parish has an approved purpose, retention policy, access model, and parent/guardian process. Review [docs/privacy-and-safeguarding.md](docs/privacy-and-safeguarding.md) before using real student information.

Security issues should be reported privately according to [SECURITY.md](SECURITY.md), not through a public issue.

## Project status

The toolkit is suitable for evaluation and local pilots. It should not be treated as a hosted, compliance-certified student information system. Current priorities are tracked through GitHub issues and [CHANGELOG.md](CHANGELOG.md).

## Contributing

Contributions are welcome, especially for accessibility, test coverage, curriculum review, translations, privacy safeguards, and deployment documentation. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Unless a file says otherwise, repository code and original project content are available under the [MIT License](LICENSE). Public-domain source material remains public domain, and third-party names and references remain subject to their respective rights.
