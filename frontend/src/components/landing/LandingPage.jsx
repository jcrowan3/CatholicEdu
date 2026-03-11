import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { GRADES } from "../../data/grades";
import ThemeToggle from "../ui/ThemeToggle";
import { useAuth } from "../../context/AuthContext";


export default function LandingPage({ onSelectGrade, onSignIn, onJoinClass }) {
  const auth = useAuth();

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "40px 20px",
        animation: "su .4s ease",
      }}
    >
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: 32, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <ThemeToggle />
        </div>
        <div style={{ fontSize: 60, marginBottom: 10 }}>✝️</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 28,
            color: "var(--text-primary)",
            margin: "0 0 8px",
          }}
        >
          Catholic Catechist Toolkit
        </h1>
        <p
          style={{
            color: "var(--text-tertiary)",
            fontSize: 14,
            maxWidth: 360,
            margin: "0 auto",
          }}
        >
          Interactive faith formation for Catholic classrooms
        </p>
        <div
          style={{
            width: 60,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #D4A843, transparent)",
            margin: "16px auto 0",
          }}
        />
      </div>

      {/* Online auth buttons — shown when backend is available */}
      {auth.backendAvailable && (
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            animation: "pi .3s ease",
          }}
        >
          <button
            className="ch"
            onClick={onSignIn}
            style={{
              flex: 1,
              padding: "12px 0",
              borderRadius: 10,
              background: "linear-gradient(135deg, #4A90D9, #3A70B9)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            🔑 Catechist Sign In
          </button>
          <button
            className="ch"
            onClick={onJoinClass}
            style={{
              flex: 1,
              padding: "12px 0",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6DB87B, #4A9B5B)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            📝 Join a Class
          </button>
        </div>
      )}

      {/* Grade selector */}
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 10,
        }}
      >
        {auth.backendAvailable ? "OR BROWSE OFFLINE" : "CHOOSE A GRADE"}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10,
          marginBottom: 32,
        }}
      >
        {GRADES.map((g, i) => {
          const isActive = g.status === "active";
          return (
            <div
              key={g.grade}
              className={isActive ? "ch" : ""}
              onClick={() => isActive && onSelectGrade(g.grade)}
              style={{
                background: isActive
                  ? "rgba(212,168,67,.1)"
                  : "var(--surface-card)",
                borderRadius: 12,
                padding: "16px 14px",
                border: isActive
                  ? "2px solid rgba(212,168,67,.35)"
                  : "1px solid var(--border-default)",
                opacity: isActive ? 1 : 0.45,
                cursor: isActive ? "pointer" : "default",
                animation: `pi .35s ease ${i * 0.06}s both`,
              }}
            >
              {/* Grade number circle */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: isActive
                    ? "linear-gradient(135deg, #D4A843, #F0D060)"
                    : "var(--grade-circle-inactive-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: displayFont,
                    fontSize: 16,
                    color: isActive ? "var(--grade-dark-text)" : "var(--grade-circle-inactive-text)",
                  }}
                >
                  {g.grade}
                </span>
              </div>

              <div
                style={{
                  fontFamily: displayFont,
                  fontSize: 13,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                {g.title}
              </div>

              <div
                style={{
                  color: "var(--text-tertiary)",
                  fontSize: 10,
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}
              >
                {g.subtitle}
              </div>

              {!isActive && (
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--surface-input)",
                    borderRadius: 8,
                    padding: "2px 8px",
                    fontSize: 9,
                    fontWeight: 700,
                    color: "var(--text-faint)",
                    letterSpacing: 0.5,
                  }}
                >
                  COMING SOON
                </div>
              )}

              {isActive && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "rgba(109,184,123,.12)",
                    borderRadius: 8,
                    padding: "2px 8px",
                  }}
                >
                  <span style={{ fontSize: 8, color: "#6DB87B" }}>●</span>
                  <span
                    style={{ fontSize: 9, fontWeight: 700, color: "#6DB87B" }}
                  >
                    AVAILABLE
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* About section */}
      <div
        style={{
          background: "var(--surface-card)",
          borderRadius: 12,
          padding: "16px 18px",
          border: "1px solid var(--border-default)",
        }}
      >
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: 6,
          }}
        >
          ABOUT
        </p>
        <p
          style={{
            color: "var(--text-faint)",
            fontSize: 12,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Free, interactive activities for parish CCD and faith formation
          programs. Each grade includes 30 weeks of sessions aligned with
          Catholic teaching, with quizzes, sorting games, and guided prayers.
        </p>
      </div>
    </div>
  );
}
