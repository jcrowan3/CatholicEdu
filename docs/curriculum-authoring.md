# Curriculum Authoring Guide

Every active grade exports the same versioned curriculum contract from `frontend/src/data/gradeN.js`:

```js
import { defineCurriculum } from "./curriculumSchema.js";

export const PILLAR_COLORS = {
  Creed: "#4A90D9",
  Sacraments: "#D4A843",
  Morality: "#6DB87B",
  Prayer: "#9B6DB8",
  Review: "#C0607A",
};

export const SESSIONS = [
  {
    week: 1,
    title: "Lesson title",
    pillar: "Creed",
    ccc: "355-357",
    verse: "An exact CPDV excerpt. — Genesis 1:27",
    discover: {
      title: "Discover: Lesson title",
      instruction: "Tap each card to learn.",
      items: [
        { icon: "✨", name: "Concept", desc: "Age-appropriate explanation (CCC 355)." },
        { icon: "💛", name: "Concept", desc: "A second explanation." },
        { icon: "🤝", name: "Concept", desc: "A third explanation." },
      ],
    },
    secondary: "fillblank",
    fillblank: {
      title: "Practice",
      instruction: "Choose the missing word.",
      sentences: [
        { text: "People are made in God's ___.", answer: "image", options: ["image", "house", "garden", "book"] },
        { text: "Every person has ___.", answer: "dignity", options: ["dignity", "fame", "wealth", "power"] },
        { text: "God calls us to ___.", answer: "love", options: ["love", "hide", "boast", "win"] },
      ],
    },
    quiz: {
      questions: [/* exactly five questions with four `opts` and a valid `correct` index */],
      bonus: { q: "Bonus question", opts: ["A", "B", "C", "D"], correct: 0, reward: "Faith Explorer!" },
    },
    prayer: {
      title: "Closing Prayer",
      lines: [
        { s: "L", t: "Leader line." },
        { s: "A", t: "Assembly response." },
      ],
    },
  },
  // Continue through week 30.
];

export const CURRICULUM = defineCurriculum(1, SESSIONS);
```

The secondary activity must be exactly one of `sort`, `timeline`, or `fillblank`, and the matching object must be the only secondary activity on that session. Sorting cards must target declared groups; timeline orders must run consecutively from 1; fill-in answers must appear among their options.

## Required checks

```bash
cd frontend
npm run audit:curriculum
npm test
npm run audit:content
```

`npm run audit:curriculum -- --json` provides a machine-readable grade summary. For a grade recorded as CPDV-source-verified, run the online verification against the translator's public source:

```bash
npm run verify:scripture -- --grade=8
```

Online source matching establishes textual correspondence to CPDV; it is not a theological, pedagogical, or qualified human review. Follow the [qualified curriculum review workflow](curriculum-review/README.md) before changing a grade's review status.
