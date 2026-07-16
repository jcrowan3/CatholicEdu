import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { useState, useEffect } from "react";
import { getUsers, getSessions, getAllProgress, getProgramName, getPillarColors } from "../../data/store";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/client";
import { GRADES } from "../../data/grades";
import ClassSelector from "./ClassSelector";
import { generateStandardsCoveragePdf } from "../../utils/generateStandardsCoveragePdf";


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
            parentEmail: s.parent_email || "",
            pickupContactNotes: s.pickup_contact_notes || "",
            mediaPermissionGranted: Boolean(s.media_permission_granted),
            allergyPrivacyFlags: s.allergy_privacy_flags || "",
            weeklyDigestPermission: Boolean(s.weekly_digest_permission),
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

  const hasProgress =
    allProgress.some((prog) => Object.keys(prog.completed || {}).length > 0);
  const contactReady =
    users.length > 0 && users.every((user) => (user.parentEmail || "").trim());
  const permissionReviewReady =
    users.length > 0 &&
    users.every((user) =>
      user.mediaPermissionGranted ||
      (user.allergyPrivacyFlags || "").trim() ||
      (user.pickupContactNotes || "").trim()
    );
  const readinessItems = [
    {
      key: "grade",
      label: "Grade program configured",
      detail: gradeInfo ? gradeInfo.title : "Choose a grade level",
      ready: Boolean(effectiveGrade),
    },
    {
      key: "class",
      label: "Pilot class selected",
      detail: classId ? "Class workspace is active" : "Create or select a class",
      ready: Boolean(classId),
    },
    {
      key: "roster",
      label: "Student roster seeded",
      detail: `${users.length} ${users.length === 1 ? "student" : "students"} loaded`,
      ready: users.length > 0,
      action: "admin-users",
    },
    {
      key: "family",
      label: "Family contact fields complete",
      detail: contactReady ? "Parent emails are present" : "Add parent email details",
      ready: contactReady,
      action: "admin-users",
    },
    {
      key: "permissions",
      label: "Pickup and permission notes reviewed",
      detail: permissionReviewReady ? "Roster notes are present" : "Record media, pickup, or allergy notes",
      ready: permissionReviewReady,
      action: "admin-users",
    },
    {
      key: "curriculum",
      label: "Curriculum sessions available",
      detail: `${sessions.length} ${sessions.length === 1 ? "session" : "sessions"} ready`,
      ready: sessions.length > 0,
    },
    {
      key: "standards",
      label: "Standards evidence packet ready",
      detail: sessions.length > 0 ? "Coverage PDF can be generated" : "Load sessions first",
      ready: sessions.length > 0,
    },
    {
      key: "progress",
      label: "Progress tracking verified",
      detail: hasProgress ? "At least one activity has progress" : "Progress grid is ready for first check-in",
      ready: hasProgress || (users.length > 0 && sessions.length > 0),
      action: "admin-progress",
    },
  ];
  const readinessDone = readinessItems.filter((item) => item.ready).length;
  const readinessPct = Math.round((readinessDone / readinessItems.length) * 100);

  // ─── Add Grade (online) ───
  const [addingGrade, setAddingGrade] = useState(false);
  const [newGradeNum, setNewGradeNum] = useState("");
  const [newGradeName, setNewGradeName] = useState("");

  const handleAddGrade = async () => {
    const num = parseInt(newGradeNum);
    if (!num || num < 1 || num > 12) return;
    try {
      const created = await api.createGrade(num, newGradeName.trim() || null);
      setGrades((prev) => [...prev, created]);
      setSelectedGrade(num);
      onGradeChange?.(num);
      setAddingGrade(false);
      setNewGradeNum("");
      setNewGradeName("");
    } catch (err) {
      alert(err.message || "Failed to create grade");
    }
  };

  // Need setup? (online catechist with no grades)
  const needsSetup = isOnline && grades.length === 0 && !effectiveGrade;

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

      {/* ─── First-time setup for online catechists ─── */}
      {needsSetup && (
        <div
          style={{
            background: "var(--surface-card)",
            borderRadius: 14,
            padding: "28px 20px",
            border: "1px solid var(--border-default)",
            textAlign: "center",
            marginBottom: 20,
            animation: "pi .4s ease",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
          <h2
            style={{
              fontFamily: displayFont,
              fontSize: 20,
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            Welcome! Let's set up your first grade.
          </h2>
          <p style={{ color: "var(--text-tertiary)", fontSize: 13, marginBottom: 20 }}>
            Choose a grade level, then create a class. Students will use a join
            code to connect.
          </p>

          <div style={{ maxWidth: 300, margin: "0 auto", textAlign: "left" }}>
            <label
              style={{
                color: "var(--text-tertiary)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                display: "block",
                marginBottom: 4,
              }}
            >
              GRADE LEVEL
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 6,
                marginBottom: 14,
              }}
            >
              {GRADES.filter((g) => g.status === "active").map((g) => (
                <button
                  key={g.grade}
                  onClick={() => setNewGradeNum(String(g.grade))}
                  style={{
                    padding: "8px 0",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    background:
                      newGradeNum === String(g.grade)
                        ? "rgba(212,168,67,.2)"
                        : "var(--surface-input)",
                    border:
                      newGradeNum === String(g.grade)
                        ? "2px solid var(--accent-gold)"
                        : "1px solid var(--border-default)",
                    color:
                      newGradeNum === String(g.grade)
                        ? "var(--accent-gold)"
                        : "var(--text-faint)",
                  }}
                >
                  {g.grade}
                </button>
              ))}
            </div>

            <label
              style={{
                color: "var(--text-tertiary)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                display: "block",
                marginBottom: 4,
              }}
            >
              PROGRAM NAME (OPTIONAL)
            </label>
            <input
              type="text"
              value={newGradeName}
              onChange={(e) => setNewGradeName(e.target.value)}
              placeholder="e.g. Sacraments Prep"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid var(--border-strong)",
                background: "var(--surface-input)",
                color: "var(--text-primary)",
                fontSize: 14,
                fontFamily: "inherit",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: 14,
              }}
            />

            <button
              onClick={handleAddGrade}
              disabled={!newGradeNum}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 10,
                background: newGradeNum
                  ? "linear-gradient(135deg, #4A90D9, #3A70B9)"
                  : "var(--surface-input)",
                color: newGradeNum ? "#fff" : "var(--text-ghost)",
                fontFamily: displayFont,
                fontSize: 16,
                border: "none",
                cursor: newGradeNum ? "pointer" : "default",
              }}
            >
              Create Grade
            </button>
          </div>
        </div>
      )}

      {/* Grade picker for online catechists (with add button) */}
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
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
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
            {!addingGrade ? (
              <button
                onClick={() => setAddingGrade(true)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 8,
                  background: "var(--surface-input)",
                  border: "1px solid var(--border-medium)",
                  color: "var(--accent-green)",
                  fontSize: 10,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                + Add Grade
              </button>
            ) : (
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <select
                  value={newGradeNum}
                  onChange={(e) => setNewGradeNum(e.target.value)}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    border: "1px solid var(--border-strong)",
                    background: "var(--surface-input)",
                    color: "var(--text-primary)",
                    fontSize: 12,
                  }}
                >
                  <option value="">Grade…</option>
                  {GRADES.filter((g) => g.status === "active" && !grades.find((eg) => eg.grade === g.grade)).map((g) => (
                    <option key={g.grade} value={g.grade}>Grade {g.grade}</option>
                  ))}
                </select>
                <button
                  onClick={handleAddGrade}
                  disabled={!newGradeNum}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "#4A90D9",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => { setAddingGrade(false); setNewGradeNum(""); }}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "var(--surface-input)",
                    color: "var(--text-ghost)",
                    fontSize: 11,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
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

      {/* Pilot readiness checklist */}
      <div
        style={{
          background: "var(--surface-card)",
          borderRadius: 10,
          padding: "14px 14px 12px",
          border: "1px solid var(--border-default)",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                margin: "0 0 3px",
              }}
            >
              PILOT READINESS
            </p>
            <h2
              style={{
                fontFamily: displayFont,
                fontSize: 18,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Parish launch checklist
            </h2>
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: `conic-gradient(#6DB87B ${readinessPct * 3.6}deg, rgba(255,255,255,.08) 0deg)`,
              display: "grid",
              placeItems: "center",
              flex: "0 0 auto",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--surface-card)",
                display: "grid",
                placeItems: "center",
                color: "var(--text-primary)",
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              {readinessPct}%
            </div>
          </div>
        </div>
        <div
          style={{
            height: 5,
            borderRadius: 99,
            background: "rgba(255,255,255,.07)",
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${readinessPct}%`,
              background: "linear-gradient(90deg, #6DB87B, #D4A843)",
              borderRadius: 99,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 8,
          }}
        >
          {readinessItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => item.action && onNavigate(item.action)}
              disabled={!item.action}
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr",
                gap: 8,
                alignItems: "start",
                minHeight: 64,
                padding: "10px 9px",
                borderRadius: 8,
                border: item.ready
                  ? "1px solid rgba(109,184,123,.32)"
                  : "1px solid var(--border-default)",
                background: item.ready
                  ? "rgba(109,184,123,.1)"
                  : "var(--surface-input)",
                color: "inherit",
                textAlign: "left",
                cursor: item.action ? "pointer" : "default",
                opacity: item.action || item.ready ? 1 : 0.8,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: item.ready
                    ? "rgba(109,184,123,.2)"
                    : "rgba(255,255,255,.08)",
                  color: item.ready ? "#6DB87B" : "var(--text-ghost)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 900,
                  fontSize: 13,
                  lineHeight: 1,
                }}
              >
                {item.ready ? "✓" : "•"}
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    color: "var(--text-primary)",
                    fontSize: 12,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    marginBottom: 3,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    display: "block",
                    color: "var(--text-faint)",
                    fontSize: 10,
                    lineHeight: 1.25,
                  }}
                >
                  {item.detail}
                </span>
              </span>
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 12,
            color: "var(--text-faint)",
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          <span>
            {readinessDone} of {readinessItems.length} checks complete
          </span>
          <span>{readinessPct === 100 ? "Ready for pilot launch" : "Pilot prep in progress"}</span>
        </div>
      </div>

      {/* Quick actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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
        <button
          className="ch"
          onClick={() =>
            generateStandardsCoveragePdf({
              grade: effectiveGrade,
              gradeInfo,
              sessions,
            })
          }
          disabled={!effectiveGrade || sessions.length === 0}
          style={{
            padding: "14px 12px",
            borderRadius: 10,
            background: "rgba(109,184,123,.1)",
            border: "1px solid rgba(109,184,123,.2)",
            color: "#6DB87B",
            fontFamily: displayFont,
            fontSize: 13,
            textAlign: "center",
            cursor: sessions.length > 0 ? "pointer" : "default",
            opacity: sessions.length > 0 ? 1 : 0.55,
          }}
        >
          📄 Standards PDF
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
