import { getUsers, getSessions, getAllProgress, getProgramName, PILLAR_COLORS } from "../../data/store";

const displayFont = "'Lilita One', cursive";

export default function Dashboard({ onNavigate }) {
  const users = getUsers();
  const sessions = getSessions();
  const programName = getProgramName();
  const allProgress = getAllProgress(users.map((u) => u.id));

  const totalActivities = sessions.length * 4; // discover + secondary + quiz + prayer
  const totalPossibleStars = sessions.reduce((sum, s) => {
    let sv = 2 + 5 + 1; // discover + quiz + prayer
    if (s.sort) sv += 3;
    if (s.timeline) sv += 3;
    if (s.fillblank) sv += 3;
    return sum + sv;
  }, 0);

  // Compute per-week completion stats
  const weekStats = sessions.map((session) => {
    const actIds = ["discover", "quiz", "prayer"];
    if (session.sort) actIds.push("sort");
    if (session.timeline) actIds.push("timeline");
    if (session.fillblank) actIds.push("fillblank");

    let completedCount = 0;
    for (const prog of allProgress) {
      const allDone = actIds.every(
        (a) => !!prog.completed[`${session.week}-${a}`]
      );
      if (allDone) completedCount++;
    }
    return { week: session.week, completed: completedCount, total: users.length };
  });

  // Overall stats
  const avgStars =
    users.length > 0
      ? Math.round(
          allProgress.reduce((s, p) => s + p.stars, 0) / users.length
        )
      : 0;

  return (
    <div style={{ animation: "su .4s ease" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 22,
            color: "#fff",
            margin: "0 0 4px",
          }}
        >
          {programName || "Catechist Dashboard"}
        </h1>
        <p style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>
          Grade 3 — The Church &amp; the Sacraments
        </p>
      </div>

      {/* Quick stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          marginBottom: 20,
        }}
      >
        {[
          { label: "Students", value: users.length, icon: "👥" },
          { label: "Avg Stars", value: avgStars, icon: "⭐" },
          { label: "Weeks", value: sessions.length, icon: "📖" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "rgba(255,255,255,.05)",
              borderRadius: 10,
              padding: "12px 10px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 2 }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: displayFont,
                fontSize: 20,
                color: "#fff",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,.4)",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <button
          className="ch"
          onClick={() => onNavigate("admin-users")}
          style={{
            padding: "14px 12px",
            borderRadius: 10,
            background: "rgba(74,144,217,.1)",
            border: "1px solid rgba(74,144,217,.2)",
            color: "#4A90D9",
            fontFamily: displayFont,
            fontSize: 13,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          👥 Manage Students
        </button>
        <button
          className="ch"
          onClick={() => onNavigate("admin-progress")}
          style={{
            padding: "14px 12px",
            borderRadius: 10,
            background: "rgba(212,168,67,.1)",
            border: "1px solid rgba(212,168,67,.2)",
            color: "#D4A843",
            fontFamily: displayFont,
            fontSize: 13,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          📊 View Progress
        </button>
      </div>

      {/* 30-week overview */}
      <p
        style={{
          color: "rgba(255,255,255,.45)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 8,
        }}
      >
        ALL SESSIONS
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
          gap: 7,
        }}
      >
        {sessions.map((session, i) => {
          const stat = weekStats[i];
          const pct =
            stat.total > 0
              ? Math.round((stat.completed / stat.total) * 100)
              : 0;
          return (
            <div
              key={session.week}
              className="ch"
              onClick={() => onNavigate("admin-session", session.week)}
              style={{
                background: "rgba(255,255,255,.04)",
                borderRadius: 10,
                padding: "10px 10px 8px",
                border: "1px solid rgba(255,255,255,.06)",
                animation: `pi .25s ease ${i * 0.02}s both`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: PILLAR_COLORS[session.pillar],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {session.week}
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {session.title}
                </div>
              </div>
              {users.length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      flex: 1,
                      height: 3,
                      borderRadius: 2,
                      background: "rgba(255,255,255,.07)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: "#6DB87B",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,.35)",
                      fontSize: 9,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat.completed}/{stat.total}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
