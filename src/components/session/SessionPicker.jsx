import { PILLAR_COLORS } from "../../data/grade3";

const displayFont = "'Lilita One', cursive";

export default function SessionPicker({ sessions, current, onPick }) {
  return (
    <div style={{ animation: "su .4s ease" }}>
      <h2
        style={{
          fontFamily: displayFont,
          fontSize: 22,
          color: "#fff",
          margin: "0 0 14px",
        }}
      >
        📖 Choose a Session
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {sessions.map((s, i) => (
          <div
            key={s.week}
            className="ch"
            onClick={() => onPick(i)}
            style={{
              background:
                i === current
                  ? "rgba(212,168,67,.12)"
                  : "rgba(255,255,255,.04)",
              border:
                i === current
                  ? "2px solid rgba(212,168,67,.35)"
                  : "1px solid rgba(255,255,255,.06)",
              borderRadius: 10,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              animation: `pi .3s ease ${i * 0.04}s both`,
            }}
          >
            <div
              style={{
                background: PILLAR_COLORS[s.pillar] || "#888",
                width: 32,
                height: 32,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              {s.week}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: displayFont,
                  fontSize: 14,
                  color: "#fff",
                }}
              >
                {s.title}
              </div>
              <div
                style={{ fontSize: 10, color: "rgba(255,255,255,.35)" }}
              >
                {s.pillar}
              </div>
            </div>
            {i === current && (
              <span
                style={{
                  color: "#D4A843",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                CURRENT
              </span>
            )}
          </div>
        ))}
      </div>
      <p
        style={{
          color: "rgba(255,255,255,.25)",
          fontSize: 11,
          textAlign: "center",
          marginTop: 14,
        }}
      >
        {sessions.length} sessions available
      </p>
    </div>
  );
}
