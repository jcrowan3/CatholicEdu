import { useState } from "react";
import { extractCCCRefs } from "../../utils/extractVocabulary";
import { DISPLAY_FONT as displayFont, COLORS } from "../../utils/constants";
import ActivityHeader from "../shared/ActivityHeader";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";


export default function Discover({
  data,
  earn,
  isDone,
  onBack,
  week,
  sessionPillar,
  toggleBookmark,
  isBookmarked,
}) {
  const [revealed, setRevealed] = useState(new Set());
  const [deepDiveOpen, setDeepDiveOpen] = useState(new Set());
  const done = isDone("discover");
  const threshold = Math.max(3, Math.ceil(data.items.length * 0.7));

  const toggle = (i) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleDeepDive = (i) => {
    setDeepDiveOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div style={{ animation: "su .4s ease" }}>
      <ActivityHeader title={data.title} instruction={data.instruction} />

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {data.items.map((item, i) => {
          const open = revealed.has(i);
          const cccRefs = extractCCCRefs(item.desc);
          const bookmarked =
            isBookmarked && week != null && isBookmarked(week, i);

          return (
            <div
              key={i}
              className="ch"
              onClick={() => toggle(i)}
              style={{
                background: open
                  ? "rgba(74,144,217,.08)"
                  : "var(--surface-card)",
                borderRadius: 10,
                padding: "12px 14px",
                border: open
                  ? "1px solid rgba(74,144,217,.25)"
                  : "1px solid var(--border-light)",
                animation: `pi .3s ease ${i * 0.06}s both`,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div
                  style={{
                    flex: 1,
                    fontFamily: displayFont,
                    fontSize: 14,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.name}
                </div>
                {/* Bookmark button */}
                {toggleBookmark && week != null && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(week, i, {
                        name: item.name,
                        desc: item.desc,
                        icon: item.icon,
                        pillar: sessionPillar,
                      });
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 16,
                      padding: "2px 4px",
                      opacity: bookmarked ? 1 : 0.4,
                      transition: "opacity .2s",
                    }}
                    title={bookmarked ? "Remove bookmark" : "Bookmark this topic"}
                  >
                    {bookmarked ? "🔖" : "📑"}
                  </button>
                )}
                <span
                  style={{
                    color: "var(--text-ghost)",
                    fontSize: 14,
                    transition: "transform .3s",
                    transform: open ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▼
                </span>
              </div>
              {open && (
                <div
                  style={{
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      color: "var(--text-tertiary)",
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>

                  {/* Want to know more? */}
                  {cccRefs.length > 0 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDeepDive(i);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#D4A843",
                          fontSize: 12,
                          fontWeight: 700,
                          marginTop: 8,
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <span>📖</span>
                        <span>
                          {deepDiveOpen.has(i)
                            ? "Hide reference"
                            : "Want to know more?"}
                        </span>
                      </button>
                      {deepDiveOpen.has(i) && (
                        <div
                          style={{
                            marginTop: 8,
                            padding: "10px 12px",
                            background: "rgba(212,168,67,.08)",
                            border: "1px solid rgba(212,168,67,.2)",
                            borderRadius: 8,
                            animation: "pi .25s ease",
                          }}
                        >
                          <p
                            style={{
                              color: "#D4A843",
                              fontSize: 12,
                              fontWeight: 700,
                              margin: "0 0 4px",
                            }}
                          >
                            Catechism Reference: {cccRefs.join(", ")}
                          </p>
                          <p
                            style={{
                              color: "var(--text-muted)",
                              fontSize: 11,
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            Ask your catechist or parent to look these up
                            together in the Catechism of the Catholic Church!
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {revealed.size >= threshold && !done && (
        <DoneButton
          onClick={() => {
            earn("discover", 2);
            onBack();
          }}
          text="Got It! +2 ⭐"
        />
      )}
      {done && <DoneBadge />}
    </div>
  );
}
