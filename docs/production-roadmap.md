# Production Hosting Roadmap

The repository is suitable for local evaluation and qualified curriculum review. The following capabilities are intentionally required before an operator treats the online mode as a production student-information service.

## Identity and abuse controls

Implemented baseline controls include a 12-character registration minimum, globally unique login email, configurable failed-login lockout, process-local throttling for public authentication and join-code routes, and account-wide server-checked token revocation on logout.

Before multi-instance production hosting:

- Put registration, sign-in, token refresh, join-code, import, and export limits in a shared edge or datastore-backed limiter appropriate to the deployment topology.
- Add a protected account recovery flow, administrator identity lifecycle, and periodic access review.
- Consider per-device refresh sessions when operators need selective device revocation instead of the current account-wide logout.

## Privacy operations

Implemented baseline controls include configurable inactive-student and audit-event retention, a dry-run-first operator command, versioned student export, confirmation-gated associated-record deletion, documented external-backup expiry, and privacy-minimized audit events.

Before production use, the operator must approve jurisdiction-appropriate periods, request-identity verification, legal holds, job scheduling/monitoring, encrypted external storage expiry, sensitive-field minimization, and role-by-role field/export access.

## Accountability and operations

- Forward privacy-minimized application audit events and infrastructure security telemetry into monitored, access-controlled, bounded storage appropriate to the host.
- Add centralized monitoring, bounded logs, encrypted backups, restoration exercises, incident response, and dependency/container scanning for the chosen host.
- Complete qualified privacy, accessibility, safeguarding, and curriculum reviews for the actual organization and jurisdiction.

These are deployment and product requirements, not claims of current certification. See [Deployment](deployment.md) and [Privacy and Safeguarding](privacy-and-safeguarding.md).
