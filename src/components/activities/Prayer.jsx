import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";

const displayFont = "'Lilita One', cursive";

export default function Prayer({ data, earn, isDone, onBack }) {
  const [step, setStep] = useState(0);
  const done = isDone("prayer");

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
        🙏 {data.title}
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,.5)",
          fontSize: 12,
          margin: "0 0 14px",
        }}
      >
        Tap to read each line of the prayer together.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.lines.map((line, i) => {
          const visible = i <= step;
          const isAll = line.s === "A";
          if (!visible) return null;
          return (
            <div
              key={i}
              style={{
                background: isAll
                  ? "rgba(212,168,67,.1)"
                  : "rgba(255,255,255,.03)",
                borderRadius: 12,
                padding: "10px 14px",
                border: isAll
                  ? "1px solid rgba(212,168,67,.2)"
                  : "1px solid rgba(255,255,255,.04)",
                animation: "pi .3s ease",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1,
                  marginBottom: 3,
                  color: isAll ? "#D4A843" : "rgba(255,255,255,.25)",
                }}
              >
                {isAll ? "ALL" : "LEADER"}
              </div>
              <div
                style={{
                  color: isAll ? "#fff" : "rgba(255,255,255,.65)",
                  fontSize: isAll ? 15 : 14,
                  fontWeight: isAll ? 700 : 400,
                  fontStyle: isAll ? "normal" : "italic",
                }}
              >
                {line.t}
              </div>
            </div>
          );
        })}
      </div>

      {step < data.lines.length - 1 ? (
        <button
          className="bh"
          onClick={() => setStep((s) => s + 1)}
          style={{
            width: "100%",
            marginTop: 14,
            padding: "12px 0",
            borderRadius: 10,
            background: "rgba(212,168,67,.15)",
            border: "1px solid rgba(212,168,67,.3)",
            color: "#D4A843",
            fontFamily: displayFont,
            fontSize: 14,
          }}
        >
          Next Line ▼
        </button>
      ) : !done ? (
        <DoneButton
          onClick={() => {
            earn("prayer", 1);
            onBack();
          }}
          text="Amen 🙏 +1 ⭐"
        />
      ) : (
        <DoneBadge />
      )}
    </div>
  );
}
