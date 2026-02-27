import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";

const displayFont = "'Lilita One', cursive";

export default function Quiz({ data, earn, isDone, onBack }) {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState([]);
  const done = isDone("quiz");
  const q = data.questions[qIdx];

  const answer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.correct;
    if (correct) setScore((s) => s + 1);
    setResults((prev) => [...prev, correct]);
    setTimeout(() => {
      if (qIdx < data.questions.length - 1) {
        setQIdx((qi) => qi + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  // Results screen
  if (finished) {
    const perfect = score === data.questions.length;
    return (
      <div style={{ textAlign: "center", animation: "su .4s ease" }}>
        <div style={{ fontSize: 60, marginBottom: 10, animation: "bi .5s ease" }}>
          {perfect ? "🏆" : score >= 3 ? "🌟" : "💪"}
        </div>
        <h2
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "#fff",
            margin: "0 0 6px",
          }}
        >
          {perfect ? "Perfect Score!" : score >= 3 ? "Great Job!" : "Keep Learning!"}
        </h2>
        <p style={{ color: "rgba(255,255,255,.45)", fontSize: 14 }}>
          {score}/{data.questions.length} correct
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            margin: "16px 0",
          }}
        >
          {Array.from({ length: data.questions.length }, (_, i) => (
            <div
              key={i}
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: results[i]
                  ? "rgba(109,184,123,.15)"
                  : "rgba(217,74,74,.15)",
                border: `2px solid ${results[i] ? "#6DB87B" : "#D94A4A"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              {results[i] ? "✓" : "✗"}
            </div>
          ))}
        </div>
        {!done && (
          <DoneButton
            onClick={() => {
              earn("quiz", 5);
              onBack();
            }}
            text="Collect +5 ⭐"
          />
        )}
        {done && <DoneBadge />}
      </div>
    );
  }

  return (
    <div style={{ animation: "su .4s ease" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            fontFamily: displayFont,
            fontSize: 20,
            color: "#fff",
            margin: 0,
          }}
        >
          ❓ Quick Quiz
        </h2>
        <span
          style={{
            color: "rgba(255,255,255,.3)",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {qIdx + 1}/{data.questions.length}
        </span>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
        {data.questions.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background:
                i < qIdx
                  ? results[i]
                    ? "#6DB87B"
                    : "#D94A4A"
                  : i === qIdx
                  ? "#D4A843"
                  : "rgba(255,255,255,.1)",
            }}
          />
        ))}
      </div>

      {/* Question card */}
      <div
        key={qIdx}
        style={{
          background: "rgba(255,255,255,.05)",
          borderRadius: 14,
          padding: "22px 20px",
          marginBottom: 14,
          animation: "pi .3s ease",
        }}
      >
        <p
          style={{
            fontFamily: displayFont,
            fontSize: 17,
            color: "#fff",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {q.q}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
        {q.opts.map((opt, i) => {
          let bg = "rgba(255,255,255,.04)";
          let bc = "rgba(255,255,255,.07)";
          if (selected !== null) {
            if (i === q.correct) {
              bg = "rgba(109,184,123,.15)";
              bc = "#6DB87B";
            } else if (i === selected) {
              bg = "rgba(217,74,74,.15)";
              bc = "#D94A4A";
            }
          }
          return (
            <div
              key={i}
              className="bh"
              onClick={() => answer(i)}
              style={{
                background: bg,
                border: `2px solid ${bc}`,
                borderRadius: 10,
                padding: "12px 10px",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>
                {opt}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
