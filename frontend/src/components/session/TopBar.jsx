import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import ThemeToggle from "../ui/ThemeToggle";


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
  onBookmarks,
  onVocabulary,
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
        background: "var(--topbar-bg)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {(screen !== "home" && screen !== "picker" && screen !== "dashboard") && (
          <button
            className="bh"
            onClick={onBack}
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "var(--text-primary)",
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
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "var(--text-primary)",
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
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "6px 12px",
              color: "var(--text-primary)",
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
              color: "var(--text-muted)",
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

        {/* Bookmarks button (student mode) */}
        {onBookmarks && !isCatechist && (
          <button
            className="bh"
            onClick={onBookmarks}
            title="My Bookmarks"
            aria-label="Open my bookmarks"
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "5px 8px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            🔖
          </button>
        )}

        {/* Vocabulary button (student mode) */}
        {onVocabulary && !isCatechist && (
          <button
            className="bh"
            onClick={onVocabulary}
            title="Vocabulary"
            aria-label="Open vocabulary"
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "5px 8px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            📖
          </button>
        )}

        {/* Star counter (student mode) */}
        {!isCatechist && (
          <div
            aria-label={`${stars} stars earned`}
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
                color: "var(--grade-dark-text)",
              }}
            >
              {stars}
            </span>
          </div>
        )}

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Switch user button */}
        {onSwitchUser && (
          <button
            onClick={onSwitchUser}
            aria-label="Switch user"
            title="Switch user"
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 8,
              padding: "6px 8px",
              color: "var(--text-ghost)",
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
