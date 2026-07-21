import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { CONTENT_PROVENANCE } from "../../data/contentProvenance";

/**
 * Parent/Family Take-Home Summary.
 * Auto-generated from existing session data — no new data fields needed.
 */
export default function TakeHome({ session, onBack }) {
  // Extract key points: first meaningful sentence from each discover desc
  const keyPoints = session.discover.items.map((item) => {
    const firstSentence =
      item.desc
        .split(/[.!]/)
        .find((s) => s.trim().length > 10)
        ?.trim() + "." || item.desc;
    return {
      icon: item.icon,
      name: item.name,
      brief: firstSentence,
    };
  });

  // Convert 2 quiz questions into discussion prompts
  const discussions = session.quiz.questions.slice(0, 3).map((q) => {
    // Remove trailing ? and rephrase as discussion prompt
    const base = q.q.replace(/\?$/, "");
    return `Talk about: ${base}`;
  });

  return (
    <div style={{ animation: "su .4s ease" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 18,
            color: "var(--text-secondary)",
          }}
        >
          ←
        </button>
        <h2
          style={{
            fontFamily: displayFont,
            fontSize: 20,
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          📨 Family Faith Connection
        </h2>
      </div>

      {/* Main card — designed to be screenshot/print friendly */}
      <div
        style={{
          background: "var(--surface-elevated)",
          borderRadius: 14,
          padding: "20px 18px",
          border: "1px solid var(--border-default)",
        }}
      >
        {/* Session info */}
        <div style={{ marginBottom: 14 }}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              margin: "0 0 4px",
            }}
          >
            WEEK {session.week} &middot; {session.pillar?.toUpperCase()}
          </p>
          <h3
            style={{
              fontFamily: displayFont,
              fontSize: 20,
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            {session.title}
          </h3>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 13,
              fontStyle: "italic",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            &ldquo;{session.verse}&rdquo;
          </p>
        </div>

        {/* Key concepts */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: 14,
            marginBottom: 14,
          }}
        >
          <h4
            style={{
              fontFamily: displayFont,
              fontSize: 14,
              color: "#D4A843",
              margin: "0 0 8px",
            }}
          >
            This Week We Learned:
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {keyPoints.map((kp) => (
              <div
                key={kp.name}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 16, flexShrink: 0 }}>{kp.icon}</span>
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      color: "var(--text-primary)",
                    }}
                  >
                    {kp.name}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--text-tertiary)",
                      marginLeft: 4,
                    }}
                  >
                    — {kp.brief}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion prompts */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: 14,
            marginBottom: 14,
          }}
        >
          <h4
            style={{
              fontFamily: displayFont,
              fontSize: 14,
              color: "#4A90D9",
              margin: "0 0 8px",
            }}
          >
            💬 Talk About It:
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {discussions.map((d, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(74,144,217,.06)",
                  borderRadius: 8,
                  padding: "8px 10px",
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Prayer */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: 14,
          }}
        >
          <h4
            style={{
              fontFamily: displayFont,
              fontSize: 14,
              color: "#9B6DB8",
              margin: "0 0 8px",
            }}
          >
            🙏 Pray Together:
          </h4>
          <div
            style={{
              background: "rgba(155,109,184,.06)",
              borderRadius: 8,
              padding: "10px 12px",
            }}
          >
            {session.prayer.lines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "var(--text-secondary)",
                  margin: i < session.prayer.lines.length - 1 ? "0 0 4px" : 0,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color:
                      line.s === "L"
                        ? "#9B6DB8"
                        : "var(--text-primary)",
                    fontSize: 10,
                    marginRight: 4,
                  }}
                >
                  {line.s === "L" ? "Leader:" : "All:"}
                </span>
                {line.t}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Share tip */}
      <p
        style={{
          textAlign: "center",
          color: "var(--text-ghost)",
          fontSize: 10,
          lineHeight: 1.4,
          margin: "12px auto 0",
          maxWidth: 420,
        }}
      >
        {CONTENT_PROVENANCE.disclosure}
      </p>
    </div>
  );
}
