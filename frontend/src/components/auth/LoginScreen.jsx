import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { useState } from "react";
import { getUsers, getPin, getProgramName } from "../../data/store";
import { GRADES } from "../../data/grades";


export default function LoginScreen({
  grade,
  classId,
  onSelectStudent,
  onCatechistLogin,
  onBackToGrades,
}) {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const users = getUsers(grade, classId);
  const programName = getProgramName(grade);
  const gradeInfo = GRADES.find((g) => g.grade === grade);

  const handlePinSubmit = () => {
    if (pin === getPin(grade)) {
      onCatechistLogin();
    } else {
      setError("Incorrect PIN");
      setPin("");
    }
  };

  const handlePinKeyDown = (e) => {
    if (e.key === "Enter") handlePinSubmit();
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: "30px 20px",
        animation: "su .4s ease",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 40, marginBottom: 6 }}>✝️</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 22,
            color: "var(--text-primary)",
            margin: "0 0 4px",
          }}
        >
          {programName || "Catholic Catechist Toolkit"}
        </h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: 12 }}>
          {gradeInfo
            ? `${gradeInfo.title} — ${gradeInfo.subtitle}`
            : ""}
        </p>
      </div>

      {/* Student section */}
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 8,
        }}
      >
        STUDENTS
      </p>

      {users.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {users.map((user, i) => (
            <div
              key={user.id}
              className="ch"
              onClick={() => onSelectStudent(user)}
              style={{
                background: "var(--surface-card)",
                borderRadius: 12,
                padding: "14px 8px",
                textAlign: "center",
                border: "1px solid var(--border-default)",
                animation: `pi .3s ease ${i * 0.04}s both`,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 4 }}>
                {user.avatarEmoji}
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
                {user.name}
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
            marginBottom: 20,
            border: "1px solid var(--border-default)",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 8 }}>👋</div>
          <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
            No students yet. Log in as catechist to add students.
          </p>
        </div>
      )}

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "var(--border-default)",
          margin: "8px 0 16px",
        }}
      />

      {/* Catechist section */}
      <p
        style={{
          color: "rgba(155,109,184,.6)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 8,
        }}
      >
        CATECHIST / TEACHER
      </p>

      {!showPin ? (
        <button
          onClick={() => setShowPin(true)}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 10,
            background: "rgba(155,109,184,.15)",
            border: "1px solid rgba(155,109,184,.25)",
            color: "#9B6DB8",
            fontFamily: displayFont,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Catechist Mode
        </button>
      ) : (
        <div
          style={{
            background: "rgba(155,109,184,.08)",
            borderRadius: 12,
            padding: 16,
            border: "1px solid rgba(155,109,184,.2)",
            animation: "pi .3s ease",
          }}
        >
          <p
            style={{
              color: "var(--text-tertiary)",
              fontSize: 11,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Enter your 4-digit PIN
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
                setError("");
              }}
              onKeyDown={handlePinKeyDown}
              autoFocus
              placeholder="••••"
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid var(--border-strong)",
                background: "var(--surface-input)",
                color: "var(--text-primary)",
                fontSize: 18,
                fontFamily: "inherit",
                outline: "none",
                textAlign: "center",
                letterSpacing: 6,
              }}
            />
            <button
              onClick={handlePinSubmit}
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                background: "#9B6DB8",
                color: "#fff",
                fontFamily: displayFont,
                fontSize: 13,
                border: "none",
                cursor: "pointer",
              }}
            >
              Go
            </button>
          </div>
          {error && (
            <p
              style={{
                color: "#D94A4A",
                fontSize: 11,
                textAlign: "center",
                marginTop: 6,
              }}
            >
              {error}
            </p>
          )}
          <button
            onClick={() => {
              setShowPin(false);
              setPin("");
              setError("");
            }}
            style={{
              display: "block",
              margin: "8px auto 0",
              color: "var(--text-ghost)",
              fontSize: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Back to Grades */}
      {onBackToGrades && (
        <button
          onClick={onBackToGrades}
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
          ← Back to Grades
        </button>
      )}
    </div>
  );
}
