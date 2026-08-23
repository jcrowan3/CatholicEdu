import { DISPLAY_FONT as displayFont } from "../../utils/constants";

export default function RelatedSessions({ sessions, pillarColors, onSelect }) {
  if (!sessions || sessions.length === 0) return null;

  return (
    <div style={{ marginTop: 14, animation: "pi .4s ease .2s both" }}>
      <h3
        style={{
          fontFamily: displayFont,
          fontSize: 13,
          color: "var(--text-faint)",
          margin: "0 0 8px",
          letterSpacing: 0.5,
        }}
      >
        📚 Related Sessions
      </h3>
      <div
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          paddingBottom: 8,
          WebkitOverflowScrolling: "touch",
        }}
      >
        {sessions.map((s) => (
          <button
            key={s.week}
            type="button"
            className="ch"
            onClick={() => onSelect(s.week - 1)}
            style={{
              minWidth: 150,
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "inherit",
              color: "inherit",
              background: "var(--surface-card)",
              borderRadius: 10,
              padding: "10px 12px",
              border: "1px solid var(--border-default)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: pillarColors[s.pillar] || "var(--text-muted)",
                padding: "1px 7px",
                borderRadius: 10,
                marginBottom: 5,
              }}
            >
              <span
                style={{
                  fontFamily: displayFont,
                  fontSize: 9,
                  color: "#101522",
                  letterSpacing: 0.5,
                }}
              >
                {s.pillar?.toUpperCase()}
              </span>
            </div>
            <div
              style={{
                fontFamily: displayFont,
                fontSize: 12,
                color: "var(--text-primary)",
                marginBottom: 2,
              }}
            >
              Week {s.week}
            </div>
            <div
              style={{
                color: "var(--text-tertiary)",
                fontSize: 10,
                lineHeight: 1.3,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {s.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
