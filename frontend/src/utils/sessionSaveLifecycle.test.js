import assert from "node:assert/strict";
import test from "node:test";

import { createSessionSaveLifecycle } from "./sessionSaveLifecycle.js";

const passingReview = { passed: true, findings: [] };

test("rapid saves share one review and one remote write", async () => {
  const lifecycle = createSessionSaveLifecycle();
  let releaseReview;
  const reviewGate = new Promise((resolve) => { releaseReview = resolve; });
  const calls = { persist: 0, review: 0, upsert: 0 };
  const options = {
    draft: { session: { title: "Draft" }, sessions: [] },
    persistDraft: () => { calls.persist += 1; },
    review: async () => { calls.review += 1; await reviewGate; return passingReview; },
    upsert: async () => { calls.upsert += 1; },
  };

  const first = lifecycle.save(options);
  const second = lifecycle.save(options);
  assert.equal(first, second);
  assert.equal(lifecycle.isSaving, true);
  releaseReview();
  await Promise.all([first, second]);

  assert.deepEqual(calls, { persist: 1, review: 1, upsert: 1 });
  assert.equal(lifecycle.isSaving, false);
});

test("persists the draft before an unavailable backend fails and permits retry", async () => {
  const lifecycle = createSessionSaveLifecycle();
  const events = [];
  const options = {
    draft: { session: { title: "Retry me" }, sessions: [] },
    persistDraft: () => events.push("persist"),
    review: async () => { events.push("review"); throw new Error("offline"); },
    upsert: async () => events.push("upsert"),
  };

  await assert.rejects(lifecycle.save(options), /offline/);
  assert.deepEqual(events, ["persist", "review"]);
  assert.equal(lifecycle.isSaving, false);

  await assert.rejects(lifecycle.save(options), /offline/);
  assert.deepEqual(events, ["persist", "review", "persist", "review"]);
});

test("a failed doctrinal review never starts the remote write", async () => {
  const lifecycle = createSessionSaveLifecycle();
  let writes = 0;
  const finding = { code: "missing_ccc_reference", message: "Add a CCC reference." };
  const result = await lifecycle.save({
    draft: { session: {}, sessions: [] },
    persistDraft: () => {},
    review: async () => ({ passed: false, findings: [finding] }),
    upsert: async () => { writes += 1; },
  });

  assert.equal(result.status, "review-failed");
  assert.deepEqual(result.review.findings, [finding]);
  assert.equal(writes, 0);
});

test("reset supersedes an in-flight save and runs after it settles", async () => {
  const lifecycle = createSessionSaveLifecycle();
  let releaseReview;
  const reviewGate = new Promise((resolve) => { releaseReview = resolve; });
  const events = [];

  const save = lifecycle.save({
    draft: { session: { title: "Old draft" }, sessions: [] },
    persistDraft: () => events.push("persist"),
    review: async () => { await reviewGate; events.push("review"); return passingReview; },
    upsert: async () => events.push("upsert"),
  });
  const reset = lifecycle.reset(async () => events.push("reset"));

  assert.equal(lifecycle.isSaving, true);
  assert.equal(lifecycle.isResetting, true);
  releaseReview();

  assert.equal((await save).status, "superseded");
  await reset;
  assert.deepEqual(events, ["persist", "review", "reset"]);
  assert.equal(lifecycle.isResetting, false);
});

test("reset waits for an upsert already in progress before restoring defaults", async () => {
  const lifecycle = createSessionSaveLifecycle();
  let releaseUpsert;
  const upsertGate = new Promise((resolve) => { releaseUpsert = resolve; });
  const events = [];

  const save = lifecycle.save({
    draft: { session: {}, sessions: [] },
    persistDraft: () => {},
    review: async () => passingReview,
    upsert: async () => { events.push("upsert-start"); await upsertGate; events.push("upsert-end"); },
  });
  await Promise.resolve();
  const reset = lifecycle.reset(async () => events.push("reset"));
  releaseUpsert();

  assert.equal((await save).status, "superseded");
  await reset;
  assert.deepEqual(events, ["upsert-start", "upsert-end", "reset"]);
});
