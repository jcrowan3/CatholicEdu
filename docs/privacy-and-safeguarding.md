# Privacy and Safeguarding

## Data the toolkit can hold

Depending on mode and features used, the toolkit can store student display names, avatars, class membership, activity progress, bookmarks, parent email addresses, pickup notes, media permissions, allergy/privacy flags, and family communication preferences.

Offline mode stores data in the browser. Online mode stores data in PostgreSQL and caches some student state in the browser. Clearing a browser, losing a device, or sharing a browser profile can therefore affect availability or confidentiality.

## Parish deployment checklist

Before entering real student information, assign an accountable owner and decide:

1. Which fields are genuinely necessary.
2. Who may access catechist and administrative functions.
3. How parent/guardian notice and consent are handled.
4. How long each data category is retained and how deletion requests are fulfilled.
5. Whether allergy or pickup information belongs in this system at all.
6. How shared devices are locked, reset, and kept out of unsupervised use.
7. How incidents are reported and who coordinates with diocesan or civil authorities.

Use aliases or test fixtures for demonstrations. Never add real student or family information to issues, screenshots, logs, seed files, or source control.

## Safeguarding boundaries

The toolkit does not replace diocesan safe-environment programs, volunteer screening, classroom supervision, emergency records, or an approved student information system. Avoid free-form fields when a less sensitive structured value is sufficient.
