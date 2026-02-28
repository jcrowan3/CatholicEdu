import { SESSIONS as DEFAULT_SESSIONS, PILLAR_COLORS } from "./grade3";

const SESSIONS_KEY = "catechist_sessions_v1";
const USERS_KEY = "catechist_users_v1";
const PIN_KEY = "catechist_pin_v1";
const PROGRAM_KEY = "catechist_program_v1";

/* ─── Session Data ─── */

export function getSessions() {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version === 1) return parsed.sessions;
    }
  } catch {
    /* fall through */
  }
  return DEFAULT_SESSIONS;
}

export function saveSessions(sessions) {
  localStorage.setItem(
    SESSIONS_KEY,
    JSON.stringify({ version: 1, lastUpdated: new Date().toISOString(), sessions })
  );
}

export function resetSessionToDefault(weekNum) {
  const sessions = getSessions();
  const defaultSession = DEFAULT_SESSIONS.find((s) => s.week === weekNum);
  if (!defaultSession) return sessions;
  const updated = sessions.map((s) => (s.week === weekNum ? defaultSession : s));
  saveSessions(updated);
  return updated;
}

/* ─── User Management ─── */

export function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function addUser(name, avatarEmoji) {
  const users = getUsers();
  const user = {
    id: crypto.randomUUID(),
    name,
    role: "student",
    createdAt: new Date().toISOString(),
    avatarEmoji,
  };
  users.push(user);
  saveUsers(users);
  return user;
}

export function updateUser(id, updates) {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return users;
  users[idx] = { ...users[idx], ...updates };
  saveUsers(users);
  return users;
}

export function removeUser(id) {
  const users = getUsers().filter((u) => u.id !== id);
  saveUsers(users);
  // Clean up progress data
  try {
    localStorage.removeItem(`catechist_progress_${id}`);
  } catch {
    /* ignore */
  }
  return users;
}

/* ─── Progress (multi-user) ─── */

export function getUserProgress(userId) {
  try {
    const key = userId ? `catechist_progress_${userId}` : "catechist_progress_v1";
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through */
  }
  return { version: 1, userId, stars: 0, completed: {} };
}

export function getAllProgress(userIds) {
  return userIds.map((id) => ({ userId: id, ...getUserProgress(id) }));
}

/* ─── Catechist PIN ─── */

export function getPin() {
  return localStorage.getItem(PIN_KEY);
}

export function setPin(pin) {
  localStorage.setItem(PIN_KEY, pin);
}

/* ─── Program Info ─── */

export function getProgramName() {
  return localStorage.getItem(PROGRAM_KEY) || "";
}

export function setProgramName(name) {
  localStorage.setItem(PROGRAM_KEY, name);
}

export { PILLAR_COLORS, DEFAULT_SESSIONS };
