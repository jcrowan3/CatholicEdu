import { useState, useCallback, useEffect } from "react";

function storageKey(grade, classId, userId) {
  if (!grade) return null;
  if (classId && userId)
    return `catechist_bookmarks_g${grade}_c${classId}_${userId}`;
  if (userId) return `catechist_bookmarks_g${grade}_${userId}`;
  return `catechist_bookmarks_g${grade}_v1`;
}

function loadBookmarks(grade, classId, userId) {
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

function saveBookmarks(grade, classId, userId, data) {
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

const EMPTY = { bookmarks: {} };

/**
 * Hook for managing topic bookmarks.
 * Mirrors the useProgress pattern: localStorage-backed, scoped to grade/class/user.
 *
 * Bookmark key format: `${week}-discover-${index}`
 * Each bookmark stores: { savedAt, week, name, desc, icon, pillar }
 */
export function useBookmarks(grade, classId = null, userId = null) {
  const [state, setState] = useState(() => {
    if (!grade) return EMPTY;
    const saved = loadBookmarks(grade, classId, userId);
    return saved ? { bookmarks: saved.bookmarks } : EMPTY;
  });

  // Persist on change
  useEffect(() => {
    if (!grade) return;
    saveBookmarks(grade, classId, userId, {
      version: 1,
      userId,
      bookmarks: state.bookmarks,
    });
  }, [state, grade, classId, userId]);

  // Reload when identity changes
  useEffect(() => {
    if (!grade) {
      setState(EMPTY);
      return;
    }
    const saved = loadBookmarks(grade, classId, userId);
    setState(saved ? { bookmarks: saved.bookmarks } : EMPTY);
  }, [grade, classId, userId]);

  const toggleBookmark = useCallback((week, index, meta) => {
    const key = `${week}-discover-${index}`;
    setState((prev) => {
      const next = { ...prev.bookmarks };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = {
          savedAt: new Date().toISOString(),
          week,
          name: meta.name,
          desc: meta.desc,
          icon: meta.icon,
          pillar: meta.pillar,
        };
      }
      return { bookmarks: next };
    });
  }, []);

  const isBookmarked = useCallback(
    (week, index) => !!state.bookmarks[`${week}-discover-${index}`],
    [state.bookmarks]
  );

  const getAllBookmarks = useCallback(
    () =>
      Object.entries(state.bookmarks)
        .map(([key, data]) => ({ key, ...data }))
        .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt)),
    [state.bookmarks]
  );

  return { bookmarks: state.bookmarks, toggleBookmark, isBookmarked, getAllBookmarks };
}
