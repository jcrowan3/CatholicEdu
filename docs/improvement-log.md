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
- Frontend focused tests increased from six to eleven.

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

## Release gate

Completed on 2026-08-22:

- The combined local quality gate passed: 11 frontend tests, 53 backend tests, 96.29% backend coverage, content provenance checks, lint, formatting, production build, and dependency audit.
- Docker images built and the Compose stack served the frontend and a healthy API; all containers were then stopped without deleting data.
- Gitleaks scanned all 51 commits and found no secrets.
- The production landing page scored 96 performance and 100 for accessibility, best practices, and SEO in Lighthouse.

Estimated public-release readiness: **93/100**, up from 48/100. The remaining work is maintainer-controlled publication, independent curriculum/privacy review, and production-specific infrastructure configuration. Publication and repository visibility changes remain explicit maintainer actions.
