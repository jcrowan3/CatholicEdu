import { useState, useCallback } from "react";
import { getSessions, getPin, getUsers } from "./data/store";
import { useProgress } from "./hooks/useProgress";
import TopBar from "./components/session/TopBar";
import SessionHome from "./components/session/SessionHome";
import SessionPicker from "./components/session/SessionPicker";
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

export default function App() {
  // Mode: "setup" | "login" | "student" | "catechist"
  const [mode, setMode] = useState(() => {
    const pin = getPin();
    if (!pin) return "setup";
    return "login";
  });
  const [activeUser, setActiveUser] = useState(null);
  const [sessionIdx, setSessionIdx] = useState(0);
  const [screen, setScreen] = useState("home");
  const [sessions, setSessions] = useState(getSessions);
  const [editWeek, setEditWeek] = useState(null);

  const { stars, earn, isDone } = useProgress(activeUser?.id);

  const session = sessions[sessionIdx];

  const earnForSession = useCallback(
    (activity, amount) => earn(session.week, activity, amount),
    [earn, session.week]
  );

  const checkDone = useCallback(
    (activity) => isDone(session.week, activity),
    [isDone, session.week]
  );

  const go = (s) => {
    window.scrollTo(0, 0);
    setScreen(s);
  };

  const switchUser = () => {
    setActiveUser(null);
    setMode("login");
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
          opacity: 0.12,
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
              background: "#fff",
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
        background:
          "linear-gradient(170deg, #1a1a3e 0%, #2d2d6b 40%, #1e3a5f 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {background}

      {/* ─── Setup Mode ─── */}
      {mode === "setup" && (
        <CatechistSetup
          onComplete={() => setMode("login")}
        />
      )}

      {/* ─── Login Mode ─── */}
      {mode === "login" && (
        <LoginScreen
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
        />
      )}

      {/* ─── Student Mode ─── */}
      {mode === "student" && (
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
                onPick={(i) => {
                  setSessionIdx(i);
                  go("home");
                }}
              />
            )}

            {screen === "home" && (
              <SessionHome
                session={session}
                onNavigate={go}
                isDone={checkDone}
              />
            )}

            {screen === "discover" && (
              <Discover
                data={session.discover}
                earn={earnForSession}
                isDone={checkDone}
                onBack={() => go("home")}
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
                onBack={() => go("dashboard")}
                onRefresh={() => {}}
              />
            )}

            {screen === "admin-progress" && (
              <ProgressGrid onBack={() => go("dashboard")} />
            )}

            {screen === "admin-session" && editWeek && (
              <SessionEditor
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
