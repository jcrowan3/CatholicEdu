import { DISPLAY_FONT as displayFont, answerOptionStyle, stepBarColor } from "../../utils/constants";
import { useState } from "react";
import ActivityHeader from "../shared/ActivityHeader";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";
import { shuffle } from "../../utils/shuffle";


export default function FillBlank({ data, earn, isDone, onBack }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [picked, setPicked] = useState(null);
  const [finished, setFinished] = useState(false);
  const done = isDone("fillblank");

  const [shuffled] = useState(() =>
    data.sentences.map((s) => shuffle(s.options))
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
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          {score === data.sentences.length ? "Perfect!" : "Great Try!"}
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
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
      <ActivityHeader title={data.title} instruction={data.instruction} />

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
        {data.sentences.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background: stepBarColor(i, idx, answers),
            }}
          />
        ))}
      </div>

      {/* Sentence card */}
      <div
        key={idx}
        style={{
          background: "var(--surface-elevated)",
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
            color: "var(--text-primary)",
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
          const { bg, borderColor } = answerOptionStyle(picked, opt, current.answer);
          return (
            <button
              key={opt}
              type="button"
              className="bh"
              onClick={() => pick(opt)}
              disabled={picked !== null}
              style={{
                fontFamily: "inherit",
                cursor: picked === null ? "pointer" : "default",
                background: bg,
                border: `2px solid ${borderColor}`,
                borderRadius: 10,
                padding: "12px 10px",
                textAlign: "center",
              }}
            >
              <span style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 700 }}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
