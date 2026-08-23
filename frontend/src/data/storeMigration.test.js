import assert from "node:assert/strict";
import test from "node:test";

import { LOCAL_DATA_SCHEMA_VERSION, migrateOldKeys } from "./store.js";

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
  };
}

test("local-data migrations upgrade legacy users, progress, and session arrays", () => {
  const storage = memoryStorage({
    catechist_users_v1: '[{"id":"student-1","name":"Maria"}]',
    "catechist_progress_student-1": '{"stars":2}',
    catechist_sessions_g1_v1: '[{"week":1}]',
  });

  assert.equal(
    migrateOldKeys(storage, () => new Date("2026-08-23T12:00:00Z")),
    LOCAL_DATA_SCHEMA_VERSION
  );
  assert.equal(storage.getItem("catechist_local_schema_version_v1"), "3");
  assert.equal(storage.getItem("catechist_users_g3_cdefault_v1"), storage.getItem("catechist_users_v1"));
  assert.equal(storage.getItem("catechist_progress_g3_cdefault_student-1"), '{"stars":2}');
  assert.deepEqual(JSON.parse(storage.getItem("catechist_sessions_g1_v1")), {
    version: 1,
    lastUpdated: "2026-08-23T12:00:00.000Z",
    sessions: [{ week: 1 }],
  });
});

test("local-data migrations are idempotent", () => {
  const storage = memoryStorage({
    catechist_local_schema_version_v1: "3",
    catechist_sessions_g1_v1: '{"version":1,"sessions":[]}',
  });
  const before = storage.getItem("catechist_sessions_g1_v1");

  migrateOldKeys(storage);
  assert.equal(storage.getItem("catechist_sessions_g1_v1"), before);
});
