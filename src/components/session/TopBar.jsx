const displayFont = "'Lilita One', cursive";

export default function TopBar({ session, screen, stars, onBack, onPicker }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(26,26,62,.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {screen !== "home" && screen !== "picker" && (
          <button
            className="bh"
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "#fff",
              fontSize: 13,
            }}
          >
            ← Back
          </button>
        )}
        {screen === "picker" && (
          <button
            className="bh"
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "#fff",
              fontSize: 13,
            }}
          >
            ← Back
          </button>
        )}
        <button
          className="bh"
          onClick={onPicker}
          style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 8,
            padding: "6px 12px",
            color: "#fff",
            fontSize: 13,
            fontFamily: displayFont,
          }}
        >
          📖 Wk {session.week} ▾
        </button>
      </div>

      {/* Star counter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          background: "linear-gradient(135deg, #D4A843, #F0D060)",
          borderRadius: 20,
          padding: "5px 12px",
          animation: "gl 3s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: 14 }}>⭐</span>
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 16,
            color: "#1a1a3e",
          }}
        >
          {stars}
        </span>
      </div>
    </div>
  );
}
