import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { generateSessionPdf } from "../../utils/generateSessionPdf";
import { findRelatedSessions } from "../../utils/findRelatedSessions";
import RelatedSessions from "./RelatedSessions";


export default function SessionHome({
  session,
  pillarColors = {},
  onNavigate,
  isDone,
  allSessions,
}) {
  const PILLAR_COLORS = pillarColors;
  const acts = [];
  acts.push({
    id: "discover",
    icon: "🔍",
    title: "Discover",
    desc: session.discover.title,
    sv: 2,
  });
  if (session.sort)
    acts.push({
      id: "sort",
      icon: "📂",
      title: "Sort & Match",
      desc: session.sort.title,
      sv: 3,
    });
  if (session.timeline)
    acts.push({
      id: "timeline",
      icon: "📋",
      title: "Put in Order",
      desc: session.timeline.title,
      sv: 3,
    });
  if (session.fillblank)
    acts.push({
      id: "fillblank",
      icon: "✏️",
      title: "Fill the Blank",
      desc: session.fillblank.title,
      sv: 3,
    });
  acts.push({
    id: "quiz",
    icon: "❓",
    title: "Quick Quiz",
    desc: "Test what you learned!",
    sv: 5,
  });
  acts.push({
    id: "prayer",
    icon: "🙏",
    title: "Closing Prayer",
    desc: "Pray together",
    sv: 1,
  });

  const total = acts.reduce((a, b) => a + b.sv, 0);
  const earned = acts.filter((a) => isDone(a.id)).reduce((a, b) => a + b.sv, 0);
  const allComplete = acts.every((a) => isDone(a.id));

  // Find related sessions
  const related = allSessions
    ? findRelatedSessions(session, allSessions)
    : [];

  return (
    <div>
      {/* Header card */}
      <div
        style={{
          background: "var(--surface-elevated)",
          borderRadius: 16,
          padding: "24px 20px",
          marginBottom: 14,
          border: "1px solid var(--border-default)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -16,
            right: -16,
            fontSize: 80,
            opacity: 0.04,
          }}
        >
          ✝️
        </div>
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            gap: 6,
            zIndex: 1,
          }}
        >
          {/* Family Take-Home button */}
          <button
            onClick={() => onNavigate("takehome")}
            title="Family Faith Connection"
            aria-label="Open family faith connection"
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "5px 10px",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            📨
          </button>
          {/* Print PDF button */}
          <button
            onClick={() => generateSessionPdf(session)}
            title="Print session as PDF"
            aria-label="Download session PDF"
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "5px 10px",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            🖨️
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            background: PILLAR_COLORS[session.pillar],
            padding: "2px 10px",
            borderRadius: 20,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily: displayFont,
              fontSize: 10,
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            {session.pillar.toUpperCase()}
          </span>
        </div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "var(--text-primary)",
            margin: "0 0 5px",
          }}
        >
          Week {session.week}: {session.title}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,.65)",
            fontSize: 12,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          &ldquo;{session.verse}&rdquo;
        </p>

        {/* Progress bar */}
        <div style={{ marginTop: 14 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span
              style={{
                color: "var(--text-faint)",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              PROGRESS
            </span>
            <span
              style={{ color: "#D4A843", fontSize: 10, fontWeight: 700 }}
            >
              {earned}/{total} ⭐
            </span>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,.07)",
              borderRadius: 6,
              height: 6,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, #D4A843, #F0D060)",
                height: "100%",
                borderRadius: 6,
                width: `${total > 0 ? (earned / total) * 100 : 0}%`,
                transition: "width .5s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Activity grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}
      >
        {acts.map((a, i) => {
          const d = isDone(a.id);
          return (
            <button
              key={a.id}
              type="button"
              className="ch"
              onClick={() => onNavigate(a.id)}
              style={{
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "inherit",
                color: "inherit",
                background: d
                  ? "rgba(109,184,123,.1)"
                  : "var(--surface-card)",
                borderRadius: 12,
                padding: "16px 12px",
                border: d
                  ? "2px solid rgba(109,184,123,.3)"
                  : "1px solid var(--border-default)",
                position: "relative",
                animation: `pi .35s ease ${i * 0.07}s both`,
              }}
            >
              {d && (
                <div
                  style={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    background: "#6DB87B",
                    borderRadius: "50%",
                    width: 18,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "#fff",
                  }}
                >
                  ✓
                </div>
              )}
              <div
                style={{
                  fontSize: 28,
                  marginBottom: 6,
                  animation: `fl ${3 + i * 0.3}s ease-in-out infinite`,
                }}
              >
                {a.icon}
              </div>
              <div
                style={{
                  fontFamily: displayFont,
                  fontSize: 14,
                  color: "var(--text-primary)",
                  marginBottom: 2,
                }}
              >
                {a.title}
              </div>
              <div
                style={{
                  color: "var(--text-tertiary)",
                  fontSize: 10,
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}
              >
                {a.desc}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 3,
                  background: "rgba(212,168,67,.1)",
                  borderRadius: 10,
                  padding: "2px 7px",
                }}
              >
                <span style={{ fontSize: 10 }}>⭐</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#D4A843",
                  }}
                >
                  {a.sv}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Session Recap Card */}
      {allComplete && (
        <div
          style={{
            marginTop: 14,
            background: "rgba(109,184,123,.08)",
            borderRadius: 12,
            padding: "18px 16px",
            border: "1px solid rgba(109,184,123,.2)",
            animation: "pi .4s ease",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 32,
              marginBottom: 6,
              animation: "bi .5s ease",
            }}
          >
            🏆
          </div>
          <h3
            style={{
              fontFamily: displayFont,
              fontSize: 16,
              color: "#6DB87B",
              textAlign: "center",
              margin: "0 0 10px",
            }}
          >
            Session Complete!
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.5,
              margin: "0 0 6px",
            }}
          >
            THIS WEEK YOU EXPLORED:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginBottom: 10,
            }}
          >
            {session.discover.items.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "var(--text-secondary)",
                }}
              >
                <span>{item.icon}</span>
                <span style={{ fontWeight: 600 }}>{item.name}</span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontStyle: "italic",
              color: "var(--text-tertiary)",
              fontSize: 11,
              lineHeight: 1.4,
              margin: 0,
              paddingTop: 8,
              borderTop: "1px solid rgba(109,184,123,.15)",
            }}
          >
            &ldquo;{session.verse}&rdquo;
          </p>
        </div>
      )}

      {/* Saint Quest placeholder */}
      <div
        style={{
          marginTop: 14,
          background:
            "linear-gradient(135deg, rgba(155,109,184,.12), rgba(74,144,217,.08))",
          borderRadius: 12,
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          border: "1px solid rgba(155,109,184,.15)",
        }}
      >
        <div style={{ fontSize: 28, animation: "fl 3s ease-in-out infinite" }}>
          ⚔️
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{ fontFamily: displayFont, fontSize: 13, color: "var(--text-primary)" }}
          >
            Continue Your Saint Quest
          </div>
          <div style={{ color: "var(--text-faint)", fontSize: 10 }}>
            Complete this session to unlock the next adventure!
          </div>
        </div>
        <span
          style={{
            color: "var(--text-ghost)",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          COMING SOON
        </span>
      </div>

      {/* Related Sessions */}
      <RelatedSessions
        sessions={related}
        pillarColors={pillarColors}
        onSelect={(weekIdx) => {
          onNavigate("related", weekIdx);
        }}
      />
    </div>
  );
}
