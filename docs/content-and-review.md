# Content, Sources, and Review

## Source posture

Curriculum is stored as reviewable source code under `frontend/src/data/`. Scripture quotations identify the Catholic Public Domain Version (CPDV); the [translator's site](https://sacredbible.org/studybible/version.htm) states that the translation is in the public domain. Catechism references cite paragraph numbers without reproducing the full Catechism.

## Review layers

1. `npm run audit:content` checks that tracked content surfaces have provenance records.
2. Deterministic review rules catch selected missing citations and statements that could weaken core doctrine.
3. Tests keep frontend and backend review checklists aligned.
4. Human reviewers assess age appropriateness, accuracy, pedagogy, context, local policy, and pastoral suitability.

Automated checks are deliberately limited. Passing them does not constitute an imprimatur, nihil obstat, diocesan approval, or endorsement by any Church authority.

## Editing checklist

- State the grade, lesson objective, and intended learner outcome.
- Cite Scripture references and relevant Catechism paragraphs specifically.
- Verify quotations against the identified source edition.
- Avoid fabricated quotations or implying that paraphrases are direct quotations.
- Update `contentProvenance.js` when a tracked surface is added or materially changed.
- Request review from a qualified human before describing content as ready for parish use.
