import { lazy, Suspense, useState, useCallback, useEffect } from "react";
import {
  getSessions,
  loadSessions,
  getPin,
  migrateOldKeys,
  seedDemoStudent,
  getPillarColors,
  ensureDefaultClass,
} from "./data/store";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/auth";
import { useProgress } from "./hooks/useProgress";
import { useBookmarks } from "./hooks/useBookmarks";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import LandingPage from "./components/landing/LandingPage";
import TopBar from "./components/session/TopBar";
import SessionHome from "./components/session/SessionHome";
import SessionPicker from "./components/session/SessionPicker";
import BookmarksScreen from "./components/session/BookmarksScreen";
import VocabularyScreen from "./components/session/VocabularyScreen";
import TakeHome from "./components/session/TakeHome";
import Discover from "./components/activities/Discover";
import Sort from "./components/activities/Sort";
import Timeline from "./components/activities/Timeline";
import FillBlank from "./components/activities/FillBlank";
import Quiz from "./components/activities/Quiz";
import Prayer from "./components/activities/Prayer";
import ConnectionBanner from "./components/system/ConnectionBanner";

const CatechistSetup = lazy(() => import("./components/auth/CatechistSetup"));
const LoginScreen = lazy(() => import("./components/auth/LoginScreen"));
const OnlineAuth = lazy(() => import("./components/auth/OnlineAuth"));
const JoinClass = lazy(() => import("./components/auth/JoinClass"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const UserManager = lazy(() => import("./components/dashboard/UserManager"));
const ProgressGrid = lazy(() => import("./components/dashboard/ProgressGrid"));
const SessionEditor = lazy(() => import("./components/admin/SessionEditor"));

// Run migration once on app load
migrateOldKeys();

function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: 240,
        display: "grid",
        placeItems: "center",
        color: "var(--text-tertiary)",
        fontWeight: 700,
      }}
    >
      Loading toolkit…
    </div>
  );
}

