# Changelog

Notable project changes are documented here. The project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and intends to use semantic versioning after its first public release.

## [Unreleased]

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
