import { GRADES } from "../../data/grades";

const displayFont = "'Lilita One', cursive";

export default function LandingPage({ onSelectGrade }) {
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
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 60, marginBottom: 10 }}>✝️</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 28,
            color: "#fff",
            margin: "0 0 8px",
          }}
        >
          Catholic Catechist Toolkit
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,.55)",
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

      {/* Grade selector */}
      <p
        style={{
          color: "rgba(255,255,255,.45)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 10,
        }}
      >
        CHOOSE A GRADE
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
                  : "rgba(255,255,255,.03)",
                borderRadius: 12,
                padding: "16px 14px",
                border: isActive
                  ? "2px solid rgba(212,168,67,.35)"
                  : "1px solid rgba(255,255,255,.06)",
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
                    : "rgba(255,255,255,.08)",
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
                    color: isActive ? "#1a1a3e" : "rgba(255,255,255,.4)",
                  }}
                >
                  {g.grade}
                </span>
              </div>

              <div
                style={{
                  fontFamily: displayFont,
                  fontSize: 13,
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                {g.title}
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,.5)",
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
                    background: "rgba(255,255,255,.06)",
                    borderRadius: 8,
                    padding: "2px 8px",
                    fontSize: 9,
                    fontWeight: 700,
                    color: "rgba(255,255,255,.35)",
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
          background: "rgba(255,255,255,.03)",
          borderRadius: 12,
          padding: "16px 18px",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,.45)",
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
            color: "rgba(255,255,255,.4)",
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
