import assert from "node:assert/strict";
import test from "node:test";

import { reviewSessionLocally } from "./doctrinalReview.js";
import { validateCurriculum } from "./curriculumIntegrity.js";

const gradeModules = await Promise.all(
  [1, 2, 3, 4, 5, 6, 7, 8].map((grade) => import(`../data/grade${grade}.js`)),
);

test("every active grade has 30 structurally complete, playable sessions", () => {
  gradeModules.forEach(({ SESSIONS }, index) => {
    assert.deepEqual(validateCurriculum(SESSIONS), [], `Grade ${index + 1}`);
  });
});

test("every Grade 1 session passes deterministic citation and doctrine checks", () => {
  const failures = gradeModules[0].SESSIONS.flatMap((session) =>
    reviewSessionLocally(session).findings.map((finding) =>
      `Week ${session.week}: ${finding.code}`));

  assert.deepEqual(failures, []);
});

test("reports an unplaceable sorting card", () => {
  const [session] = structuredClone(gradeModules[0].SESSIONS);
  session.secondary = "sort";
  session.timeline = undefined;
  session.sort = {
    title: "Broken sort",
    instruction: "Place each card.",
    groups: ["Known", "Also known"],
    colors: { Known: "#fff", "Also known": "#000" },
    icons: { Known: "⭐", "Also known": "💛" },
    items: [
      { name: "One", icon: "1️⃣", group: "Known" },
      { name: "Two", icon: "2️⃣", group: "Missing" },
      { name: "Three", icon: "3️⃣", group: "Known" },
    ],
  };

  assert.match(validateCurriculum([session], { expectedCount: 1 }).join("\n"), /placeable/);
});
