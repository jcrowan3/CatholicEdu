import {
  getDefaultSessions,
  getPillarColors,
  loadDefaultSessions,
} from "./gradeLoader.js";

/* ─── Shared storage key builders ─── */

export function progressStorageKey(grade, classId, userId) {
  if (!grade) return null;
  if (classId && userId) return `catechist_progress_g${grade}_c${classId}_${userId}`;
  if (userId) return `catechist_progress_g${grade}_${userId}`;
  return `catechist_progress_g${grade}_v1`;
}

export function bookmarkStorageKey(grade, classId, userId) {
  if (!grade) return null;
  if (classId && userId) return `catechist_bookmarks_g${grade}_c${classId}_${userId}`;
  if (userId) return `catechist_bookmarks_g${grade}_${userId}`;
  return `catechist_bookmarks_g${grade}_v1`;
}

/* ─── Grade-scoped localStorage keys (sessions, PIN, program stay grade-level) ─── */

const sessionsKey = (grade) => `catechist_sessions_g${grade}_v1`;
const pinKey = (grade) => `catechist_pin_g${grade}_v1`;
const programKey = (grade) => `catechist_program_g${grade}_v1`;

/* ─── Class-scoped localStorage keys ─── */

const classesKey = (grade) => `catechist_classes_g${grade}_v1`;
const activeClassKey = (grade) => `catechist_activeclass_g${grade}_v1`;
const usersKey = (grade, classId) =>
  classId ? `catechist_users_g${grade}_c${classId}_v1` : `catechist_users_g${grade}_v1`;
const progressKey = (grade, classId, userId) => {
  if (classId && userId) return `catechist_progress_g${grade}_c${classId}_${userId}`;
  if (userId) return `catechist_progress_g${grade}_${userId}`;
  return `catechist_progress_g${grade}_v1`;
};

/* ─── Versioned local-data migrations ─── */

export const LOCAL_DATA_SCHEMA_VERSION = 3;
const LOCAL_DATA_VERSION_KEY = "catechist_local_schema_version_v1";
const LEGACY_MIGRATED_KEY = "catechist_migrated_v2";

export function migrateOldKeys(storage = localStorage, now = () => new Date()) {
  const copyIfMissing = (oldKey, newKey) => {
    const value = storage.getItem(oldKey);
    if (value && !storage.getItem(newKey)) storage.setItem(newKey, value);
  };

  let version = Number(storage.getItem(LOCAL_DATA_VERSION_KEY));
  if (!Number.isInteger(version) || version < 0) {
    version = storage.getItem(LEGACY_MIGRATED_KEY) ? 2 : 0;
  }

  if (version < 1) {
    copyIfMissing("catechist_sessions_v1", sessionsKey(3));
    copyIfMissing("catechist_users_v1", "catechist_users_g3_v1");
    copyIfMissing("catechist_pin_v1", pinKey(3));
    copyIfMissing("catechist_program_v1", programKey(3));
    try {
      const users = JSON.parse(storage.getItem("catechist_users_v1") || "[]");
      for (const user of users) {
        copyIfMissing(`catechist_progress_${user.id}`, `catechist_progress_g3_${user.id}`);
      }
      copyIfMissing("catechist_progress_v1", "catechist_progress_g3_v1");
    } catch {
      /* Leave malformed legacy records untouched for manual recovery. */
    }
    version = 1;
  }

  if (version < 2) {
    for (const grade of [1, 2, 3, 4, 5, 6, 7, 8]) {
      const oldUsersKey = `catechist_users_g${grade}_v1`;
      if (!storage.getItem(oldUsersKey) || storage.getItem(classesKey(grade))) continue;

      storage.setItem(classesKey(grade), JSON.stringify([
        { id: "default", name: "Default Class", createdAt: now().toISOString() },
      ]));
      storage.setItem(activeClassKey(grade), "default");
      copyIfMissing(oldUsersKey, usersKey(grade, "default"));
      try {
        const users = JSON.parse(storage.getItem(oldUsersKey));
        for (const user of users) {
          copyIfMissing(
            `catechist_progress_g${grade}_${user.id}`,
            progressKey(grade, "default", user.id)
          );
        }
      } catch {
        /* Leave malformed legacy records untouched for manual recovery. */
      }
    }
    storage.setItem(LEGACY_MIGRATED_KEY, "1");
    version = 2;
  }

  if (version < 3) {
    for (const grade of [1, 2, 3, 4, 5, 6, 7, 8]) {
      const key = sessionsKey(grade);
      try {
        const value = JSON.parse(storage.getItem(key));
        if (Array.isArray(value)) {
          storage.setItem(key, JSON.stringify({
            version: 1,
            lastUpdated: now().toISOString(),
            sessions: value,
          }));
        }
      } catch {
        /* A malformed override is ignored by getStoredSessions. */
      }
    }
    version = 3;
  }

  storage.setItem(LOCAL_DATA_VERSION_KEY, String(version));
  return version;
}

/* ─── Class Management ─── */

