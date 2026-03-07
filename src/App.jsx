import { useState, useCallback } from "react";
import {
  getSessions,
  getPin,
  migrateOldKeys,
  seedDemoStudent,
  getPillarColors,
  ensureDefaultClass,
  getActiveClassId,
  setActiveClassId,
} from "./data/store";
import { useProgress } from "./hooks/useProgress";
import { useBookmarks } from "./hooks/useBookmarks";
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
import CatechistSetup from "./components/auth/CatechistSetup";
import LoginScreen from "./components/auth/LoginScreen";
import Dashboard from "./components/dashboard/Dashboard";
import UserManager from "./components/dashboard/UserManager";
import ProgressGrid from "./components/dashboard/ProgressGrid";
import SessionEditor from "./components/admin/SessionEditor";

// Run migration once on app load
migrateOldKeys();

export default function App() {
  // Grade selection
  const [grade, setGrade] = useState(null);
  const [classId, setClassId] = useState(null);

  // Mode: "landing" | "setup" | "login" | "student" | "catechist"
  const [mode, setMode] = useState("landing");
  const [activeUser, setActiveUser] = useState(null);
  const [sessionIdx, setSessionIdx] = useState(0);
  const [screen, setScreen] = useState("home");
  const [sessions, setSessions] = useState([]);
  const [editWeek, setEditWeek] = useState(null);

  const { stars, earn, isDone } = useProgress(grade, classId, activeUser?.id);
  const { toggleBookmark, isBookmarked, getAllBookmarks } = useBookmarks(
    grade,
    classId,
    activeUser?.id
  );

  const session = sessions[sessionIdx];
  const pillarColors = grade ? getPillarColors(grade) : {};

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

  const handleSelectGrade = (g) => {
    setGrade(g);
    setSessions(getSessions(g));
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
    setActiveUser(null);
    setMode("login");
    setScreen("home");
  };

  const handleClassChange = (newClassId) => {
    setClassId(newClassId);
    setActiveUser(null);
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
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-gradient)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {background}

      {/* ─── Landing Page ─── */}
      {mode === "landing" && (
        <LandingPage onSelectGrade={handleSelectGrade} />
      )}

      {/* ─── Setup Mode ─── */}
      {mode === "setup" && (
        <CatechistSetup
          grade={grade}
          onComplete={() => {
            const cid = ensureDefaultClass(grade);
            setClassId(cid);
            seedDemoStudent(grade, cid);
            setSessions(getSessions(grade));
            setMode("login");
          }}
        />
      )}

      {/* ─── Login Mode ─── */}
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
                grade={grade}
                classId={classId}
                onClassChange={handleClassChange}
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
                grade={grade}
                classId={classId}
                onBack={() => go("dashboard")}
                onRefresh={() => {}}
              />
            )}

            {screen === "admin-progress" && (
              <ProgressGrid
                grade={grade}
                classId={classId}
                onBack={() => go("dashboard")}
              />
            )}

            {screen === "admin-session" && editWeek && (
              <SessionEditor
                grade={grade}
                weekNum={editWeek}
                onBack={() => go("dashboard")}
                onSessionsChange={(updated) => setSessions(updated)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
