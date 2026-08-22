# Production Hosting Roadmap

The repository is suitable for local evaluation and qualified curriculum review. The following capabilities are intentionally required before an operator treats the online mode as a production student-information service.

## Identity and abuse controls

- Add rate limiting for registration, sign-in, token refresh, join-code, import, and export endpoints using a shared store appropriate to the deployment topology.
- Add server-side session or refresh-token revocation and a protected account recovery flow.
- Add configurable password policy, administrator identity lifecycle, and periodic access review.

## Privacy operations

- Define retention periods for student profiles, progress, family contacts, permissions, notes, activity logs, and backups.
- Implement verified hard-deletion and export workflows, including associated records and documented backup expiry.
- Minimize sensitive free-text fields and document who can see every field and export.

## Accountability and operations

- Record security-relevant audit events such as sign-in, failed authentication, roster import, export, permission changes, and deletion without logging secrets or unnecessary student data.
- Add centralized monitoring, bounded logs, encrypted backups, restoration exercises, incident response, and dependency/container scanning for the chosen host.
- Complete qualified privacy, accessibility, safeguarding, and curriculum reviews for the actual organization and jurisdiction.

These are deployment and product requirements, not claims of current certification. See [Deployment](deployment.md) and [Privacy and Safeguarding](privacy-and-safeguarding.md).
