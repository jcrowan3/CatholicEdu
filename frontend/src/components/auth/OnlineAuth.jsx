import { DISPLAY_FONT as displayFont } from "../../utils/constants";
/**
 * OnlineAuth — catechist login/registration for the online (API-backed) flow.
 *
 * Two tabs: "Sign In" and "Register".
 */

import { useState } from "react";
import { useAuth } from "../../context/auth";


export default function OnlineAuth({ onComplete, onBack }) {
  const auth = useAuth();
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register fields
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [parishName, setParishName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    setLoading(true);
    try {
      await auth.loginCatechist(email, password);
      onComplete();
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setError("");
    if (!parishName.trim()) {
      setError("Parish name is required");
      return;
    }
    if (!regEmail || !regPassword) {
      setError("Email and password are required");
      return;
    }
    if (regPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (regPassword !== regConfirm) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await auth.register(
        parishName.trim(),
        regEmail,
        regPassword,
        displayName.trim() || "Catechist"
      );
      onComplete();
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid var(--border-strong)",
    background: "var(--surface-input)",
    color: "var(--text-primary)",
    fontSize: 14,
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: 10,
  };

  const labelStyle = {
    color: "var(--text-tertiary)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    display: "block",
    marginBottom: 4,
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: "40px 20px",
        animation: "su .4s ease",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>✝️</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          Catechist Account
        </h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
          Sign in or create a new parish account
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 20,
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid var(--border-default)",
        }}
      >
        {["login", "register"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t);
              setError("");
            }}
            style={{
              flex: 1,
              padding: "10px 0",
              background:
                tab === t ? "rgba(74,144,217,.15)" : "var(--surface-card)",
              color: tab === t ? "#4A90D9" : "var(--text-faint)",
              fontFamily: displayFont,
              fontSize: 13,
              border: "none",
              cursor: "pointer",
            }}
          >
            {t === "login" ? "Sign In" : "Register"}
          </button>
        ))}
      </div>

      {/* Login form */}
      {tab === "login" && (
        <div style={{ animation: "pi .3s ease" }}>
          <label style={labelStyle}>EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="your@email.com"
            autoFocus
            style={inputStyle}
          />

          <label style={labelStyle}>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="••••••••"
            style={inputStyle}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px 0",
              borderRadius: 10,
              background: loading
                ? "var(--surface-input)"
                : "linear-gradient(135deg, #4A90D9, #3A70B9)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 16,
              border: "none",
              cursor: loading ? "default" : "pointer",
              marginTop: 6,
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </div>
      )}

      {/* Register form */}
      {tab === "register" && (
        <div style={{ animation: "pi .3s ease" }}>
          <label style={labelStyle}>PARISH / PROGRAM NAME</label>
          <input
            type="text"
            value={parishName}
            onChange={(e) => setParishName(e.target.value)}
            placeholder="e.g. St. Mary's CCD"
            autoFocus
            style={inputStyle}
          />

          <label style={labelStyle}>YOUR NAME</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="e.g. Mrs. Johnson"
            style={inputStyle}
          />

          <label style={labelStyle}>EMAIL</label>
          <input
            type="email"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            placeholder="your@email.com"
            style={inputStyle}
          />

          <label style={labelStyle}>PASSWORD</label>
          <input
            type="password"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            placeholder="Minimum 8 characters"
            style={inputStyle}
          />

          <label style={labelStyle}>CONFIRM PASSWORD</label>
          <input
            type="password"
            value={regConfirm}
            onChange={(e) => setRegConfirm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRegister()}
            placeholder="••••••••"
            style={inputStyle}
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px 0",
              borderRadius: 10,
              background: loading
                ? "var(--surface-input)"
                : "linear-gradient(135deg, #6DB87B, #4A9B5B)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 16,
              border: "none",
              cursor: loading ? "default" : "pointer",
              marginTop: 6,
            }}
          >
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <p
          style={{
            color: "#D94A4A",
            fontSize: 12,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          {error}
        </p>
      )}

      {/* Back */}
      <button
        onClick={onBack}
        style={{
          display: "block",
          margin: "20px auto 0",
          color: "var(--text-ghost)",
          fontSize: 11,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
}
