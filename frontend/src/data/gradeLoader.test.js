import assert from "node:assert/strict";
import test from "node:test";

import {
  getDefaultSessions,
  getPillarColors,
  loadDefaultSessions,
} from "./gradeLoader.js";

test("loads one grade on demand and caches it for synchronous use", async () => {
  assert.deepEqual(getDefaultSessions(2), []);

  const sessions = await loadDefaultSessions(2);

  assert.equal(sessions.length, 30);
  assert.equal(getDefaultSessions(2), sessions);
  assert.equal(sessions[0].week, 1);
});

test("returns grade-specific colors without loading curriculum content", () => {
  assert.equal(getPillarColors(8).Creed, "#3B5BA5");
  assert.deepEqual(getPillarColors(1), {});
});
