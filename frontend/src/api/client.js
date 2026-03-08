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

// ─── Public API methods ───

export const api = {
  // Auth
  async register(parishName, email, password, displayName) {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parish_name: parishName,
        email,
        password,
        display_name: displayName,
      }),
    });
    if (!res.ok) throw await parseError(res);
    const data = await res.json();
    setTokens(data.access_token, data.refresh_token);
    return data;
  },

  async login(email, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw await parseError(res);
    const data = await res.json();
    setTokens(data.access_token, data.refresh_token);
    return data;
  },

  async getClassRoster(joinCode) {
    const res = await fetch(
      `${API_BASE}/auth/student/roster?join_code=${encodeURIComponent(joinCode)}`,
      { method: "POST", headers: { "Content-Type": "application/json" } }
    );
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async studentLogin(joinCode, studentId, accessPin = null) {
    const res = await fetch(`${API_BASE}/auth/student/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        join_code: joinCode,
        student_id: studentId,
        access_pin: accessPin,
      }),
    });
    if (!res.ok) throw await parseError(res);
    const data = await res.json();
    setTokens(data.access_token, null); // Students don't get refresh tokens
    return data;
  },

  // Parish
  async getParish() {
    const res = await apiFetch("/parish");
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async updateParish(name) {
    const res = await apiFetch("/parish", {
      method: "PATCH",
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  // Grades
  async getGrades() {
    const res = await apiFetch("/grades");
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async createGrade(grade, programName = null) {
    const res = await apiFetch("/grades", {
      method: "POST",
      body: JSON.stringify({ grade, program_name: programName }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  // Classes
  async getClasses(grade) {
    const res = await apiFetch(`/grades/${grade}/classes`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async createClass(grade, name) {
    const res = await apiFetch(`/grades/${grade}/classes`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async deleteClass(grade, classId) {
    const res = await apiFetch(`/grades/${grade}/classes/${classId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw await parseError(res);
  },

  // Students
  async getStudents(grade, classId) {
    const res = await apiFetch(`/grades/${grade}/classes/${classId}/students`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async createStudent(grade, classId, displayName, avatarEmoji = "😊", accessPin = null) {
    const res = await apiFetch(`/grades/${grade}/classes/${classId}/students`, {
      method: "POST",
      body: JSON.stringify({
        display_name: displayName,
        avatar_emoji: avatarEmoji,
        access_pin: accessPin,
      }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async updateStudent(studentId, updates) {
    const res = await apiFetch(`/students/${studentId}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async deleteStudent(studentId) {
    const res = await apiFetch(`/students/${studentId}`, { method: "DELETE" });
    if (!res.ok) throw await parseError(res);
  },

  // Progress
  async getProgress(studentId, grade) {
    const res = await apiFetch(`/students/${studentId}/progress/${grade}`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async recordProgress(studentId, grade, week, activity, starsEarned) {
    const res = await apiFetch(`/students/${studentId}/progress`, {
      method: "POST",
      body: JSON.stringify({
        grade,
        week,
        activity,
        stars_earned: starsEarned,
      }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  // Bookmarks
  async getBookmarks(studentId, grade) {
    const res = await apiFetch(`/students/${studentId}/bookmarks/${grade}`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async createBookmark(studentId, bookmark) {
    const res = await apiFetch(`/students/${studentId}/bookmarks`, {
      method: "POST",
      body: JSON.stringify(bookmark),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async deleteBookmark(studentId, bookmarkId) {
    const res = await apiFetch(`/students/${studentId}/bookmarks/${bookmarkId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw await parseError(res);
  },

  // Session overrides
  async getSessionOverrides(grade) {
    const res = await apiFetch(`/grades/${grade}/sessions`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async upsertSessionOverride(grade, week, sessionData) {
    const res = await apiFetch(`/grades/${grade}/sessions/${week}`, {
      method: "PUT",
      body: JSON.stringify({ session_data: sessionData }),
    });
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async deleteSessionOverride(grade, week) {
    const res = await apiFetch(`/grades/${grade}/sessions/${week}`, {
      method: "DELETE",
    });
    if (!res.ok) throw await parseError(res);
  },

  // Reports
  async getParishOverview() {
    const res = await apiFetch("/reports/parish/overview");
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async getClassProgressGrid(grade, classId) {
    const res = await apiFetch(`/reports/grade/${grade}/class/${classId}/grid`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

  async getStudentSummary(studentId, grade) {
    const res = await apiFetch(`/reports/student/${studentId}/summary?grade=${grade}`);
    if (!res.ok) throw await parseError(res);
    return res.json();
  },

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
