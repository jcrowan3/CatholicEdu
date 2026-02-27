import { useState, useCallback } from "react";

const STAR_VALUES = {
  discover: 2,
  sort: 3,
  timeline: 3,
  fillblank: 3,
  quiz: 5,
  prayer: 1,
};

export function useProgress() {
  const [stars, setStars] = useState(0);
  const [done, setDone] = useState(new Set());

  const earn = useCallback((week, activity, amt) => {
    const key = `${week}-${activity}`;
    setDone((prev) => {
      if (prev.has(key)) return prev;
      setStars((s) => s + amt);
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const isDone = useCallback(
    (week, activity) => done.has(`${week}-${activity}`),
    [done]
  );

  return { stars, earn, isDone, STAR_VALUES };
}
