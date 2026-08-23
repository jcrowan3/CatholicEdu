# Architecture

## System boundaries

The repository is a two-application monorepo:

- `frontend/`: React/Vite progressive web application.
- `backend/`: FastAPI application with async SQLAlchemy and Alembic.

The frontend can operate without the backend. That boundary is intentional: a parish can evaluate curriculum and run a shared-device classroom without creating accounts or operating a database.

## Frontend data flow

Curriculum modules are loaded on demand by `gradeLoader.js`. After a grade loads, `store.js` exposes synchronous access to cached defaults and browser-local overrides. Progress and bookmark hooks choose between API-backed operation and local storage while retaining the same component-facing interface.

Browser-local records use a versioned migration runner. Offline backups use a separately versioned, validated JSON envelope; restore validates every key before mutation and rolls back if a storage write fails. Authentication tokens and unrelated browser data are outside the backup boundary. Any change to a local key or schema must include migration and round-trip regression tests.

PDF code is dynamically imported so classrooms that do not export documents do not pay that initial download cost.

## Backend data flow

Routers validate HTTP input and delegate business rules to services. Services query SQLAlchemy models and must scope tenant-owned data using the authenticated `parish_id`. Schemas define external request and response contracts. Alembic owns persistent database migrations.

The backend stores curriculum overrides rather than the full curriculum. Packaged grade files remain the default source used by standards-coverage reporting.

## Authentication

Catechists authenticate with a globally unique email/password and receive short-lived access plus refresh tokens. A server-side account version is checked on authenticated requests so logout invalidates all previously issued catechist tokens. Repeated password failures temporarily lock the account, and public authentication routes have a process-local sliding-window limiter. Students enter a class join code and optionally a PIN. Authorization checks distinguish parish administrators, catechists, and students; authentication alone is not sufficient authorization.

## Extension points

- Add grades through a new curriculum module, grade metadata, loader entry, and provenance entry.
- Add activities by defining a stable activity identifier, UI component, star value, persistence behavior, and tests.
- Add reports through a schema, service method, router endpoint, and tenant-isolation tests.
- Add deployment targets without weakening the offline-only path.
