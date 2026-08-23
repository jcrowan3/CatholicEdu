import assert from "node:assert/strict";
import test from "node:test";

import {
  getDefaultSessions,
  getCurriculumMetadata,
  getPillarColors,
  loadDefaultSessions,
} from "./gradeLoader.js";

test("loads one grade on demand and caches it for synchronous use", async () => {
  assert.deepEqual(getDefaultSessions(1), []);

  const sessions = await loadDefaultSessions(1);

  assert.equal(sessions.length, 30);
  assert.equal(getDefaultSessions(1), sessions);
  assert.equal(sessions[0].week, 1);
  assert.deepEqual(getCurriculumMetadata(1), {
    grade: 1,
    schemaVersion: 1,
    sessionCount: 30,
  });
});

test("returns grade-specific colors without loading curriculum content", () => {
  assert.equal(getPillarColors(8).Creed, "#3B5BA5");
  assert.equal(getPillarColors(1).Creed, "#4A90D9");
  assert.deepEqual(getPillarColors(9), {});
});
