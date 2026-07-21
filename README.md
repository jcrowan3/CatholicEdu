# Catholic Catechist Toolkit ✝️

Interactive faith formation app for parish CCD and Catholic classrooms. Students work through 30 weeks of sessions per grade with discover cards, sorting games, timelines, fill-in-the-blanks, quizzes, and guided prayers — earning stars along the way.

**Grades available:** 2, 3, 4, 5, 6, 7, 8 (30 weeks each)

## Where to Play

### Quick Start — Offline Mode (no setup needed)

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** — pick a grade, set a PIN, add students, and go. Everything saves to your browser's localStorage. No account or server needed.

### Full Stack — Online Mode (synced data)

If you want multi-device sync, class join codes, and a catechist dashboard backed by a real database:

```bash
# 1. Start Postgres
docker compose up -d db

# 2. Set up the backend
cd backend
cp .env.example .env
uv sync --extra dev
uv run alembic upgrade head
uv run uvicorn catechist_api.main:app --reload

# 3. Start the frontend (in another terminal)
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** — you'll see "Catechist Sign In" and "Join a Class" buttons.

Alternatively, run everything via Docker:

```bash
docker compose up
```

## How It Works

### For Catechists (Teachers)

1. **Offline mode**: Pick a grade → set a 4-digit PIN → add students → they play on shared devices
2. **Online mode**: Register with email/password → creates your parish → add grades, classes, students → students join with a code

As catechist, you get:
- **Dashboard** — student count, average stars, per-week completion rates
- **Student Manager** — add/edit/remove students with emoji avatars
- **Progress Grid** — see every student's completion by week (○ not started, ◐ in progress, ● complete)
- **Session Editor** — customize any session's content (discover cards, quiz questions, prayer lines)
- **PDF Export** — print any session as a take-home sheet

### For Students

1. **Offline**: Tap your name on the login screen
2. **Online**: Enter the join code your catechist gives you → tap your name

Each week has up to 6 activities:

| Activity | What it is | Stars |
|----------|-----------|-------|
| **Discover** | Tap-to-reveal teaching cards with bookmarking | ⭐⭐ |
| **Sort & Match** | Drag items into the right categories | ⭐⭐⭐ |
| **Put in Order** | Arrange events chronologically | ⭐⭐⭐ |
| **Fill the Blank** | Complete sentences with word choices | ⭐⭐⭐ |
| **Quick Quiz** | 5 multiple-choice questions | ⭐⭐⭐⭐⭐ |
| **Closing Prayer** | Call-and-response guided prayer | ⭐ |

Students also get:
- **Bookmarks** — save favorite discover cards to review later
- **Vocabulary** — browse all key terms across the curriculum
- **Take-Home** — printable session summaries

## Project Structure

```
catechist-toolkit/
├── frontend/                 # React + Vite SPA
│   ├── src/
│   │   ├── api/client.js         # API client (auth, fetch, all endpoints)
│   │   ├── context/AuthContext.jsx # Online/offline auth provider
│   │   ├── components/
│   │   │   ├── activities/       # Discover, Sort, Timeline, FillBlank, Quiz, Prayer
│   │   │   ├── auth/             # LoginScreen, CatechistSetup, OnlineAuth, JoinClass
│   │   │   ├── dashboard/        # Dashboard, ProgressGrid, UserManager, ClassSelector
│   │   │   ├── admin/            # SessionEditor
│   │   │   ├── session/          # SessionHome, TopBar, Picker, Bookmarks, Vocabulary
│   │   │   └── landing/          # LandingPage (grade selector)
│   │   ├── hooks/
│   │   │   ├── useProgress.js    # Dual-mode: API when online, localStorage offline
│   │   │   └── useBookmarks.js   # Same dual-mode pattern
│   │   ├── data/
│   │   │   ├── grade[2-8].js     # 30 sessions per grade (bundled curriculum)
│   │   │   └── store.js          # localStorage data layer
│   │   └── utils/
│   │       └── migrateToApi.js   # Export localStorage → import to API
│   ├── package.json
│   └── vite.config.js            # Proxy /api → backend
│
├── backend/                  # FastAPI + PostgreSQL
│   ├── src/catechist_api/
│   │   ├── models/           # 10 SQLAlchemy models
│   │   ├── schemas/          # Pydantic request/response DTOs
│   │   ├── services/         # Business logic
│   │   ├── routers/          # 35 API endpoints
│   │   ├── auth/             # JWT + bcrypt
│   │   └── main.py           # FastAPI app
│   ├── alembic/              # Database migrations
│   ├── tests/                # 37 pytest tests
│   └── pyproject.toml
│
└── docker-compose.yml        # Postgres + API containers
```

## API Overview (35 endpoints)

| Group | Endpoints |
|-------|-----------|
| **Auth** | Register parish, login, refresh tokens, student roster, student login |
| **Parish** | Get/update parish info |
| **Grades** | List/create/update grade configs |
| **Classes** | CRUD classes (each gets a join code), list students in class |
| **Students** | Create/update/deactivate students |
| **Progress** | Record + retrieve per-activity star progress (idempotent upserts) |
| **Bookmarks** | CRUD student bookmarks on discover cards |
| **Sessions** | CRUD session content overrides per grade/week |
| **Reports** | Parish overview, class progress grid, student summary, CSV export |

Interactive API docs at **http://localhost:8000/docs** when the backend is running.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 7, Tailwind CSS v4 |
| Backend | Python 3.14, FastAPI, SQLAlchemy 2.0 (async), Pydantic v2 |
| Database | PostgreSQL 17 via asyncpg |
| Auth | JWT (python-jose) + bcrypt |
| Migrations | Alembic (async) |
| Testing | pytest + pytest-asyncio + httpx |
| Packaging | uv + pyproject.toml (backend), npm (frontend) |
| Deploy | Docker Compose |

## Content Guidelines

- All Scripture uses the **Catholic Public Domain Version (CPDV)** — public domain
- CCC (Catechism) paragraph numbers are cited but all content is original
- Doctrinally aligned with official Catholic teaching
- The Real Presence in the Eucharist is taught as transubstantiation, not symbolic
- AI provenance and disclosure posture is documented in [docs/ai-provenance-audit.md](docs/ai-provenance-audit.md)

## Target Devices

Chromebooks and tablets (parish classrooms). Mobile-friendly. Works offline.

## License

Private repository. All curriculum content is original.
