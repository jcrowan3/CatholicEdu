# Catholic Catechist Toolkit

## Project Overview
Interactive web app for parish CCD/faith formation programs. Monorepo with a React SPA frontend and FastAPI + PostgreSQL backend. Supports offline (localStorage-only) and online (API-backed) modes.

Grades 2-8, 30 weeks per grade, 6 activity types per session.

## Tech Stack
- **Frontend**: React 19 + Vite 8 + Tailwind CSS v4 on Node.js 22.13+
- **Backend**: Python 3.12+, FastAPI, SQLAlchemy 2.0 (async), Pydantic v2
- **Database**: PostgreSQL 17 (asyncpg)
- **Auth**: JWT (PyJWT) + bcrypt
- **Testing**: pytest-asyncio + coverage (backend), Node test runner (frontend)
- **Deploy**: Docker Compose

## Project Structure
```
catechist-toolkit/
├── frontend/                  # React SPA
│   ├── src/
│   │   ├── api/client.js          # API client w/ auth + auto-refresh
│   │   ├── context/AuthContext.jsx # Online/offline auth provider
│   │   ├── components/
│   │   │   ├── activities/        # Discover, Sort, Timeline, FillBlank, Quiz, Prayer
│   │   │   ├── auth/              # LoginScreen, CatechistSetup, OnlineAuth, JoinClass
│   │   │   ├── dashboard/         # Dashboard, ProgressGrid, UserManager, ClassSelector
│   │   │   ├── admin/             # SessionEditor
│   │   │   ├── session/           # SessionHome, TopBar, Picker, Bookmarks, Vocabulary
│   │   │   └── landing/           # LandingPage
│   │   ├── hooks/
│   │   │   ├── useProgress.js     # Dual-mode (API + localStorage)
│   │   │   └── useBookmarks.js    # Dual-mode (API + localStorage)
│   │   ├── data/
│   │   │   ├── grade[2-8].js      # Curriculum data (30 sessions per grade)
│   │   │   ├── store.js           # localStorage data layer
│   │   │   └── gradeLoader.js     # Dynamic grade import
│   │   └── utils/
│   │       ├── migrateToApi.js    # localStorage → API migration
│   │       └── generateSessionPdf.js
│   ├── package.json
│   └── vite.config.js             # Proxy /api → localhost:8000
│
├── backend/
│   ├── src/catechist_api/
│   │   ├── models/                # 10 SQLAlchemy models
│   │   ├── schemas/               # Pydantic DTOs
│   │   ├── services/              # Business logic layer
│   │   ├── routers/               # 35 API endpoints
│   │   ├── auth/                  # JWT + bcrypt + dependencies
│   │   ├── config.py              # Settings (env vars)
│   │   ├── database.py            # Async engine + session
│   │   └── main.py                # FastAPI app + CORS + routers
│   ├── alembic/                   # DB migrations
│   ├── tests/                     # API, isolation, report, and service tests
│   └── pyproject.toml
│
└── docker-compose.yml
```

## Commands
```bash
# Frontend
cd frontend && npm run dev       # Dev server (localhost:5173)
cd frontend && npm run build     # Production build

# Backend
cd backend && uv sync --extra dev
cd backend && uv run uvicorn catechist_api.main:app --reload
cd backend && uv run --extra dev pytest tests/ -x -q
cd backend && uv run alembic upgrade head

# Docker
docker compose up -d db          # Just Postgres
docker compose up                # Full stack
```

## Content rules (critical)
- All Scripture: **Catholic Public Domain Version (CPDV)** — public domain
- CCC paragraph numbers are cited without reproducing the full Catechism
- Bundled text may include AI-assisted drafting and requires qualified human review before parish use
- Do not describe content as reviewed or doctrinally approved without a recorded qualified review
- Real Presence = transubstantiation, **NOT symbolic**

## Design System
- **Background**: Dark gradient `#1a1a3e → #2d2d6b → #1e3a5f`
- **Pillar colors**: Creed `#4A90D9`, Sacraments `#D4A843`, Morality `#6DB87B`, Prayer `#9B6DB8`
- **Cards**: Frosted glass (rgba backgrounds, subtle borders)
- **Stars**: Discover=2, Sort/Timeline/FillBlank=3, Quiz=5, Prayer=1
- **Fonts**: Nunito (body) + Lilita One (display) via Google Fonts
- **Animations**: slide-up (su), pop-in (pi), bounce-in (bi), float (fl), glow (gl), twinkle (tw)
- **Interactive**: `.ch` (card hover), `.bh` (button hover)

## Architecture Patterns
- **Dual-mode hooks**: `useProgress` and `useBookmarks` check `hasToken()` — API when online, localStorage when offline. Same interface for components.
- **Fire-and-forget writes**: Progress/bookmark API calls are non-blocking so UI stays instant.
- **Multi-tenant isolation**: All API queries scoped to `parish_id` from JWT.
- **Idempotent progress**: PostgreSQL `ON CONFLICT DO UPDATE` with `GREATEST()` for best-score upserts.
- **Session data**: Curriculum is bundled in frontend JS files. Backend stores overrides only.
- **pytest-asyncio**: Uses `asyncio_default_test_loop_scope = "session"` in pyproject.toml for shared event loops across session-scoped fixtures.

## Known Patterns
- Pydantic v2 field named "register" triggers shadowing warning — suppress with `warnings.filterwarnings`
- Merging lists of dicts with `id` keys during inheritance: use union-by-id
- `model_dump_json()` + `json.loads()` for clean YAML serialization
- JWT secrets must be supplied through the environment and contain at least 32 characters

## Target Devices
Chromebooks and tablets (parish classrooms). Mobile-friendly. Works offline.
