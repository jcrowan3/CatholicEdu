# Changelog

Notable project changes are documented here. The project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and intends to use semantic versioning after its first public release.

## [Unreleased]

### Added

- A complete 30-session Grade 1 curriculum covering creation, the Trinity, Jesus, the Church, sacraments, Christian life, and prayer.
- Curriculum-integrity tests for all active grades, including playable sorting groups, ordered timelines, selectable fill-in answers, complete quizzes, and guided prayers.
- Grade-level qualified-review records, a reviewer template, and machine-checked evidence requirements.
- Deterministic citation and doctrine enforcement for all 240 bundled sessions.
- A versioned curriculum schema, contributor authoring template, offline audit report, and online CPDV source-verification command.
- Desktop and mobile Chromium coverage for student learning screens, including automated WCAG checks.
- Versioned offline JSON backup and validated restore controls, with token exclusion, rollback safety, migration support, and browser coverage.
- Hosted authentication lockout and route throttling, globally unique catechist email identities, and account-wide access/refresh token revocation on logout.
- Tenant-scoped student-data export, confirmation-gated associated-record deletion, privacy-minimized audit events, and dry-run-first retention operations.

### Fixed

- Grade 5 Week 29 now provides destinations, colors, and icons for all seven saint patronage cards.
- Added missing Catechism anchors to 59 sessions and replaced non-Scripture session headers with referenced CPDV passages.
- Doctrinal checks now evaluate the answer a quiz teaches without treating intentionally incorrect distractors as assertions.
- Grade 8 session headers now use text verified against the identified CPDV source.
- Activity cards and answer controls now expose native keyboard and assistive-technology semantics, and the student pillar badge meets WCAG AA contrast.

### Changed

- Interactive activities now share an unbiased, non-mutating Fisher-Yates shuffle utility with focused tests.
- Browser-local data upgrades now run through an idempotent, versioned migration sequence.
- Catechist access to progress and bookmark endpoints now verifies that the student belongs to the same parish; student tokens are rejected after deactivation or deletion.

### Security

- Registration now requires 12-character passwords, repeated failures produce a configurable temporary lockout, and public authentication routes return bounded `429` responses with `Retry-After`.

## [0.1.0] - 2026-08-22

### Added

- Cross-platform CI for frontend and backend quality gates.
- Reproducible Python dependency lockfile and automated dependency updates.
- Public contribution, security, privacy, safeguarding, architecture, deployment, and content-review guidance.
- Accessible keyboard controls and reduced-motion behavior for primary student flows.
- A true full-stack Docker Compose path with a production-built frontend container.
- Automated dependency vulnerability checks for Python and JavaScript, plus Docker update tracking.
- A canonical, machine-checked AI content provenance record and explicit review-required disclosure.
- Default code ownership for software, curriculum, and project policy files.
- Chromium end-to-end smoke coverage for offline setup and automated WCAG checks on the public landing page.
- A production-hosting roadmap that separates source-release readiness from operator security and privacy obligations.

### Changed

- Grade curriculum and PDF tooling now load on demand, reducing the initial JavaScript bundle substantially.
- Repeated progress-report transformations now use tested shared utilities.
- JWT configuration now requires a secret of at least 32 characters.
- Alembic now honors the configured database URL, and Docker Compose applies pending migrations before starting the API.
- Coverage tracing now follows SQLAlchemy's async greenlets consistently on Python 3.12.
- JWT handling now uses PyJWT, eliminating obsolete transitive cryptography dependencies.
- Frontend and backend dependency baselines now use currently supported releases.

### Security

- Updated frontend dependencies to remove known production dependency advisories reported by `npm audit`.
- Updated backend dependencies to remove all known findings reported by `pip-audit`.

[Unreleased]: https://github.com/jcrowan3/CatholicEdu/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/jcrowan3/CatholicEdu/releases/tag/v0.1.0
