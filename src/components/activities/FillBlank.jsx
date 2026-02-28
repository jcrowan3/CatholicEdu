import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";

const displayFont = "'Lilita One', cursive";

export default function FillBlank({ data, earn, isDone, onBack }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [picked, setPicked] = useState(null);
  const [finished, setFinished] = useState(false);
  const done = isDone("fillblank");

  const [shuffled] = useState(() =>
    data.sentences.map((s) => [...s.options].sort(() => Math.random() - 0.5))
  );

  const current = data.sentences[idx];

  const pick = (opt) => {
    if (picked !== null) return;
    setPicked(opt);
    const correct = opt === current.answer;
    setAnswers((prev) => [...prev, correct]);
    setTimeout(() => {
      if (idx < data.sentences.length - 1) {
        setIdx((i) => i + 1);
        setPicked(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  // Results screen
  if (finished) {
    const score = answers.filter(Boolean).length;
    return (
      <div style={{ textAlign: "center", animation: "su .4s ease" }}>
        <div style={{ fontSize: 60, marginBottom: 10, animation: "bi .5s ease" }}>
          {score === data.sentences.length ? "🌟" : score >= 2 ? "👏" : "💪"}
        </div>
        <h2
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "#fff",
            margin: "0 0 6px",
          }}
        >
          {score === data.sentences.length ? "Perfect!" : "Great Try!"}
        </h2>
        <p style={{ color: "rgba(255,255,255,.45)", fontSize: 14 }}>
          {score}/{data.sentences.length} correct
        </p>
        {!done && (
          <DoneButton
            onClick={() => {
              earn("fillblank", 3);
              onBack();
            }}
            text="Collect +3 ⭐"
          />
        )}
        {done && <DoneBadge />}
      </div>
    );
  }

  const parts = current.text.split("___");

  return (
    <div style={{ animation: "su .4s ease" }}>
      <h2
        style={{
          fontFamily: displayFont,
          fontSize: 22,
          color: "#fff",
          margin: "0 0 5px",
        }}
      >
        {data.title}
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,.5)",
          fontSize: 12,
          margin: "0 0 14px",
        }}
      >
        {data.instruction}
      </p>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
        {data.sentences.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background:
                i < idx
                  ? answers[i]
                    ? "#6DB87B"
                    : "#D94A4A"
                  : i === idx
                  ? "#D4A843"
                  : "rgba(255,255,255,.1)",
            }}
          />
        ))}
      </div>

      {/* Sentence card */}
      <div
        key={idx}
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
            fontSize: 18,
            color: "#fff",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {parts[0]}
          <span
            style={{
              display: "inline-block",
              minWidth: 70,
              borderBottom: "2px solid #D4A843",
              textAlign: "center",
              color: "#D4A843",
              margin: "0 4px",
            }}
          >
            {picked || "___"}
          </span>
          {parts[1]}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
        {shuffled[idx].map((opt) => {
          let bg = "rgba(255,255,255,.04)";
          let bc = "rgba(255,255,255,.07)";
          if (picked !== null) {
            if (opt === current.answer) {
              bg = "rgba(109,184,123,.15)";
              bc = "#6DB87B";
            } else if (opt === picked) {
              bg = "rgba(217,74,74,.15)";
              bc = "#D94A4A";
            }
          }
          return (
            <div
              key={opt}
              className="bh"
              onClick={() => pick(opt)}
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
