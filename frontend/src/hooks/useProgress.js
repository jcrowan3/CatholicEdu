import { useState, useCallback, useEffect, useRef } from "react";
import { api, hasToken } from "../api/client";
import { progressStorageKey as storageKey } from "../data/store";

const STAR_VALUES = {
  discover: 2,
  sort: 3,
  timeline: 3,
  fillblank: 3,
  quiz: 5,
  prayer: 1,
};

function loadProgress(grade, classId, userId) {
  try {
    const key = storageKey(grade, classId, userId);
    if (!key) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== 1) return null;
    return data;
  } catch {
    return null;
  }
}

function saveProgress(grade, classId, userId, data) {
  try {
    const key = storageKey(grade, classId, userId);
    if (!key) return;
    localStorage.setItem(
      key,
      JSON.stringify({ ...data, lastUpdated: new Date().toISOString() })
    );
  } catch {
    /* localStorage full or unavailable */
  }
}

const EMPTY = { stars: 0, completed: {} };

/**
 * Dual-mode progress hook.
 *
 * - **Online** (JWT present): loads from API, caches to localStorage,
 *   fire-and-forget API writes on earn().
 * - **Offline** (no JWT): localStorage-only, same as before.
 *
 * Same interface regardless of mode:
 *   { stars, earn, isDone, STAR_VALUES }
 */
export function useProgress(grade, classId = null, userId = null) {
  const [state, setState] = useState(() => {
    if (!grade) return EMPTY;
    const saved = loadProgress(grade, classId, userId);
    return saved ? { stars: saved.stars, completed: saved.completed } : EMPTY;
  });

  // Track whether this instance is connected to the API
  const isOnline = useRef(false);

  // Load progress: API first (when online), then localStorage fallback
  useEffect(() => {
    if (!grade) {
      setState(EMPTY);
      isOnline.current = false;
      return;
    }

    if (hasToken() && userId) {
      isOnline.current = true;

      // Show cached data instantly while API loads
      const cached = loadProgress(grade, classId, userId);
      if (cached) setState({ stars: cached.stars, completed: cached.completed });

      // Fetch authoritative data from API
      api
        .getProgress(userId, grade)
        .then((data) => {
          const completed = {};
          let stars = 0;
          for (const entry of data.entries) {
            const key = `${entry.week}-${entry.activity}`;
            completed[key] = {
              earnedAt: entry.earned_at,
              stars: entry.stars_earned,
            };
            stars += entry.stars_earned;
          }
          setState({ stars, completed });
          // Update localStorage cache
          saveProgress(grade, classId, userId, {
            version: 1,
            userId,
            stars,
            completed,
          });
        })
        .catch(() => {
          // API unreachable — keep using cached/localStorage data
          isOnline.current = false;
        });
    } else {
      // Offline mode
      isOnline.current = false;
      const saved = loadProgress(grade, classId, userId);
      setState(saved ? { stars: saved.stars, completed: saved.completed } : EMPTY);
    }
  }, [grade, classId, userId]);

  // Persist every state change to localStorage (both modes)
  useEffect(() => {
    if (!grade) return;
    saveProgress(grade, classId, userId, {
      version: 1,
      userId,
      stars: state.stars,
      completed: state.completed,
    });
  }, [state, grade, classId, userId]);

  const earn = useCallback(
    (week, activity, amt) => {
      const key = `${week}-${activity}`;
      setState((prev) => {
        if (prev.completed[key]) return prev;
        return {
          stars: prev.stars + amt,
          completed: {
            ...prev.completed,
            [key]: { earnedAt: new Date().toISOString(), stars: amt },
          },
        };
      });

      // Fire-and-forget API write when online
      if (isOnline.current && userId && grade) {
        api.recordProgress(userId, grade, week, activity, amt).catch(() => {});
      }
    },
    [grade, userId]
  );

  const isDone = useCallback(
    (week, activity) => !!state.completed[`${week}-${activity}`],
    [state.completed]
  );

  return { stars: state.stars, earn, isDone, STAR_VALUES };
}
