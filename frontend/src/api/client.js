/**
 * API client for the Catechist Toolkit backend.
 * Handles auth headers, token refresh, and JSON request/response.
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

/** Token storage keys */
const ACCESS_TOKEN_KEY = "catechist_access_token";
const REFRESH_TOKEN_KEY = "catechist_refresh_token";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setTokens(access, refresh) {
  if (access) localStorage.setItem(ACCESS_TOKEN_KEY, access);
  if (refresh) localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

/** Check if we have a valid-looking token (not expired). */
export function hasToken() {
  const token = getAccessToken();
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

/** Decode the JWT payload without validation. */
export function decodeToken(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

/** Core fetch wrapper with auth and auto-refresh. */
async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = { "Content-Type": "application/json", ...options.headers };

  const token = getAccessToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let res = await fetch(url, { ...options, headers });

  // If 401 and we have a refresh token, try to refresh
  if (res.status === 401 && getRefreshToken()) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      headers.Authorization = `Bearer ${getAccessToken()}`;
      res = await fetch(url, { ...options, headers });
    }
  }

  return res;
}

/** Try to refresh the access token using the refresh token. */
async function refreshAccessToken() {
  try {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: getRefreshToken() }),
    });
    if (!res.ok) {
      clearTokens();
      return false;
    }
    const data = await res.json();
    setTokens(data.access_token, data.refresh_token);
    return true;
  } catch {
    clearTokens();
    return false;
  }
}

// ─── Internal helpers to reduce boilerplate ───

/** Authenticated JSON request — throws on error, returns parsed JSON. */
async function json(path, options) {
  const res = await apiFetch(path, options);
  if (!res.ok) throw await parseError(res);
  return res.json();
}

/** Authenticated void request — throws on error, returns nothing. */
async function send(path, options) {
  const res = await apiFetch(path, options);
  if (!res.ok) throw await parseError(res);
}

/** Authenticated text request — throws on error, returns body and headers. */
async function text(path, options) {
  const res = await apiFetch(path, options);
  if (!res.ok) throw await parseError(res);
  return { body: await res.text(), headers: res.headers };
}

/** Unauthenticated POST for auth endpoints. */
async function authPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw await parseError(res);
  return res.json();
}

// ─── Public API methods ───

export const api = {
  // Auth
  async register(parishName, email, password, displayName) {
    const data = await authPost("/auth/register", {
      parish_name: parishName, email, password, display_name: displayName,
    });
    setTokens(data.access_token, data.refresh_token);
    return data;
  },

  async login(email, password) {
    const data = await authPost("/auth/login", { email, password });
    setTokens(data.access_token, data.refresh_token);
    return data;
  },

  logout: () => send("/auth/logout", { method: "POST" }),

  async getClassRoster(joinCode) {
    return authPost(`/auth/student/roster?join_code=${encodeURIComponent(joinCode)}`, undefined);
  },

  async studentLogin(joinCode, studentId, accessPin = null) {
    const data = await authPost("/auth/student/login", {
      join_code: joinCode, student_id: studentId, access_pin: accessPin,
    });
    setTokens(data.access_token, null); // Students don't get refresh tokens
    return data;
  },

  // Parish
  getParish: () => json("/parish"),
  updateParish: (name) => json("/parish", { method: "PATCH", body: JSON.stringify({ name }) }),

  // Grades
  getGrades: () => json("/grades"),
  createGrade: (grade, programName = null) =>
    json("/grades", { method: "POST", body: JSON.stringify({ grade, program_name: programName }) }),

  // Classes
  getClasses: (grade) => json(`/grades/${grade}/classes`),
  createClass: (grade, name) =>
    json(`/grades/${grade}/classes`, { method: "POST", body: JSON.stringify({ name }) }),
  deleteClass: (grade, classId) =>
    send(`/grades/${grade}/classes/${classId}`, { method: "DELETE" }),

  // Students
  getStudents: (grade, classId) => json(`/grades/${grade}/classes/${classId}/students`),
  createStudent: (grade, classId, displayName, avatarEmoji = "😊", accessPin = null, details = {}) =>
    json(`/grades/${grade}/classes/${classId}/students`, {
      method: "POST",
      body: JSON.stringify({
        display_name: displayName,
        avatar_emoji: avatarEmoji,
        access_pin: accessPin,
        ...details,
      }),
    }),
  exportFamilyCommunicationCsv: async (grade, classId) => {
    const result = await text(`/grades/${grade}/classes/${classId}/students/communication-export`);
    const disposition = result.headers.get("Content-Disposition") || "";
    const match = disposition.match(/filename="?([^"]+)"?/);
    return {
      csv: result.body,
      filename: match?.[1] || `grade-${grade}-communication.csv`,
    };
  },
  previewRosterImport: (grade, classId, rows) =>
    json(`/grades/${grade}/classes/${classId}/students/import/preview`, {
      method: "POST",
      body: JSON.stringify({ rows }),
    }),
  importRoster: (grade, classId, rows) =>
    json(`/grades/${grade}/classes/${classId}/students/import`, {
      method: "POST",
      body: JSON.stringify({ rows }),
    }),
  updateStudent: (studentId, updates) =>
    json(`/students/${studentId}`, { method: "PATCH", body: JSON.stringify(updates) }),
  deleteStudent: (studentId) => send(`/students/${studentId}`, { method: "DELETE" }),

  // Progress
  getProgress: (studentId, grade) => json(`/students/${studentId}/progress/${grade}`),
  recordProgress: (studentId, grade, week, activity, starsEarned) =>
    json(`/students/${studentId}/progress`, {
      method: "POST",
      body: JSON.stringify({ grade, week, activity, stars_earned: starsEarned }),
    }),

  // Bookmarks
  getBookmarks: (studentId, grade) => json(`/students/${studentId}/bookmarks/${grade}`),
  createBookmark: (studentId, bookmark) =>
    json(`/students/${studentId}/bookmarks`, { method: "POST", body: JSON.stringify(bookmark) }),
  deleteBookmark: (studentId, bookmarkId) =>
    send(`/students/${studentId}/bookmarks/${bookmarkId}`, { method: "DELETE" }),

  // Session overrides
  getSessionOverrides: (grade) => json(`/grades/${grade}/sessions`),
  upsertSessionOverride: (grade, week, sessionData) =>
    json(`/grades/${grade}/sessions/${week}`, { method: "PUT", body: JSON.stringify({ session_data: sessionData }) }),
  reviewSession: (grade, sessionData) =>
    json(`/grades/${grade}/sessions/review`, { method: "POST", body: JSON.stringify({ session_data: sessionData }) }),
  deleteSessionOverride: (grade, week) =>
    send(`/grades/${grade}/sessions/${week}`, { method: "DELETE" }),

  // Reports
  getParishOverview: () => json("/reports/parish/overview"),
  getClassProgressGrid: (grade, classId) => json(`/reports/grade/${grade}/class/${classId}/grid`),
  getStudentSummary: (studentId, grade) =>
    json(`/reports/student/${studentId}/summary?grade=${grade}`),
  async exportCsv(grade, classId) {
    const res = await apiFetch(`/reports/export/csv?grade=${grade}&class_id=${classId}`);
    if (!res.ok) throw await parseError(res);
    return res.text();
  },
};

async function parseError(res) {
  try {
    const data = await res.json();
    return new Error(data.detail || `HTTP ${res.status}`);
  } catch {
    return new Error(`HTTP ${res.status}`);
  }
}
