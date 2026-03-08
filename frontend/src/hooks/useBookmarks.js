import { useState, useCallback, useEffect, useRef } from "react";
import { api, hasToken } from "../api/client";

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
 * Dual-mode bookmarks hook.
 *
 * - **Online** (JWT present): loads from API, caches to localStorage,
 *   fire-and-forget API writes on toggle.
 * - **Offline** (no JWT): localStorage-only, same as before.
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

  const isOnline = useRef(false);
  // Map local bookmark key → backend bookmark UUID (needed for deletes)
  const backendIds = useRef({});

  // Load bookmarks: API first when online, localStorage fallback
  useEffect(() => {
    if (!grade) {
      setState(EMPTY);
      isOnline.current = false;
      return;
    }

    if (hasToken() && userId) {
      isOnline.current = true;

      // Show cached data while API loads
      const cached = loadBookmarks(grade, classId, userId);
      if (cached) setState({ bookmarks: cached.bookmarks });

      // Fetch from API
      api
        .getBookmarks(userId, grade)
        .then((apiBookmarks) => {
          const bookmarks = {};
          const ids = {};
          for (const b of apiBookmarks) {
            const key = `${b.week}-discover-${b.discover_index}`;
            bookmarks[key] = {
              savedAt: b.saved_at,
              week: b.week,
              name: b.item_name,
              desc: b.item_desc || "",
              icon: b.item_icon || "",
              pillar: b.pillar || "",
            };
            ids[key] = b.id;
          }
          setState({ bookmarks });
          backendIds.current = ids;
          saveBookmarks(grade, classId, userId, {
            version: 1,
            userId,
            bookmarks,
          });
        })
        .catch(() => {
          isOnline.current = false;
        });
    } else {
      isOnline.current = false;
      const saved = loadBookmarks(grade, classId, userId);
      setState(saved ? { bookmarks: saved.bookmarks } : EMPTY);
    }
  }, [grade, classId, userId]);

  // Persist every state change to localStorage
  useEffect(() => {
    if (!grade) return;
    saveBookmarks(grade, classId, userId, {
      version: 1,
      userId,
      bookmarks: state.bookmarks,
    });
  }, [state, grade, classId, userId]);

  const toggleBookmark = useCallback(
    (week, index, meta) => {
      const key = `${week}-discover-${index}`;
      setState((prev) => {
        const next = { ...prev.bookmarks };
        if (next[key]) {
          // Remove bookmark
          delete next[key];
          if (isOnline.current && userId && backendIds.current[key]) {
            api
              .deleteBookmark(userId, backendIds.current[key])
              .catch(() => {});
            delete backendIds.current[key];
          }
        } else {
          // Add bookmark
          next[key] = {
            savedAt: new Date().toISOString(),
            week,
            name: meta.name,
            desc: meta.desc,
            icon: meta.icon,
            pillar: meta.pillar,
          };
          if (isOnline.current && userId && grade) {
            api
              .createBookmark(userId, {
                grade,
                week,
                discover_index: index,
                item_name: meta.name,
                item_desc: meta.desc,
                item_icon: meta.icon,
                pillar: meta.pillar,
              })
              .then((created) => {
                backendIds.current[key] = created.id;
              })
              .catch(() => {});
          }
        }
        return { bookmarks: next };
      });
    },
    [grade, userId]
  );

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
