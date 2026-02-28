const displayFont = "'Lilita One', cursive";

export default function TopBar({
  session,
  screen,
  stars,
  onBack,
  onPicker,
  mode,
  activeUser,
  onDashboard,
  onSwitchUser,
}) {
  const isCatechist = mode === "catechist";

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
        {(screen !== "home" && screen !== "picker" && screen !== "dashboard") && (
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

        {/* Week picker button (student mode + catechist session screens) */}
        {session && !isCatechist && (
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
        )}

        {/* Catechist mode badge */}
        {isCatechist && screen !== "dashboard" && (
          <button
            className="bh"
            onClick={onDashboard}
            style={{
              background: "rgba(155,109,184,.12)",
              border: "1px solid rgba(155,109,184,.25)",
              borderRadius: 8,
              padding: "6px 12px",
              color: "#9B6DB8",
              fontSize: 13,
              fontFamily: displayFont,
            }}
          >
            ← Dashboard
          </button>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Active student info */}
        {activeUser && !isCatechist && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              color: "rgba(255,255,255,.45)",
              fontSize: 11,
            }}
          >
            <span style={{ fontSize: 14 }}>{activeUser.avatarEmoji}</span>
            <span style={{ fontWeight: 700, maxWidth: 60, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {activeUser.name}
            </span>
          </div>
        )}

        {/* Catechist badge */}
        {isCatechist && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(155,109,184,.12)",
              borderRadius: 12,
              padding: "3px 8px",
            }}
          >
            <span style={{ fontSize: 10 }}>✝️</span>
            <span style={{ color: "#9B6DB8", fontSize: 10, fontWeight: 700 }}>
              CATECHIST
            </span>
          </div>
        )}

        {/* Star counter (student mode) */}
        {!isCatechist && (
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
        )}

        {/* Switch user button */}
        {onSwitchUser && (
          <button
            onClick={onSwitchUser}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 8,
              padding: "6px 8px",
              color: "rgba(255,255,255,.3)",
              fontSize: 11,
              cursor: "pointer",
            }}
          >
            ↻
          </button>
        )}
      </div>
    </div>
  );
}
