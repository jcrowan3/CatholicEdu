# Public-Release Improvement Log

## Baseline

- Preliminary readiness score: 48/100.
- Frontend: build and six tests passed; lint had 13 errors; production audit had a critical advisory; initial JavaScript bundle was 1.46 MB.
- Backend: 52 tests passed at 96% coverage; Ruff reported 108 findings.
- Repository: private, no CI, incomplete public-project documentation, and Docker instructions did not include a frontend container.

## Loop 1 — secure, repeatable baseline

- Production dependency audit reduced to zero known findings.
- Frontend and backend lint/format checks pass.
- Python dependencies are locked and the full local quality gate is scripted.
- GitHub Actions and Dependabot configuration added.

## Loop 2 — performance and simplification

- Grade curricula and PDF tooling load on demand.
- Initial JavaScript changed from 1.46 MB (434 KB compressed) to approximately 317 KB (97 KB compressed).
- Shared, tested transformations replaced duplicated progress-grid logic.
- Authentication, setup, and catechist administration now have route-level lazy-loading boundaries.
- Frontend focused tests increased from six to fourteen.

## Loop 3 — product and accessibility

- Primary mouse-only cards converted to native buttons.
- Emoji-only controls received accessible names.
- Visible keyboard focus and reduced-motion behavior added.
- Desktop and mobile grade selection plus the offline student flow were inspected in a real browser.
- The production landing page scored 96 performance and 100 for accessibility, best practices, and SEO in Lighthouse.

## Loop 4 — public project package

- README, contribution, conduct, security, architecture, deployment, privacy, safeguarding, content-review, and changelog documentation added.
- Docker Compose now includes a built frontend service.
- API startup configuration requires a JWT secret of at least 32 characters.

## Loop 5 — dependency and trust hardening

- Production JavaScript and Python dependency audits report zero known vulnerabilities.
- The backend moved from `python-jose` to PyJWT and the container now runs as a dedicated non-root user.
- GitHub Actions and base images use current major releases, container dependencies are tracked by Dependabot, and frontend responses include baseline security headers.
- The two AI provenance documents were consolidated around one canonical, machine-checked record. Unverified human-review claims were replaced with an explicit qualified-review requirement.

## Loop 6 — maintainability and browser coverage

- Shared roster parsing, communication fields, and an accessible avatar picker were extracted from the student-management hotspot.
- Roster parsing has focused unit coverage, bringing the frontend suite to fourteen tests.
- Two Playwright Chromium journeys now cover the public landing page, WCAG rules through axe-core, and complete offline classroom setup through the first student session.
- Frontend and backend packages now share the pre-release version `0.1.0`.

## Release gate

Completed on 2026-08-22:

- The combined local quality gate passed: 14 frontend unit tests, two Chromium end-to-end tests, 53 backend tests, 96.65% backend coverage on the supported Python 3.12 baseline, content provenance checks, lint, formatting, production build, and zero-finding production dependency audits.
- Docker images built and a fresh-volume Compose stack served the frontend and a healthy API. The API ran as UID/GID 10001, both application containers reported healthy, and the temporary validation stack and volume were removed afterward.
- Gitleaks scanned all 51 commits and found no secrets.
- The production landing page scored 96 performance and 100 for accessibility, best practices, and SEO in Lighthouse.

Estimated source-release readiness: **96/100**, up from 48/100. The remaining publication gates are the maintainer's history/privacy choice, repository visibility change, and post-public security settings. Independent curriculum/privacy review and production-specific controls remain prerequisites for parish or hosted production use.

## Loop 7 — curriculum and product quality

- All 240 sessions pass deterministic structure, citation, doctrine, and activity-playability checks; Grade 8 Scripture headers also pass exact CPDV source verification.
- A versioned curriculum schema, contributor template, grade-level review records, and qualified-review workflow now make curriculum changes auditable.
- The frontend suite now includes 22 focused tests and six Playwright journeys across desktop and mobile Chromium.
- Automated WCAG checks now cover the public landing page, student session home, and a learning activity; identified interaction semantics and contrast findings were fixed.
- Activity randomization now uses one tested Fisher-Yates utility instead of duplicated comparator-based shuffling.

## Loop 8 — data resilience and hosted operations

- Offline mode now provides versioned backup/restore, validated key boundaries, token exclusion, rollback safety, and idempotent local-data migrations.
- Hosted authentication now includes configurable lockout, public-route throttling, global email identity, database-checked token versions, and account-wide logout revocation.
- Parish administrators can export a versioned student record, perform exact-confirmation permanent deletion, and review privacy-minimized audit events.
- Retention tooling previews by default and deletes expired inactive students and audit events only with an explicit execution flag; external-file expiry remains an operator responsibility.
- Tenant checks now protect student progress and bookmarks, and student tokens stop working after deactivation or deletion.
- The combined gate now runs 27 frontend unit tests, eight desktop/mobile browser journeys, and 61 backend tests at 95.68% coverage.
