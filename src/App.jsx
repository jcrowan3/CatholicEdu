import { useState, useCallback } from "react";
import { SESSIONS } from "./data/grade3";
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

export default function App() {
  const [sessionIdx, setSessionIdx] = useState(0);
  const [screen, setScreen] = useState("home");
  const { stars, earn, isDone } = useProgress();

  const session = SESSIONS[sessionIdx];

  const earnForSession = useCallback(
    (activity, amount) => earn(session.week, activity, amount),
    [earn, session.week]
  );

  const checkDone = useCallback(
    (activity) => isDone(session.week, activity),
    [isDone, session.week]
  );

  const go = (s) => setScreen(s);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(170deg, #1a1a3e 0%, #2d2d6b 40%, #1e3a5f 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
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

      {/* Top Bar */}
      <TopBar
        session={session}
        screen={screen}
        stars={stars}
        onBack={() => go("home")}
        onPicker={() => go("picker")}
      />

      {/* Main content area */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "16px 14px 60px",
        }}
      >
        {screen === "picker" && (
          <SessionPicker
            sessions={SESSIONS}
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
    </div>
  );
}
