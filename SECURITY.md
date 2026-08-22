# Security Policy

## Supported versions

Security fixes are applied to the latest commit on `main`. The project does not currently maintain older release branches.

## Report a vulnerability

Do not open a public issue for suspected vulnerabilities or exposed student/family information. Use GitHub's **Report a vulnerability** option on the repository Security tab to create a private security advisory.

Include the affected component, reproduction steps, likely impact, and any suggested mitigation. Do not include real student data or working production credentials. Maintainers should acknowledge a complete report within seven days and coordinate disclosure after a fix is available.

## Deployment responsibility

The Docker Compose configuration and `.env.example` are development starting points. A deployment owner must provide a unique JWT secret, TLS, secure database credentials, backups, log controls, access review, dependency updates, and an approved privacy/retention process. See [docs/deployment.md](docs/deployment.md).
