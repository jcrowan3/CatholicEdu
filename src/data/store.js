import { getDefaultSessions, getPillarColors } from "./gradeLoader";

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

/* ─── One-time migration from old unscoped keys → grade-scoped → class-scoped ─── */

export function migrateOldKeys() {
  const MIGRATED_KEY = "catechist_migrated_v2";
  if (localStorage.getItem(MIGRATED_KEY)) return;

  const migrate = (oldKey, newKey) => {
    const val = localStorage.getItem(oldKey);
    if (val && !localStorage.getItem(newKey)) {
      localStorage.setItem(newKey, val);
    }
  };

  // Phase 1: old unscoped → grade-scoped (from v1 migration)
  migrate("catechist_sessions_v1", sessionsKey(3));
  migrate("catechist_users_v1", `catechist_users_g3_v1`);
  migrate("catechist_pin_v1", pinKey(3));
  migrate("catechist_program_v1", programKey(3));

  try {
    const usersRaw = localStorage.getItem("catechist_users_v1");
    if (usersRaw) {
      const users = JSON.parse(usersRaw);
      for (const u of users) {
        migrate(`catechist_progress_${u.id}`, `catechist_progress_g3_${u.id}`);
      }
    }
    migrate("catechist_progress_v1", `catechist_progress_g3_v1`);
  } catch {
    /* ignore */
  }

  // Phase 2: grade-scoped users → class-scoped (wrap into "Default Class")
  for (const g of [2, 3, 4, 5, 6, 7, 8]) {
    const oldUsersKey = `catechist_users_g${g}_v1`;
    const classListKey = classesKey(g);

    // Only migrate if there are grade-scoped users and no classes yet
    if (localStorage.getItem(oldUsersKey) && !localStorage.getItem(classListKey)) {
      // Create Default Class
      const classes = [{ id: "default", name: "Default Class", createdAt: new Date().toISOString() }];
      localStorage.setItem(classListKey, JSON.stringify(classes));
      localStorage.setItem(activeClassKey(g), "default");

      // Move users to class-scoped key
      migrate(oldUsersKey, usersKey(g, "default"));

      // Move progress keys for each user
      try {
        const usersRaw = localStorage.getItem(oldUsersKey);
        if (usersRaw) {
          const users = JSON.parse(usersRaw);
          for (const u of users) {
            migrate(
              `catechist_progress_g${g}_${u.id}`,
              progressKey(g, "default", u.id)
            );
          }
        }
      } catch {
        /* ignore */
      }
    }
  }

  localStorage.setItem(MIGRATED_KEY, "1");
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

export function getSessions(grade) {
  try {
    const raw = localStorage.getItem(sessionsKey(grade));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version === 1) return parsed.sessions;
    }
  } catch {
    /* fall through */
  }
  return getDefaultSessions(grade);
}

export function saveSessions(grade, sessions) {
  localStorage.setItem(
    sessionsKey(grade),
    JSON.stringify({ version: 1, lastUpdated: new Date().toISOString(), sessions })
  );
}

export function resetSessionToDefault(grade, weekNum) {
  const sessions = getSessions(grade);
  const defaults = getDefaultSessions(grade);
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
