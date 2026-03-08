const displayFont = "'Lilita One', cursive";

export default function BookmarksScreen({
  bookmarks,
  pillarColors,
  onNavigateToSession,
  onBack,
}) {
  const grouped = {};
  for (const bm of bookmarks) {
    const pillar = bm.pillar || "Other";
    if (!grouped[pillar]) grouped[pillar] = [];
    grouped[pillar].push(bm);
  }

  return (
    <div style={{ animation: "su .4s ease" }}>
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
            fontSize: 22,
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          🔖 My Bookmarks
        </h2>
      </div>

      {bookmarks.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            animation: "pi .3s ease",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.5 }}>📑</div>
          <p
            style={{
              fontFamily: displayFont,
              fontSize: 16,
              color: "var(--text-secondary)",
              margin: "0 0 6px",
            }}
          >
            No bookmarks yet!
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            Tap 📑 on any Discover card to save topics you want to remember.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {Object.entries(grouped).map(([pillar, items]) => (
            <div key={pillar}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: pillarColors[pillar] || "var(--text-muted)",
                  }}
                />
                <span
                  style={{
                    fontFamily: displayFont,
                    fontSize: 13,
                    color: pillarColors[pillar] || "var(--text-secondary)",
                    letterSpacing: 0.5,
                  }}
                >
                  {pillar}
                </span>
                <span style={{ color: "var(--text-ghost)", fontSize: 11 }}>
                  ({items.length})
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((bm) => (
                  <div
                    key={bm.key}
                    className="ch"
                    onClick={() =>
                      onNavigateToSession && onNavigateToSession(bm.week - 1)
                    }
                    style={{
                      background: "var(--surface-card)",
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      animation: "pi .3s ease",
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{bm.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: displayFont,
                          fontSize: 13,
                          color: "var(--text-primary)",
                        }}
                      >
                        {bm.name}
                      </div>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: 10,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Week {bm.week} &middot;{" "}
                        {bm.desc?.slice(0, 60)}
                        {bm.desc?.length > 60 ? "..." : ""}
                      </div>
                    </div>
                    <span style={{ color: "var(--text-ghost)", fontSize: 14 }}>
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
