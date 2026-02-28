import { getDefaultSessions, getPillarColors } from "./gradeLoader";

/* ─── Grade-scoped localStorage keys ─── */

const sessionsKey = (grade) => `catechist_sessions_g${grade}_v1`;
const usersKey = (grade) => `catechist_users_g${grade}_v1`;
const pinKey = (grade) => `catechist_pin_g${grade}_v1`;
const programKey = (grade) => `catechist_program_g${grade}_v1`;
const progressKey = (grade, userId) =>
  userId ? `catechist_progress_g${grade}_${userId}` : `catechist_progress_g${grade}_v1`;

/* ─── One-time migration from old unscoped keys ─── */

export function migrateOldKeys() {
  const MIGRATED_KEY = "catechist_migrated_v1";
  if (localStorage.getItem(MIGRATED_KEY)) return;

  const migrate = (oldKey, newKey) => {
    const val = localStorage.getItem(oldKey);
    if (val && !localStorage.getItem(newKey)) {
      localStorage.setItem(newKey, val);
    }
  };

  migrate("catechist_sessions_v1", sessionsKey(3));
  migrate("catechist_users_v1", usersKey(3));
  migrate("catechist_pin_v1", pinKey(3));
  migrate("catechist_program_v1", programKey(3));

  // Migrate per-user progress keys
  try {
    const usersRaw = localStorage.getItem("catechist_users_v1");
    if (usersRaw) {
      const users = JSON.parse(usersRaw);
      for (const u of users) {
        migrate(`catechist_progress_${u.id}`, progressKey(3, u.id));
      }
    }
    // Also migrate the anonymous progress key
    migrate("catechist_progress_v1", progressKey(3, null));
  } catch {
    /* ignore */
  }

  localStorage.setItem(MIGRATED_KEY, "1");
}

/* ─── Session Data ─── */

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

/* ─── User Management ─── */

export function getUsers(grade) {
  try {
    const raw = localStorage.getItem(usersKey(grade));
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return [];
}

export function saveUsers(grade, users) {
  localStorage.setItem(usersKey(grade), JSON.stringify(users));
}

export function addUser(grade, name, avatarEmoji) {
  const users = getUsers(grade);
  const user = {
    id: crypto.randomUUID(),
    name,
    role: "student",
    createdAt: new Date().toISOString(),
    avatarEmoji,
  };
  users.push(user);
  saveUsers(grade, users);
  return user;
}

export function updateUser(grade, id, updates) {
  const users = getUsers(grade);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return users;
  users[idx] = { ...users[idx], ...updates };
  saveUsers(grade, users);
  return users;
}

export function removeUser(grade, id) {
  const users = getUsers(grade).filter((u) => u.id !== id);
  saveUsers(grade, users);
  try {
    localStorage.removeItem(progressKey(grade, id));
  } catch {
    /* ignore */
  }
  return users;
}

/* ─── Demo Seeding ─── */

export function seedDemoStudent(grade) {
  const users = getUsers(grade);
  if (users.length === 0) {
    addUser(grade, "Maria (Demo)", "😊");
  }
}

/* ─── Progress (multi-user) ─── */

export function getUserProgress(grade, userId) {
  try {
    const raw = localStorage.getItem(progressKey(grade, userId));
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return { version: 1, userId, stars: 0, completed: {} };
}

export function getAllProgress(grade, userIds) {
  return userIds.map((id) => ({ userId: id, ...getUserProgress(grade, id) }));
}

/* ─── Catechist PIN ─── */

export function getPin(grade) {
  return localStorage.getItem(pinKey(grade));
}

export function setPin(grade, pin) {
  localStorage.setItem(pinKey(grade), pin);
}

/* ─── Program Info ─── */

export function getProgramName(grade) {
  return localStorage.getItem(programKey(grade)) || "";
}

export function setProgramName(grade, name) {
  localStorage.setItem(programKey(grade), name);
}

export { getPillarColors };