function AppInner() {
  const auth = useAuth();
  const isOnline = useOnlineStatus();

  // Grade selection
  const [grade, setGrade] = useState(null);
  const [classId, setClassId] = useState(null);

  // Mode: "landing" | "setup" | "login" | "student" | "catechist"
  //       | "online-auth" | "join-class"
  const [mode, setMode] = useState(() => {
    // If already authenticated, skip to the right mode
    if (auth.isAuthenticated) {
      return auth.isCatechist ? "catechist" : "student";
    }
    return "landing";
  });

  const [activeUser, setActiveUser] = useState(() => {
    // If authenticated as catechist, set activeUser immediately
    if (auth.isAuthenticated && auth.isCatechist) {
      return { id: null, name: "Catechist", role: "catechist" };
    }
    // If authenticated as student, set activeUser from JWT
    if (auth.isAuthenticated && auth.isStudent) {
      return {
        id: auth.user.id,
        name: "Student",
        role: "student",
        avatarEmoji: "😊",
      };
    }
    return null;
  });

  const [sessionIdx, setSessionIdx] = useState(0);
  const [screen, setScreen] = useState(() => {
    if (auth.isAuthenticated && auth.isCatechist) return "dashboard";
    return "home";
  });
  const [sessions, setSessions] = useState(() => {
    // If authenticated with a grade, load sessions
    if (auth.isAuthenticated && auth.user?.grade) {
      return getSessions(auth.user.grade);
    }
    return [];
  });
  const [editWeek, setEditWeek] = useState(null);

  // Derive grade from auth for online students
  const effectiveGrade = grade || (auth.isAuthenticated ? auth.user?.grade : null);

  useEffect(() => {
    if (!effectiveGrade) return undefined;

    let cancelled = false;
    loadSessions(effectiveGrade).then((loadedSessions) => {
      if (!cancelled) setSessions(loadedSessions);
    });
    return () => {
      cancelled = true;
    };
  }, [effectiveGrade]);

  const { stars, earn, isDone } = useProgress(effectiveGrade, classId, activeUser?.id);
  const { toggleBookmark, isBookmarked, getAllBookmarks } = useBookmarks(
    effectiveGrade,
    classId,
    activeUser?.id
  );

  const session = sessions[sessionIdx];
  const pillarColors = effectiveGrade ? getPillarColors(effectiveGrade) : {};

  const earnForSession = useCallback(
    (activity, amount) => session && earn(session.week, activity, amount),
    [earn, session]
  );

  const checkDone = useCallback(
    (activity) => (session ? isDone(session.week, activity) : false),
    [isDone, session]
  );

  const go = (s, extra) => {
    // Handle related session navigation
    if (s === "related" && extra != null) {
      setSessionIdx(extra);
      window.scrollTo(0, 0);
      setScreen("home");
      return;
    }
    window.scrollTo(0, 0);
    setScreen(s);
  };

  // ─── Offline flow handlers (unchanged) ───

  const handleSelectGrade = async (g) => {
    setGrade(g);
    setSessions(await loadSessions(g));
    const pin = getPin(g);
    if (!pin) {
      setMode("setup");
    } else {
      // Ensure a class exists and set it active
      const cid = ensureDefaultClass(g);
      setClassId(cid);
      setMode("login");
    }
  };

  const handleBackToGrades = () => {
    setGrade(null);
    setClassId(null);
    setMode("landing");
    setActiveUser(null);
    setScreen("home");
    setSessionIdx(0);
    setSessions([]);
  };

  const switchUser = () => {
    if (auth.isAuthenticated) {
      // Online: logout and go to landing
      auth.logout();
      setGrade(null);
      setClassId(null);
      setActiveUser(null);
      setMode("landing");
      setScreen("home");
      setSessionIdx(0);
      setSessions([]);
    } else {
      setActiveUser(null);
      setMode("login");
      setScreen("home");
    }
  };

  const handleClassChange = useCallback((newClassId) => {
    setClassId(newClassId);
    setActiveUser(null);
  }, []);

  const handleDashboardGradeChange = useCallback(async (nextGrade) => {
    setGrade(nextGrade);
    setSessions(await loadSessions(nextGrade));
  }, []);

  // ─── Online flow handlers ───

  const handleOnlineAuthComplete = () => {
    // After catechist login/register — userData has grade info if available
    setActiveUser({ id: null, name: "Catechist", role: "catechist" });
    setMode("catechist");
    setScreen("dashboard");
  };

  const handleJoinClassComplete = async (studentData) => {
    // After student join — studentData has the student info from JWT
    const g = auth.user?.grade;
    if (g) {
      setGrade(g);
      setClassId(auth.user?.classId);
      setSessions(await loadSessions(g));
    }
    setActiveUser({
      id: auth.user?.id,
      name: studentData?.displayName || "Student",
      role: "student",
      avatarEmoji: studentData?.avatarEmoji || "😊",
    });
    setMode("student");
    setScreen("home");
  };

  const background = (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Lilita+One&display=swap"
        rel="stylesheet"
      />
      {/* Twinkling stars background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          opacity: "var(--star-dot-opacity)",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 2,
              height: 2,
              borderRadius: "50%",
              background: "var(--star-dot-color)",
              animation: `tw ${2 + (i % 3)}s ease-in-out infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </>
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-gradient)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {background}
      <ConnectionBanner visible={!isOnline} />

      <Suspense fallback={<PageLoader />}>

      {/* ─── Landing Page ─── */}
      {mode === "landing" && (
        <LandingPage
          onSelectGrade={handleSelectGrade}
          onSignIn={() => setMode("online-auth")}
          onJoinClass={() => setMode("join-class")}
        />
      )}

      {/* ─── Online Auth (catechist login/register) ─── */}
      {mode === "online-auth" && (
        <OnlineAuth
          onComplete={handleOnlineAuthComplete}
          onBack={handleBackToGrades}
        />
      )}

      {/* ─── Join Class (student join code flow) ─── */}
      {mode === "join-class" && (
        <JoinClass
          onComplete={handleJoinClassComplete}
          onBack={handleBackToGrades}
        />
      )}

      {/* ─── Setup Mode (offline) ─── */}
      {mode === "setup" && (
        <CatechistSetup
          grade={grade}
          onComplete={async () => {
            const cid = ensureDefaultClass(grade);
            setClassId(cid);
            seedDemoStudent(grade, cid);
            setSessions(await loadSessions(grade));
            setMode("login");
          }}
        />
      )}

      {/* ─── Login Mode (offline) ─── */}
      {mode === "login" && (
        <LoginScreen
          grade={grade}
          classId={classId}
          onSelectStudent={(user) => {
            setActiveUser(user);
            setMode("student");
            setScreen("home");
          }}
          onCatechistLogin={() => {
            setActiveUser({ id: null, name: "Catechist", role: "catechist" });
            setMode("catechist");
            setScreen("dashboard");
          }}
          onBackToGrades={handleBackToGrades}
        />
      )}

      {/* ─── Student Mode ─── */}
      {mode === "student" && session && (
        <>
          <TopBar
            session={session}
            screen={screen}
            stars={stars}
            mode="student"
            activeUser={activeUser}
            onBack={() => go("home")}
            onPicker={() => go("picker")}
            onSwitchUser={switchUser}
            onBookmarks={() => go("bookmarks")}
            onVocabulary={() => go("vocabulary")}
          />
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              padding: "16px 14px 60px",
            }}
          >
            {screen === "picker" && (
              <SessionPicker
                sessions={sessions}
                current={sessionIdx}
                pillarColors={pillarColors}
                onPick={(i) => {
                  setSessionIdx(i);
                  go("home");
                }}
              />
            )}

            {screen === "home" && (
              <SessionHome
                session={session}
                pillarColors={pillarColors}
                onNavigate={go}
                isDone={checkDone}
                allSessions={sessions}
              />
            )}

            {screen === "discover" && (
              <Discover
                data={session.discover}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
                week={session.week}
                sessionPillar={session.pillar}
                toggleBookmark={toggleBookmark}
                isBookmarked={isBookmarked}
              />
            )}

            {screen === "sort" && session.sort && (
              <Sort
                key={`sort-${session.week}`}
                data={session.sort}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
              />
            )}

            {screen === "timeline" && session.timeline && (
              <Timeline
                key={`timeline-${session.week}`}
                data={session.timeline}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
              />
            )}

            {screen === "fillblank" && session.fillblank && (
              <FillBlank
                key={`fillblank-${session.week}`}
                data={session.fillblank}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
              />
            )}

            {screen === "quiz" && (
              <Quiz
                key={`quiz-${session.week}`}
                data={session.quiz}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
              />
            )}

            {screen === "prayer" && (
              <Prayer
                data={session.prayer}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
              />
            )}

            {screen === "bookmarks" && (
              <BookmarksScreen
                bookmarks={getAllBookmarks()}
                sessions={sessions}
                pillarColors={pillarColors}
                onNavigateToSession={(weekIdx) => {
                  setSessionIdx(weekIdx);
                  go("home");
                }}
                onBack={() => go("home")}
              />
            )}

            {screen === "vocabulary" && (
              <VocabularyScreen
                sessions={sessions}
                pillarColors={pillarColors}
                onBack={() => go("home")}
              />
            )}

            {screen === "takehome" && (
              <TakeHome
                session={session}
                onBack={() => go("home")}
              />
            )}
          </div>
        </>
      )}

      {/* ─── Catechist Mode ─── */}
      {mode === "catechist" && (
        <>
          <TopBar
            screen={screen}
            stars={0}
            mode="catechist"
            onBack={() => go("dashboard")}
            onDashboard={() => go("dashboard")}
            onSwitchUser={switchUser}
          />
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              padding: "16px 14px 60px",
            }}
          >
            {screen === "dashboard" && (
              <Dashboard
                grade={effectiveGrade || grade}
                classId={classId}
                onClassChange={handleClassChange}
                onGradeChange={handleDashboardGradeChange}
                onNavigate={(target, weekNum) => {
                  if (target === "admin-users") go("admin-users");
                  else if (target === "admin-progress") go("admin-progress");
                  else if (target === "admin-session") {
                    setEditWeek(weekNum);
                    go("admin-session");
                  }
                }}
              />
            )}

            {screen === "admin-users" && (
              <UserManager
                grade={effectiveGrade || grade}
                classId={classId}
                onBack={() => go("dashboard")}
                onRefresh={() => {}}
              />
            )}

            {screen === "admin-progress" && (
              <ProgressGrid
                grade={effectiveGrade || grade}
                classId={classId}
              />
            )}

            {screen === "admin-session" && editWeek && (
              <SessionEditor
                grade={effectiveGrade || grade}
                weekNum={editWeek}
                onBack={() => go("dashboard")}
                onSessionsChange={(updated) => setSessions(updated)}
              />
            )}
          </div>
        </>
      )}
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
