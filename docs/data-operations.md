# Data Operations Runbook

This runbook describes the controls supplied by the toolkit. The deployment owner remains responsible for approving retention periods, assigning operators, protecting exports and backups, and meeting applicable parish, diocesan, contractual, and legal requirements.

## Configure retention

The API reads these environment variables:

| Variable | Default | Applies to |
| --- | ---: | --- |
| `INACTIVE_STUDENT_RETENTION_DAYS` | 365 | Students after deactivation and their enrollments, progress, bookmarks, and student-authored audit events |
| `AUDIT_EVENT_RETENTION_DAYS` | 365 | Security and privacy audit events |
| `EXPORTED_BACKUP_RETENTION_DAYS` | 30 | Operator policy for downloaded exports and backups; external files cannot be deleted by the API |

Choose values through an approved records schedule. Do not shorten a legal hold or incident-preservation requirement.

## Preview and run retention

Run database migrations first. From `backend/`, preview expired record counts without changing data:

```bash
uv run python -m catechist_api.maintenance.retention
```

Review the JSON counts, confirm an encrypted database backup and restore test are current, then execute:

```bash
uv run python -m catechist_api.maintenance.retention --execute
```

The execute command permanently deletes expired inactive students and old audit events in one transaction and records a privacy-minimized system event for each retained deletion. Schedule it through the deployment's authenticated job runner; never expose it as a public web command.

## Student export and deletion

Parish administrators can use **Manage Students → Export data** to download a versioned JSON subject-data export. It includes the student profile, enrollments, progress, and bookmarks. It reports whether a PIN exists but never exports the PIN itself. The server records the export count and a hashed student reference, not the exported content.

Normal **Deactivate** removes a learner from active rosters while retaining records until the configured schedule applies. **Delete permanently** requires the exact phrase `DELETE <student UUID>` and removes the student plus enrollments, progress, bookmarks, and student-authored audit events. The resulting audit event retains only a hashed subject reference and deletion counts. Export first when policy requires providing or preserving a copy.

## Audit review

Parish administrators can retrieve up to 500 recent events from:

```text
GET /api/v1/parish/audit-events?limit=100
```

Events cover registration, successful and failed known-account login, lockout, session revocation, roster import, family-communication export, student changes, subject-data export, deactivation, permanent deletion, and retention deletion. Metadata is limited to action names, field names, internal class identifiers, counts, and hashed student references. Unknown-email attempts and edge-rate-limit telemetry have no safe tenant association and belong in bounded infrastructure security logs.

## External files and verification

- Store exports and offline backups only in approved encrypted storage with access logging where available.
- Delete external copies when `EXPORTED_BACKUP_RETENTION_DAYS` expires; the API cannot reach files downloaded to browsers or operator storage.
- After permanent deletion, verify the API returns `404` for the student export and review the corresponding audit event.
- Test preview and execution against a non-production copy before changing a retention schedule.
- Document legal holds, failed jobs, restores, and manual exceptions in the operator's incident or records system.
