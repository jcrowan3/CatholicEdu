/**
 * AuthContext — manages authentication state for the Catechist Toolkit.
 *
 * Supports two modes:
 * - "online": Authenticated via the backend API (JWT tokens)
 * - "offline": Legacy localStorage-only mode (no backend)
 *
 * Components use `useAuth()` to check auth state and call login/register/logout.
 */

import { useState, useCallback, useMemo } from "react";
import {
  api,
  hasToken,
  getAccessToken,
  decodeToken,
  clearTokens,
} from "../api/client";
import { AuthContext } from "./auth";

export function AuthProvider({ children }) {
  // Auth mode: "online" (API-backed) or "offline" (localStorage only)
  const [authMode, setAuthMode] = useState(() => {
    return hasToken() ? "online" : "offline";
  });

  // Current user info (from JWT or manual login)
  const [user, setUser] = useState(() => {
    if (hasToken()) {
      const payload = decodeToken(getAccessToken());
      if (payload) {
        return {
          id: payload.sub,
          parishId: payload.parish_id,
          type: payload.type, // "catechist" or "student"
          role: payload.role, // "parish_admin" or "catechist" (catechist tokens only)
          classId: payload.class_id,
          grade: payload.grade,
        };
      }
    }
    return null;
  });

  // Online sign-in remains available without a noisy background health probe.
  // Connection failures are shown only after the user chooses an online action.
  const backendAvailable = true;

  // Register a new parish (catechist flow)
  const register = useCallback(async (parishName, email, password, displayName) => {
    const data = await api.register(parishName, email, password, displayName);
    const payload = decodeToken(data.access_token);
    setUser({
      id: payload.sub,
      parishId: payload.parish_id,
      type: "catechist",
      role: "parish_admin",
      classId: null,
      grade: null,
    });
    setAuthMode("online");
    return data;
  }, []);

  // Login as catechist
  const loginCatechist = useCallback(async (email, password) => {
    const data = await api.login(email, password);
    const payload = decodeToken(data.access_token);
    setUser({
      id: payload.sub,
      parishId: payload.parish_id,
      type: "catechist",
      role: payload.role,
      classId: null,
      grade: null,
    });
    setAuthMode("online");
    return data;
  }, []);

  // Login as student (via join code)
  const loginStudent = useCallback(async (joinCode, studentId, accessPin) => {
    const data = await api.studentLogin(joinCode, studentId, accessPin);
    const payload = decodeToken(data.access_token);
    setUser({
      id: payload.sub,
      parishId: payload.parish_id,
      type: "student",
      role: null,
      classId: payload.class_id,
      grade: payload.grade,
    });
    setAuthMode("online");
    return data;
  }, []);

  // Enter offline mode (legacy localStorage flow)
  const goOffline = useCallback(() => {
    clearTokens();
    setUser(null);
    setAuthMode("offline");
  }, []);

  // Logout
  const logout = useCallback(() => {
    clearTokens();
    setUser(null);
    setAuthMode("offline");
  }, []);

  const value = useMemo(
    () => ({
      authMode,       // "online" | "offline"
      user,           // Current user info or null
      isOnline: authMode === "online",
      isAuthenticated: !!user,
      isCatechist: user?.type === "catechist",
      isStudent: user?.type === "student",
      isAdmin: user?.role === "parish_admin",
      backendAvailable,
      register,
      loginCatechist,
      loginStudent,
      goOffline,
      logout,
    }),
    [authMode, user, backendAvailable, register, loginCatechist, loginStudent, goOffline, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