export function getClasses(grade) {
  try {
    const raw = localStorage.getItem(classesKey(grade));
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return [];
}

function saveClasses(grade, classes) {
  localStorage.setItem(classesKey(grade), JSON.stringify(classes));
}

export function addClass(grade, name) {
  const classes = getClasses(grade);
  const cls = {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date().toISOString(),
  };
  classes.push(cls);
  saveClasses(grade, classes);
  return cls;
}

export function removeClass(grade, classId) {
  const classes = getClasses(grade).filter((c) => c.id !== classId);
  saveClasses(grade, classes);
  // Clean up users and progress for removed class
  try {
    const users = getUsers(grade, classId);
    for (const u of users) {
      localStorage.removeItem(progressKey(grade, classId, u.id));
    }
    localStorage.removeItem(usersKey(grade, classId));
  } catch {
    /* ignore */
  }
  return classes;
}

export function getActiveClassId(grade) {
  return localStorage.getItem(activeClassKey(grade)) || null;
}

export function setActiveClassId(grade, classId) {
  localStorage.setItem(activeClassKey(grade), classId);
}

/**
 * Ensure at least one class exists for the grade.
 * Called after setup completes. Returns the active classId.
 */
export function ensureDefaultClass(grade) {
  let classes = getClasses(grade);
  if (classes.length === 0) {
    const cls = addClass(grade, "Default Class");
    setActiveClassId(grade, cls.id);
    return cls.id;
  }
  let activeId = getActiveClassId(grade);
  if (!activeId || !classes.find((c) => c.id === activeId)) {
    activeId = classes[0].id;
    setActiveClassId(grade, activeId);
  }
  return activeId;
}

/* ─── Session Data (grade-scoped, NOT class-scoped) ─── */

function getStoredSessions(grade) {
  try {
    const raw = localStorage.getItem(sessionsKey(grade));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version === 1) return parsed.sessions;
    }
  } catch {
    /* fall through */
  }
  return null;
}

export function getSessions(grade) {
  return getStoredSessions(grade) || getDefaultSessions(grade);
}

export async function loadSessions(grade) {
  return getStoredSessions(grade) || loadDefaultSessions(grade);
}

export function saveSessions(grade, sessions) {
  localStorage.setItem(
    sessionsKey(grade),
    JSON.stringify({ version: 1, lastUpdated: new Date().toISOString(), sessions })
  );
}

export async function resetSessionToDefault(grade, weekNum) {
  const sessions = await loadSessions(grade);
  const defaults = await loadDefaultSessions(grade);
  const defaultSession = defaults.find((s) => s.week === weekNum);
  if (!defaultSession) return sessions;
  const updated = sessions.map((s) => (s.week === weekNum ? defaultSession : s));
  saveSessions(grade, updated);
  return updated;
}

/* ─── User Management (class-scoped) ─── */

export function getUsers(grade, classId) {
  try {
    const raw = localStorage.getItem(usersKey(grade, classId));
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return [];
}

export function saveUsers(grade, classId, users) {
  localStorage.setItem(usersKey(grade, classId), JSON.stringify(users));
}

export function addUser(grade, classId, name, avatarEmoji) {
  const users = getUsers(grade, classId);
  const user = {
    id: crypto.randomUUID(),
    name,
    role: "student",
    createdAt: new Date().toISOString(),
    avatarEmoji,
  };
  users.push(user);
  saveUsers(grade, classId, users);
  return user;
}

export function updateUser(grade, classId, id, updates) {
  const users = getUsers(grade, classId);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return users;
  users[idx] = { ...users[idx], ...updates };
  saveUsers(grade, classId, users);
  return users;
}

export function removeUser(grade, classId, id) {
  const users = getUsers(grade, classId).filter((u) => u.id !== id);
  saveUsers(grade, classId, users);
  try {
    localStorage.removeItem(progressKey(grade, classId, id));
  } catch {
    /* ignore */
  }
  return users;
}

/* ─── Demo Seeding (class-scoped) ─── */

export function seedDemoStudent(grade, classId) {
  const users = getUsers(grade, classId);
  if (users.length === 0) {
    addUser(grade, classId, "Maria (Demo)", "😊");
  }
}

/* ─── Progress (class-scoped) ─── */

export function getUserProgress(grade, classId, userId) {
  try {
    const raw = localStorage.getItem(progressKey(grade, classId, userId));
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return { version: 1, userId, stars: 0, completed: {} };
}

export function getAllProgress(grade, classId, userIds) {
  return userIds.map((id) => ({ userId: id, ...getUserProgress(grade, classId, id) }));
}

/* ─── Catechist PIN (grade-scoped) ─── */

export function getPin(grade) {
  return localStorage.getItem(pinKey(grade));
}

export function setPin(grade, pin) {
  localStorage.setItem(pinKey(grade), pin);
}

/* ─── Program Info (grade-scoped) ─── */

export function getProgramName(grade) {
  return localStorage.getItem(programKey(grade)) || "";
}

export function setProgramName(grade, name) {
  localStorage.setItem(programKey(grade), name);
}

export { getPillarColors };
