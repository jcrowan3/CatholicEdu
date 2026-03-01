import { getUsers, getSessions, getAllProgress, getPillarColors } from "../../data/store";

const displayFont = "'Lilita One', cursive";

export default function ProgressGrid({ grade, classId, onBack }) {
  const users = getUsers(grade, classId);
  const sessions = getSessions(grade);
  const allProgress = getAllProgress(grade, classId, users.map((u) => u.id));
  const PILLAR_COLORS = getPillarColors(grade);

  // Build activity IDs per session
  const sessionActs = sessions.map((s) => {
    const acts = ["discover", "quiz", "prayer"];
    if (s.sort) acts.push("sort");
    if (s.timeline) acts.push("timeline");
    if (s.fillblank) acts.push("fillblank");
    return acts;
  });

  // Compute completion status per user per week
  const grid = allProgress.map((prog) => ({
    userId: prog.userId,
    stars: prog.stars,
    weeks: sessions.map((session, si) => {
      const acts = sessionActs[si];
      const done = acts.filter(
        (a) => !!prog.completed[`${session.week}-${a}`]
      ).length;
      return { done, total: acts.length };
    }),
  }));

  if (users.length === 0) {
    return (
      <div style={{ animation: "su .4s ease", textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>📊</div>
        <p style={{ color: "var(--text-tertiary)", fontSize: 14 }}>
          No students enrolled yet. Add students first.
        </p>
      </div>
    );
  }

  return (
    <div style={{ animation: "su .4s ease" }}>
      <h2
        style={{
          fontFamily: displayFont,
          fontSize: 22,
          color: "var(--text-primary)",
          margin: "0 0 14px",
        }}
      >
        Student Progress
      </h2>

      {/* Scrollable grid */}
      <div
        style={{
          overflowX: "auto",
          borderRadius: 12,
          border: "1px solid var(--border-default)",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            minWidth: "100%",
            fontSize: 11,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  position: "sticky",
                  left: 0,
                  background: "var(--table-bg-even)",
                  zIndex: 2,
                  padding: "8px 10px",
                  textAlign: "left",
                  color: "var(--text-tertiary)",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: 1,
                  borderBottom: "1px solid var(--border-default)",
                  minWidth: 110,
                }}
              >
                STUDENT
              </th>
              <th
                style={{
                  padding: "8px 6px",
                  color: "#D4A843",
                  fontWeight: 700,
                  fontSize: 10,
                  borderBottom: "1px solid var(--border-default)",
                  textAlign: "center",
                }}
              >
                ⭐
              </th>
              {sessions.map((s) => (
                <th
                  key={s.week}
                  style={{
                    padding: "8px 4px",
                    textAlign: "center",
                    color: "var(--text-faint)",
                    fontWeight: 700,
                    fontSize: 9,
                    borderBottom: "1px solid var(--border-default)",
                    minWidth: 28,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      background: PILLAR_COLORS[s.pillar],
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {s.week}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.map((row, ri) => {
              const user = users.find((u) => u.id === row.userId);
              if (!user) return null;
              return (
                <tr key={user.id}>
                  <td
                    style={{
                      position: "sticky",
                      left: 0,
                      background: ri % 2 ? "var(--table-bg-odd)" : "var(--table-bg-even)",
                      zIndex: 1,
                      padding: "7px 10px",
                      borderBottom: "1px solid var(--border-light)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontSize: 14 }}>
                        {user.avatarEmoji}
                      </span>
                      <span
                        style={{
                          color: "var(--text-primary)",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "7px 6px",
                      textAlign: "center",
                      color: "#D4A843",
                      fontWeight: 700,
                      fontSize: 11,
                      borderBottom: "1px solid var(--border-light)",
                      background: ri % 2 ? "var(--table-bg-odd)" : "var(--table-bg-even)",
                    }}
                  >
                    {row.stars}
                  </td>
                  {row.weeks.map((w, wi) => {
                    const pct = w.total > 0 ? w.done / w.total : 0;
                    let bg = "transparent";
                    let content = "";
                    if (pct === 0) {
                      bg = "transparent";
                      content = "○";
                    } else if (pct < 1) {
                      bg = "rgba(212,168,67,.12)";
                      content = "◐";
                    } else {
                      bg = "rgba(109,184,123,.12)";
                      content = "●";
                    }
                    return (
                      <td
                        key={wi}
                        style={{
                          padding: "7px 4px",
                          textAlign: "center",
                          fontSize: 12,
                          color:
                            pct === 1
                              ? "#6DB87B"
                              : pct > 0
                              ? "#D4A843"
                              : "var(--text-invisible)",
                          borderBottom: "1px solid var(--border-light)",
                          background:
                            ri % 2 ? "var(--table-bg-odd)" : "var(--table-bg-even)",
                        }}
                        title={`${w.done}/${w.total} activities`}
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        {[
          { symbol: "○", label: "Not started", color: "var(--text-ghost)" },
          { symbol: "◐", label: "In progress", color: "#D4A843" },
          { symbol: "●", label: "Complete", color: "#6DB87B" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: item.color, fontSize: 12 }}>
              {item.symbol}
            </span>
            <span
              style={{ color: "var(--text-faint)", fontSize: 10 }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
