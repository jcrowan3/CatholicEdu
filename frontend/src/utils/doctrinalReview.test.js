import assert from "node:assert/strict";
import test from "node:test";

import { reviewSessionLocally } from "./doctrinalReview.js";

test("returns the same concrete checklist used by the API", () => {
  const result = reviewSessionLocally({
    title: "A changed lesson",
    verse: "God loved the world very much.",
    discover: { items: [{ desc: "Jesus was only a teacher." }] },
  });

  assert.equal(result.passed, false);
  assert.deepEqual(result.findings.map(({ code }) => code), [
    "missing_ccc_reference",
    "unsupported_scripture_paraphrase",
    "weakened_doctrine",
  ]);
  assert.ok(result.findings.every(({ message }) => message));
});

test("passes a session with supported references and doctrine", () => {
  assert.deepEqual(reviewSessionLocally({
    title: "The Incarnation",
    verse: "The Word was made flesh. — John 1:14",
    discover: { items: [{ desc: "Jesus is true God and true man (CCC 464)." }] },
  }), { passed: true, findings: [] });
});

test("reviews nested activity content", () => {
  const result = reviewSessionLocally({
    ccc: "CCC 1374",
    verse: "John 6:51",
    quiz: { questions: [{ options: ["The Eucharist is merely a symbol"] }] },
  });

  assert.deepEqual(result.findings.map(({ code }) => code), ["weakened_doctrine"]);
});
