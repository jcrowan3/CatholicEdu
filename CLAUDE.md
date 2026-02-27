# Catholic Catechist Toolkit — Grade 3

## Project Overview
Interactive web app for parish CCD/faith formation programs. Delivers weekly sessions to 3rd graders (ages 8-9) learning about "The Church and the Sacraments."

## Tech Stack
- React + Vite
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- No backend — pure client-side, data lives in JS files
- Google Fonts: Nunito (body) + Lilita One (display)

## Project Structure
```
catechist-toolkit/
├── src/
│   ├── components/
│   │   ├── activities/     # 6 activity type components
│   │   │   ├── Discover.jsx    # Tap-to-reveal cards
│   │   │   ├── Sort.jsx        # Drag/tap into categories
│   │   │   ├── Timeline.jsx    # Swap items into order
│   │   │   ├── FillBlank.jsx   # Complete sentences
│   │   │   ├── Quiz.jsx        # 5-question multiple choice
│   │   │   └── Prayer.jsx      # Call-and-response guided prayer
│   │   ├── session/
│   │   │   ├── SessionHome.jsx   # Activity grid + progress bar
│   │   │   ├── SessionPicker.jsx # Week selector
│   │   │   └── TopBar.jsx       # Navigation + star counter
│   │   └── shared/
│   │       ├── DoneButton.jsx
│   │       ├── DoneBadge.jsx
│   │       └── Feedback.jsx
│   ├── data/
│   │   └── grade3.js       # All 30 sessions data
│   ├── hooks/
│   │   └── useProgress.js  # Stars, completion tracking
│   ├── styles/
│   │   └── animations.css  # Keyframe animations
│   ├── App.jsx             # Main router / screen manager
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind imports + base styles
├── CLAUDE.md
├── package.json
└── index.html
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Content Rules (CRITICAL)
- All Scripture uses the **Catholic Public Domain Version (CPDV)** — public domain
- CCC (Catechism of the Catholic Church) paragraph numbers are cited but content is original
- All content is **original** — no copyrighted curricula
- Must be **doctrinally accurate** to official Catholic teaching
- The Real Presence of Christ in the Eucharist is **NOT symbolic** — this is core Catholic doctrine (transubstantiation)

## Design System
- **Background**: Dark gradient `#1a1a3e → #2d2d6b → #1e3a5f`
- **Pillar colors**: Creed `#4A90D9`, Sacraments `#D4A843`, Morality `#6DB87B`, Prayer `#9B6DB8`
- **Cards**: Frosted glass effect (rgba backgrounds, subtle borders)
- **Stars**: Discover=2, Sort/Timeline/FillBlank=3, Quiz=5, Prayer=1
- **Animations**: slide-up (su), pop-in (pi), bounce-in (bi), float (fl), glow (gl), twinkle (tw)
- **Interactive classes**: `.ch` (card hover), `.bh` (button hover)

## Session Data Structure
Each session in `data/grade3.js` has:
- `week`, `title`, `pillar`, `ccc`, `verse`
- `discover`: tap-to-reveal cards
- `secondary`: which secondary activity ("sort", "timeline", or "fillblank")
- The secondary activity data object
- `quiz`: 5 multiple-choice questions (0-indexed `correct`)
- `prayer`: leader/all call-and-response lines

## Target Devices
Chromebooks and tablets (parish classrooms). Mobile-friendly.

## Future Integration
- Saint Quest adventure game (placeholder card on SessionHome)
- Backend for progress persistence
- Catechist/admin dashboard
