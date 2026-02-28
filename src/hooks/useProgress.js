import { useState, useCallback, useEffect } from "react";

const STAR_VALUES = {
  discover: 2,
  sort: 3,
  timeline: 3,
  fillblank: 3,
  quiz: 5,
  prayer: 1,
};

function storageKey(grade, userId) {
  if (!grade) return null;
  return userId
    ? `catechist_progress_g${grade}_${userId}`
    : `catechist_progress_g${grade}_v1`;
}

function loadProgress(grade, userId) {
  try {
    const key = storageKey(grade, userId);
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

function saveProgress(grade, userId, data) {
  try {
    const key = storageKey(grade, userId);
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

export function useProgress(grade, userId = null) {
  const [state, setState] = useState(() => {
    if (!grade) return EMPTY;
    const saved = loadProgress(grade, userId);
    if (saved) {
      return { stars: saved.stars, completed: saved.completed };
    }
    return EMPTY;
  });

  useEffect(() => {
    if (!grade) return;
    saveProgress(grade, userId, {
      version: 1,
      userId,
      stars: state.stars,
      completed: state.completed,
    });
  }, [state, grade, userId]);

  const earn = useCallback((week, activity, amt) => {
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
  }, []);

  const isDone = useCallback(
    (week, activity) => !!state.completed[`${week}-${activity}`],
    [state.completed]
  );

  return { stars: state.stars, earn, isDone, STAR_VALUES };
}
