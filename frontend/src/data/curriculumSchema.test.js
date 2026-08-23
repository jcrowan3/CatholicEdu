import assert from "node:assert/strict";
import test from "node:test";

import { CURRICULUM_SCHEMA_VERSION, defineCurriculum } from "./curriculumSchema.js";

test("defines a versioned curriculum without changing session objects", () => {
  const sessions = [{ week: 1, title: "Example" }];
  const curriculum = defineCurriculum(4, sessions);

  assert.deepEqual(curriculum, {
    schemaVersion: CURRICULUM_SCHEMA_VERSION,
    grade: 4,
    sessionCount: 1,
    sessions,
  });
  assert.equal(curriculum.sessions[0], sessions[0]);
  assert.equal(Object.isFrozen(curriculum), true);
});

test("rejects invalid grade metadata", () => {
  assert.throws(() => defineCurriculum(0, []), /1 through 8/);
  assert.throws(() => defineCurriculum(1, null), /must be an array/);
});
