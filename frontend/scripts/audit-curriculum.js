import process from "node:process";

import { GRADES } from "../src/data/grades.js";
import { reviewSessionLocally } from "../src/utils/doctrinalReview.js";
import { validateCurriculum } from "../src/utils/curriculumIntegrity.js";

const rows = [];
const failures = [];

for (const { grade, status } of GRADES.filter(({ status }) => status === "active")) {
  const { CURRICULUM, SESSIONS } = await import(`../src/data/grade${grade}.js`);
  const structure = validateCurriculum(SESSIONS);
  const review = SESSIONS.flatMap((session) =>
    reviewSessionLocally(session).findings.map(({ code }) => `Week ${session.week}: ${code}`));
  const schemaValid = CURRICULUM?.schemaVersion === 1
    && CURRICULUM.grade === grade
    && CURRICULUM.sessions === SESSIONS;

  rows.push({ grade, status, sessions: SESSIONS.length, schemaVersion: CURRICULUM?.schemaVersion, structure: structure.length, review: review.length });
  if (!schemaValid) failures.push(`Grade ${grade}: invalid curriculum schema metadata`);
  failures.push(...structure.map((message) => `Grade ${grade}: ${message}`));
  failures.push(...review.map((message) => `Grade ${grade}: ${message}`));
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ grades: rows, failures }, null, 2));
} else {
  console.table(rows);
  console.log(`curriculum audit: ${rows.reduce((sum, row) => sum + row.sessions, 0)} sessions, ${failures.length} findings`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
