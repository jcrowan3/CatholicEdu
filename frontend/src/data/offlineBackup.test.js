import assert from "node:assert/strict";
import test from "node:test";

import {
  createOfflineBackup,
  parseOfflineBackup,
  restoreOfflineBackup,
} from "./offlineBackup.js";

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    get length() { return data.size; },
    key(index) { return [...data.keys()][index] ?? null; },
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
    removeItem(key) { data.delete(key); },
  };
}

test("offline backup round-trips toolkit data without authentication tokens", () => {
  const source = memoryStorage({
    catechist_program_g1_v1: "St. Raphael",
    catechist_users_g1_cdefault_v1: '[{"id":"demo"}]',
    catechist_access_token: "do-not-export",
    unrelated: "leave-alone",
  });
  const backup = createOfflineBackup(source, () => new Date("2026-08-23T12:00:00Z"));
  const target = memoryStorage({
    catechist_program_g2_v1: "replace-me",
    catechist_access_token: "keep-token",
    unrelated: "keep-value",
  });

  assert.equal(backup.schemaVersion, 1);
  assert.deepEqual(backup.entries.map(({ key }) => key), [
    "catechist_program_g1_v1",
    "catechist_users_g1_cdefault_v1",
  ]);
  assert.deepEqual(restoreOfflineBackup(target, JSON.stringify(backup)), {
    restored: 2,
    schemaVersion: 1,
  });
  assert.equal(target.getItem("catechist_program_g2_v1"), null);
  assert.equal(target.getItem("catechist_program_g1_v1"), "St. Raphael");
  assert.equal(target.getItem("catechist_access_token"), "keep-token");
  assert.equal(target.getItem("unrelated"), "keep-value");
});

test("backup parser migrates the legacy version-zero map", () => {
  const migrated = parseOfflineBackup({
    format: "catechist-toolkit-offline-backup",
    schemaVersion: 0,
    exportedAt: "2026-08-22T00:00:00Z",
    data: { catechist_pin_g1_v1: "2468" },
  });
  assert.equal(migrated.schemaVersion, 1);
  assert.deepEqual(migrated.entries, [{ key: "catechist_pin_g1_v1", value: "2468" }]);
});

test("restore rejects disallowed and duplicate keys before changing storage", () => {
  const storage = memoryStorage({ catechist_program_g1_v1: "Existing" });
  const invalid = {
    format: "catechist-toolkit-offline-backup",
    schemaVersion: 1,
    entries: [{ key: "catechist_access_token", value: "stolen" }],
  };

  assert.throws(() => restoreOfflineBackup(storage, invalid), /disallowed storage key/);
  assert.equal(storage.getItem("catechist_program_g1_v1"), "Existing");
  assert.equal(storage.getItem("catechist_access_token"), null);

  const duplicate = {
    format: "catechist-toolkit-offline-backup",
    schemaVersion: 1,
    entries: [
      { key: "catechist_program_g1_v1", value: "First" },
      { key: "catechist_program_g1_v1", value: "Second" },
    ],
  };
  assert.throws(() => restoreOfflineBackup(storage, duplicate), /duplicate storage key/);
  assert.equal(storage.getItem("catechist_program_g1_v1"), "Existing");
});
