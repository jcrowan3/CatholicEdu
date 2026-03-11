import { DISPLAY_FONT as displayFont, answerOptionStyle, stepBarColor } from "../../utils/constants";
import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";


export default function Quiz({ data, earn, isDone, onBack }) {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState([]);
  const [showBonus, setShowBonus] = useState(false);
  const [bonusPicked, setBonusPicked] = useState(null);
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

  const answerBonus = (i) => {
    if (bonusPicked !== null) return;
    setBonusPicked(i);
  };

  // Bonus challenge screen
  if (showBonus && data.bonus) {
    const b = data.bonus;
    const correct = bonusPicked === b.correct;
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
              color: "#D4A843",
              margin: 0,
            }}
          >
            🌟 Bonus Challenge
          </h2>
        </div>

        <div
          style={{
            background: "var(--surface-elevated)",
            borderRadius: 14,
            padding: "22px 20px",
            marginBottom: 14,
            border: "1px solid rgba(212,168,67,.2)",
            animation: "pi .3s ease",
          }}
        >
          <p
            style={{
              fontFamily: displayFont,
              fontSize: 17,
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {b.q}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          {b.opts.map((opt, i) => {
            const { bg, borderColor } = answerOptionStyle(bonusPicked, i, b.correct);
            return (
              <div
                key={i}
                className="bh"
                onClick={() => answerBonus(i)}
                style={{
                  background: bg,
                  border: `2px solid ${borderColor}`,
                  borderRadius: 10,
                  padding: "12px 10px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {opt}
                </span>
              </div>
            );
          })}
        </div>

        {bonusPicked !== null && (
          <div
            style={{
              textAlign: "center",
              marginTop: 16,
              animation: "pi .3s ease",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 6, animation: "bi .5s ease" }}>
              {correct ? "🏆" : "💡"}
            </div>
            <p
              style={{
                fontFamily: displayFont,
                fontSize: 16,
                color: correct ? "#6DB87B" : "var(--text-secondary)",
              }}
            >
              {correct
                ? b.reward || "Amazing! You nailed the bonus!"
                : "Great effort! Keep learning!"}
            </p>
            <button
              className="bh"
              onClick={() => setShowBonus(false)}
              style={{
                marginTop: 12,
                padding: "10px 24px",
                borderRadius: 10,
                background: "var(--surface-card)",
                border: "1px solid var(--border-medium)",
                color: "var(--text-primary)",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Back to Results
            </button>
          </div>
        )}
      </div>
    );
  }

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
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          {perfect ? "Perfect Score!" : score >= 3 ? "Great Job!" : "Keep Learning!"}
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
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

        {/* Bonus Challenge button */}
        {data.bonus && (
          <button
            className="bh"
            onClick={() => setShowBonus(true)}
            style={{
              margin: "12px auto",
              padding: "10px 20px",
              borderRadius: 10,
              background: "rgba(212,168,67,.1)",
              border: "1px solid rgba(212,168,67,.3)",
              color: "#D4A843",
              fontFamily: displayFont,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "pi .4s ease .3s both",
            }}
          >
            <span>🌟</span> Bonus Challenge!
          </button>
        )}

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
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          ❓ Quick Quiz
        </h2>
        <span
          style={{
            color: "var(--text-ghost)",
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
              background: stepBarColor(i, qIdx, results),
            }}
          />
        ))}
      </div>

      {/* Question card */}
      <div
        key={qIdx}
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
            fontSize: 17,
            color: "var(--text-primary)",
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
          const { bg, borderColor } = answerOptionStyle(selected, i, q.correct);
          return (
            <div
              key={i}
              className="bh"
              onClick={() => answer(i)}
              style={{
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
