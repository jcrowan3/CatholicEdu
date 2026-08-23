# Qualified Curriculum Review Records

Bundled curriculum remains `review-required` until an appropriately qualified human reviewer evaluates it. Automated citation, structure, and doctrinal guardrails help reviewers find issues, but they are not ecclesiastical approval.

## Review workflow

1. Copy [`REVIEW_TEMPLATE.md`](REVIEW_TEMPLATE.md) to `grade-N-YYYY-MM-DD.md`.
2. Record the reviewer's name or public professional role, relevant qualifications, scope, source editions, and date.
3. Review every session for doctrinal accuracy, Scripture fidelity, age appropriateness, pedagogy, pastoral context, accessibility, and local requirements.
4. Open tracked findings with grade and week references. Resolve them with citations and link the merged changes from the review record.
5. Record one disposition: `changes-required`, `approved-for-local-evaluation`, or another precisely defined outcome supplied by the reviewer.
6. Only after the reviewer accepts the resolved curriculum, update that grade in `CONTENT_PROVENANCE.gradeReviews` with status `reviewed`, reviewer, date, and the committed record path.

Reviewers should not publish personal contact information, student information, private correspondence, or claims of diocesan approval without authorization. An imprimatur, nihil obstat, diocesan approval, and a project-level curriculum review are distinct claims and must not be conflated.

## Current status

The machine-readable status is maintained in `frontend/src/data/contentProvenance.js` and checked by `npm run audit:content`. At present, Grades 1–8 all remain `review-required` because no qualified grade-level review record has been committed.
