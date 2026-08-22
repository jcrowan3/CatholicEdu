# Changelog

Notable project changes are documented here. The project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and intends to use semantic versioning after its first public release.

## Unreleased

### Added

- Cross-platform CI for frontend and backend quality gates.
- Reproducible Python dependency lockfile and automated dependency updates.
- Public contribution, security, privacy, safeguarding, architecture, deployment, and content-review guidance.
- Accessible keyboard controls and reduced-motion behavior for primary student flows.
- A true full-stack Docker Compose path with a production-built frontend container.

### Changed

- Grade curriculum and PDF tooling now load on demand, reducing the initial JavaScript bundle substantially.
- Repeated progress-report transformations now use tested shared utilities.
- JWT configuration now requires a secret of at least 32 characters.

### Security

- Updated frontend dependencies to remove known production dependency advisories reported by `npm audit`.
