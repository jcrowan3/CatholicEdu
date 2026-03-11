import { DISPLAY_FONT as displayFont } from "../../utils/constants";
/**
 * JoinClass — student join-code flow for the online (API-backed) mode.
 *
 * Steps:
 * 1. Enter 8-character class join code
 * 2. See class roster → tap your name
 * 3. (Optional) enter PIN if class requires it
 * 4. Get student JWT → redirect to student mode
 */

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/client";


export default function JoinClass({ onComplete, onBack }) {
  const auth = useAuth();
  const [step, setStep] = useState("code"); // "code" | "roster" | "pin"
  const [joinCode, setJoinCode] = useState("");
  const [roster, setRoster] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCodeSubmit = async () => {
    setError("");
    const code = joinCode.trim().toUpperCase();
    if (code.length < 6) {
      setError("Enter the full join code from your catechist");
      return;
    }
    setLoading(true);
    try {
      const data = await api.getClassRoster(code);
      setRoster(data);
      setStep("roster");
    } catch (err) {
      setError(err.message || "Invalid join code");
    } finally {
      setLoading(false);
    }
  };

  const handleStudentSelect = async (student) => {
    setSelectedStudent(student);
    if (student.has_pin) {
      setStep("pin");
      return;
    }
    // No PIN required — login directly
    await loginStudent(student.id, null);
  };

  const handlePinSubmit = async () => {
    if (!pin || pin.length < 4) {
      setError("Enter your 4-digit PIN");
      return;
    }
    await loginStudent(selectedStudent.id, pin);
  };

  const loginStudent = async (studentId, accessPin) => {
    setError("");
    setLoading(true);
    try {
      await auth.loginStudent(joinCode.trim().toUpperCase(), studentId, accessPin);
      onComplete({
        displayName: selectedStudent?.display_name || "Student",
        avatarEmoji: selectedStudent?.avatar_emoji || "😊",
      });
    } catch (err) {
      setError(err.message || "Login failed");
      if (accessPin) setPin("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: "40px 20px",
        animation: "su .4s ease",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>📝</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          Join Your Class
        </h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
          {step === "code" && "Enter the code your catechist gave you"}
          {step === "roster" && `${roster?.class_name || "Class"} — tap your name`}
          {step === "pin" && "Enter your PIN"}
        </p>
      </div>

      {/* Step 1: Enter join code */}
      {step === "code" && (
        <div style={{ animation: "pi .3s ease" }}>
          <input
            type="text"
            value={joinCode}
            onChange={(e) => {
              setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8));
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCodeSubmit()}
            autoFocus
            placeholder="JOIN CODE"
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 12,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 24,
              fontFamily: displayFont,
              outline: "none",
              textAlign: "center",
              letterSpacing: 8,
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handleCodeSubmit}
            disabled={loading}
            style={{
              width: "100%",
              marginTop: 14,
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
            }}
          >
            {loading ? "Looking up…" : "Join"}
          </button>
        </div>
      )}

      {/* Step 2: Student roster */}
      {step === "roster" && roster && (
        <div style={{ animation: "pi .3s ease" }}>
          {roster.students.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
              }}
            >
              {roster.students.map((student, i) => (
                <div
                  key={student.id}
                  className="ch"
                  onClick={() => !loading && handleStudentSelect(student)}
                  style={{
                    background: "var(--surface-card)",
                    borderRadius: 12,
                    padding: "14px 8px",
                    textAlign: "center",
                    border: "1px solid var(--border-default)",
                    cursor: loading ? "default" : "pointer",
                    opacity: loading ? 0.5 : 1,
                    animation: `pi .3s ease ${i * 0.04}s both`,
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 4 }}>
                    {student.avatar_emoji}
                  </div>
                  <div
                    style={{
                      color: "var(--text-primary)",
                      fontSize: 12,
                      fontWeight: 700,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {student.display_name}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                background: "var(--surface-card)",
                borderRadius: 12,
                padding: "24px 16px",
                textAlign: "center",
                border: "1px solid var(--border-default)",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>👋</div>
              <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
                No students in this class yet. Ask your catechist to add you.
              </p>
            </div>
          )}

          <button
            onClick={() => {
              setStep("code");
              setRoster(null);
              setError("");
            }}
            style={{
              display: "block",
              margin: "16px auto 0",
              color: "var(--text-ghost)",
              fontSize: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ← Different code
          </button>
        </div>
      )}

      {/* Step 3: PIN entry */}
      {step === "pin" && selectedStudent && (
        <div style={{ animation: "pi .3s ease", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>
            {selectedStudent.avatar_emoji}
          </div>
          <p style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: 16 }}>
            {selectedStudent.display_name}
          </p>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={(e) => {
              setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
            autoFocus
            placeholder="••••"
            style={{
              width: 140,
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 22,
              fontFamily: "inherit",
              outline: "none",
              textAlign: "center",
              letterSpacing: 8,
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handlePinSubmit}
            disabled={loading}
            style={{
              display: "block",
              width: "100%",
              marginTop: 14,
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
            }}
          >
            {loading ? "Logging in…" : "Go"}
          </button>
          <button
            onClick={() => {
              setStep("roster");
              setPin("");
              setError("");
            }}
            style={{
              display: "block",
              margin: "12px auto 0",
              color: "var(--text-ghost)",
              fontSize: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ← Back to roster
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

      {/* Back to home */}
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
