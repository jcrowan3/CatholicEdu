import assert from "node:assert/strict";
import test from "node:test";

import {
  getSessionActivities,
  mapApiStudent,
  mapProgressGrid,
} from "./progressData.js";

test("normalizes API students for dashboard components", () => {
  assert.deepEqual(
    mapApiStudent({ id: "student-1", display_name: "Ava", avatar_emoji: "🌻" }),
    {
      id: "student-1",
      name: "Ava",
      avatarEmoji: "🌻",
      parentEmail: "",
      pickupContactNotes: "",
      mediaPermissionGranted: false,
      allergyPrivacyFlags: "",
      weeklyDigestPermission: false,
      role: "student",
    }
  );
});

test("flattens the API progress grid into activity completion keys", () => {
  const progress = mapProgressGrid({
    students: [
      {
        student_id: "student-1",
        total_stars: 7,
        week_progress: { 1: { discover: 2, quiz: 5 } },
      },
    ],
  });

  assert.deepEqual(progress, [
    {
      userId: "student-1",
      stars: 7,
      completed: {
        "1-discover": { stars: 2 },
        "1-quiz": { stars: 5 },
      },
    },
  ]);
});

test("derives the activities that actually exist in a session", () => {
  assert.deepEqual(getSessionActivities({ sort: {}, fillblank: {} }), [
    "discover",
    "quiz",
    "prayer",
    "sort",
    "fillblank",
  ]);
});
