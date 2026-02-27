import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";

const displayFont = "'Lilita One', cursive";

export default function Timeline({ data, earn, isDone, onBack }) {
  const [items, setItems] = useState(() =>
    [...data.items].sort(() => Math.random() - 0.5)
  );
  const [selected, setSelected] = useState(null);
  const [solved, setSolved] = useState(false);
  const done = isDone("timeline");

  const tap = (i) => {
    if (solved) return;
    if (selected === null) {
      setSelected(i);
      return;
    }
    if (selected === i) {
      setSelected(null);
      return;
    }
    // Swap
    const next = [...items];
    [next[selected], next[i]] = [next[i], next[selected]];
    setItems(next);
    setSelected(null);
    // Check if solved
    if (next.every((item, idx) => item.order === idx + 1)) {
      setSolved(true);
    }
  };

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
          color: "rgba(255,255,255,.4)",
          fontSize: 12,
          margin: "0 0 14px",
        }}
      >
        {data.instruction}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {items.map((item, i) => {
          const correct = solved && item.order === i + 1;
          const sel = selected === i;
          return (
            <div
              key={item.id}
              className="bh"
              onClick={() => tap(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                borderRadius: 10,
                background: correct
                  ? "rgba(109,184,123,.12)"
                  : sel
                  ? "rgba(212,168,67,.12)"
                  : "rgba(255,255,255,.04)",
                border: correct
                  ? "2px solid rgba(109,184,123,.35)"
                  : sel
                  ? "2px solid #D4A843"
                  : "1px solid rgba(255,255,255,.06)",
                animation: `pi .3s ease ${i * 0.05}s both`,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: correct
                    ? "#6DB87B"
                    : "rgba(255,255,255,.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  color: correct ? "#fff" : "rgba(255,255,255,.3)",
                }}
              >
                {correct ? "✓" : i + 1}
              </div>
              <span
                style={{ color: "#fff", fontSize: 13, fontWeight: 600, flex: 1 }}
              >
                {item.text}
              </span>
              {!solved && (
                <span
                  style={{
                    color: "rgba(255,255,255,.15)",
                    fontSize: 10,
                  }}
                >
                  tap
                </span>
              )}
            </div>
          );
        })}
      </div>

      {!solved && (
        <p
          style={{
            color: "rgba(255,255,255,.25)",
            fontSize: 11,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Tap two items to swap them
        </p>
      )}

      {solved && !done && (
        <DoneButton
          onClick={() => {
            earn("timeline", 3);
            onBack();
          }}
          text="Perfect Order! +3 ⭐"
        />
      )}
      {done && <DoneBadge />}
    </div>
  );
}
