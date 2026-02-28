import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "catechist_progress_v1";

const STAR_VALUES = {
  discover: 2,
  sort: 3,
  timeline: 3,
  fillblank: 3,
  quiz: 5,
  prayer: 1,
};

function loadProgress(userId) {
  try {
    const key = userId ? `catechist_progress_${userId}` : STORAGE_KEY;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== 1) return null;
    return data;
  } catch {
    return null;
  }
}

function saveProgress(userId, data) {
  try {
    const key = userId ? `catechist_progress_${userId}` : STORAGE_KEY;
    localStorage.setItem(
      key,
      JSON.stringify({ ...data, lastUpdated: new Date().toISOString() })
    );
  } catch {
    /* localStorage full or unavailable */
  }
}

export function useProgress(userId = null) {
  const [state, setState] = useState(() => {
    const saved = loadProgress(userId);
    if (saved) {
      return { stars: saved.stars, completed: saved.completed };
    }
    return { stars: 0, completed: {} };
  });

  useEffect(() => {
    saveProgress(userId, {
      version: 1,
      userId,
      stars: state.stars,
      completed: state.completed,
    });
  }, [state, userId]);

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
