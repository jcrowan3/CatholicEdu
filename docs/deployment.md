# Deployment Guide

The repository's default Docker Compose configuration is for local development, not unattended internet hosting.

## Production requirements

At minimum, a deployment owner must provide:

- A unique `JWT_SECRET` generated from at least 32 cryptographically random bytes.
- TLS for every browser and API connection.
- Unique database credentials stored outside the repository.
- Explicit `CORS_ORIGINS` containing only deployed frontend origins.
- `DEBUG=false`, non-reloading application processes, health monitoring, and bounded logs.
- Database migrations, encrypted backups, recovery testing, and a retention schedule.
- Dependency and container-image updates.
- An approved student-data, parent/guardian, safe-environment, and incident-response process.

Generate a suitable JWT secret with:

```bash
openssl rand -hex 32
```

## Build verification

Before deployment:

```bash
./scripts/check.sh
docker compose build
```

Run migrations as an explicit release step:

```bash
cd backend
uv run alembic upgrade head
```

Do not expose PostgreSQL's port publicly. Run the API behind a reverse proxy or managed ingress, and restrict API documentation if local policy requires it.

## Frontend configuration

Set `VITE_API_URL` at build time when the API is not available at `http://localhost:8000/api/v1`. Because Vite embeds this value in the built assets, changing it requires rebuilding the frontend.

## Not a compliance certification

The project does not claim FERPA, COPPA, diocesan, or school-policy compliance. Applicability depends on who operates the system, what data is collected, the users' ages, local policy, contracts, and jurisdiction. Obtain appropriate organizational and legal review before hosting real student information.
