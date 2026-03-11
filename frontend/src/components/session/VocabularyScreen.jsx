import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { useState, useMemo } from "react";
import { extractGradeVocabulary } from "../../utils/extractVocabulary";


export default function VocabularyScreen({
  sessions,
  pillarColors,
  onBack,
}) {
  const [search, setSearch] = useState("");
  const [pillarFilter, setPillarFilter] = useState(null);
  const [sortBy, setSortBy] = useState("alpha");
  const [expandedTerm, setExpandedTerm] = useState(null);

  // Memoize vocabulary extraction
  const allTerms = useMemo(
    () => extractGradeVocabulary(sessions),
    [sessions]
  );

  // Get unique pillars
  const pillars = useMemo(
    () => [...new Set(allTerms.map((t) => t.pillar))],
    [allTerms]
  );

  // Filter and sort
  const filtered = useMemo(() => {
    let terms = allTerms;
    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    if (pillarFilter) {
      terms = terms.filter((t) => t.pillar === pillarFilter);
    }
    if (sortBy === "alpha") {
      terms = [...terms].sort((a, b) => a.term.localeCompare(b.term));
    } else {
      terms = [...terms].sort((a, b) => a.week - b.week);
    }
    return terms;
  }, [allTerms, search, pillarFilter, sortBy]);

  return (
    <div style={{ animation: "su .4s ease" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
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
          📖 Vocabulary
        </h2>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search terms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid var(--border-medium)",
          background: "var(--surface-input)",
          color: "var(--text-primary)",
          fontSize: 14,
          outline: "none",
          fontFamily: "'Nunito', sans-serif",
          boxSizing: "border-box",
        }}
      />

      {/* Pillar filter chips */}
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <button
          className="bh"
          onClick={() => setPillarFilter(null)}
          style={{
            padding: "4px 12px",
            borderRadius: 16,
            fontSize: 11,
            fontWeight: 700,
            background: !pillarFilter
              ? "rgba(212,168,67,.15)"
              : "var(--surface-card)",
            border: !pillarFilter
              ? "1px solid rgba(212,168,67,.3)"
              : "1px solid var(--border-default)",
            color: !pillarFilter
              ? "#D4A843"
              : "var(--text-secondary)",
          }}
        >
          All
        </button>
        {pillars.map((p) => (
          <button
            key={p}
            className="bh"
            onClick={() => setPillarFilter(pillarFilter === p ? null : p)}
            style={{
              padding: "4px 12px",
              borderRadius: 16,
              fontSize: 11,
              fontWeight: 700,
              background:
                pillarFilter === p
                  ? `${pillarColors[p]}22`
                  : "var(--surface-card)",
              border:
                pillarFilter === p
                  ? `1px solid ${pillarColors[p]}66`
                  : "1px solid var(--border-default)",
              color:
                pillarFilter === p
                  ? pillarColors[p]
                  : "var(--text-secondary)",
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Results count + sort toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <span style={{ color: "var(--text-muted)", fontSize: 11 }}>
          {filtered.length} term{filtered.length !== 1 ? "s" : ""}
        </span>
        <button
          className="bh"
          onClick={() =>
            setSortBy((s) => (s === "alpha" ? "week" : "alpha"))
          }
          style={{
            padding: "3px 10px",
            borderRadius: 10,
            fontSize: 10,
            fontWeight: 700,
            background: "var(--surface-card)",
            border: "1px solid var(--border-default)",
            color: "var(--text-secondary)",
          }}
        >
          {sortBy === "alpha" ? "A → Z" : "By Week"}
        </button>
      </div>

      {/* Term cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {filtered.map((term) => {
          const key = `${term.week}-${term.term}`;
          const isOpen = expandedTerm === key;
          return (
            <div
              key={key}
              className="ch"
              onClick={() => setExpandedTerm(isOpen ? null : key)}
              style={{
                background: isOpen
                  ? "rgba(74,144,217,.06)"
                  : "var(--surface-card)",
                borderRadius: 10,
                padding: "10px 12px",
                border: isOpen
                  ? "1px solid rgba(74,144,217,.2)"
                  : "1px solid var(--border-light)",
                animation: "pi .2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 20 }}>{term.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: displayFont,
                      fontSize: 14,
                      color: "var(--text-primary)",
                    }}
                  >
                    {term.term}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "var(--text-faint)",
                    }}
                  >
                    Week {term.week} &middot; {term.pillar}
                  </div>
                </div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: pillarColors[term.pillar] || "var(--text-muted)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "var(--text-ghost)",
                    fontSize: 12,
                    transition: "transform .3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▼
                </span>
              </div>
              {isOpen && (
                <div
                  style={{
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid var(--border-light)",
                    animation: "pi .25s ease",
                  }}
                >
                  <p
                    style={{
                      color: "var(--text-tertiary)",
                      fontSize: 13,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {term.definition}
                  </p>
                  {term.cccRefs.length > 0 && (
                    <p
                      style={{
                        color: "#D4A843",
                        fontSize: 11,
                        marginTop: 6,
                        fontWeight: 700,
                      }}
                    >
                      📖 {term.cccRefs.join(", ")}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "30px 20px",
            animation: "pi .3s ease",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 8, opacity: 0.4 }}>🔍</div>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            No terms found. Try a different search.
          </p>
        </div>
      )}
    </div>
  );
}
