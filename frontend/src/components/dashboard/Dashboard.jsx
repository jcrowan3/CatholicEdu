import { useState, useEffect } from "react";
import { getUsers, getSessions, getAllProgress, getProgramName, getPillarColors } from "../../data/store";
import { useAuth } from "../../context/AuthContext";
import { api, hasToken } from "../../api/client";
import { GRADES } from "../../data/grades";
import ClassSelector from "./ClassSelector";

const displayFont = "'Lilita One', cursive";

export default function Dashboard({ grade, classId, onClassChange, onGradeChange, onNavigate }) {
  const auth = useAuth();
  const isOnline = auth.isAuthenticated && auth.isOnline;

  // Online: grades list for grade picker
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(grade);

  // Data state (populated from API or store.js)
  const [users, setUsers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [allProgress, setAllProgress] = useState([]);
  const [programName, setProgramName] = useState("");

  const effectiveGrade = selectedGrade || grade;
  const PILLAR_COLORS = effectiveGrade ? getPillarColors(effectiveGrade) : {};
  const gradeInfo = GRADES.find((g) => g.grade === effectiveGrade);

  // Load grades for online catechist
  useEffect(() => {
    if (isOnline) {
      api.getGrades().then((data) => {
        setGrades(data);
        if (!effectiveGrade && data.length > 0) {
          setSelectedGrade(data[0].grade);
          onGradeChange?.(data[0].grade);
        }
      }).catch(() => {});

      api.getParish().then((p) => setProgramName(p.name)).catch(() => {});
    }
  }, [isOnline]);

  // Load data when grade/class changes
  useEffect(() => {
    if (!effectiveGrade) return;

    if (isOnline && classId) {
      api.getStudents(effectiveGrade, classId)
        .then((data) => {
          setUsers(data.map((s) => ({
            id: s.id,
            name: s.display_name,
            avatarEmoji: s.avatar_emoji,
            role: "student",
          })));
        })
        .catch(() => setUsers([]));

      api.getClassProgressGrid(effectiveGrade, classId)
        .then((gridData) => {
          const progress = gridData.students.map((s) => {
            const completed = {};
            for (const [week, activities] of Object.entries(s.week_progress)) {
              for (const [activity, actStars] of Object.entries(activities)) {
                completed[`${week}-${activity}`] = { stars: actStars };
              }
            }
            return { userId: s.student_id, stars: s.total_stars, completed };
          });
          setAllProgress(progress);
        })
        .catch(() => setAllProgress([]));
    } else if (!isOnline) {
      const localUsers = getUsers(effectiveGrade, classId);
      setUsers(localUsers);
      setAllProgress(
        getAllProgress(effectiveGrade, classId, localUsers.map((u) => u.id))
      );
    }

    setSessions(getSessions(effectiveGrade));

    if (!isOnline) {
      setProgramName(getProgramName(effectiveGrade));
    }
  }, [effectiveGrade, classId, isOnline]);

  const handleGradeSelect = (g) => {
    setSelectedGrade(g);
    onGradeChange?.(g);
    onClassChange?.(null);
  };

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
            color: "var(--text-primary)",
            margin: "0 0 4px",
          }}
        >
          {programName || "Catechist Dashboard"}
        </h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: 12 }}>
          {gradeInfo ? `${gradeInfo.title} — ${gradeInfo.subtitle}` : ""}
        </p>
      </div>

      {/* Grade picker for online catechists */}
      {isOnline && grades.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            GRADE
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {grades.map((g) => (
              <button
                key={g.grade}
                onClick={() => handleGradeSelect(g.grade)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  background:
                    g.grade === effectiveGrade
                      ? "rgba(212,168,67,.15)"
                      : "var(--surface-card)",
                  border:
                    g.grade === effectiveGrade
                      ? "2px solid var(--accent-gold)"
                      : "1px solid var(--border-default)",
                  color:
                    g.grade === effectiveGrade
                      ? "var(--accent-gold)"
                      : "var(--text-faint)",
                }}
              >
                Grade {g.grade}
              </button>
            ))}
          </div>
        </div>
      )}

      {effectiveGrade && (
        <ClassSelector grade={effectiveGrade} classId={classId} onClassChange={onClassChange} />
      )}

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
              background: "var(--surface-elevated)",
              borderRadius: 10,
              padding: "12px 10px",
              textAlign: "center",
              border: "1px solid var(--border-default)",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 2 }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: displayFont,
                fontSize: 20,
                color: "var(--text-primary)",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "var(--text-faint)",
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
          color: "var(--text-muted)",
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
            stat && stat.total > 0
              ? Math.round((stat.completed / stat.total) * 100)
              : 0;
          return (
            <div
              key={session.week}
              className="ch"
              onClick={() => onNavigate("admin-session", session.week)}
              style={{
                background: "var(--surface-card)",
                borderRadius: 10,
                padding: "10px 10px 8px",
                border: "1px solid var(--border-default)",
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
                    color: "var(--text-primary)",
                  }}
                >
                  {session.week}
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "var(--text-primary)",
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
              {users.length > 0 && stat && (
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
                      color: "var(--text-faint)",
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
