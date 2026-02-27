import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";

const displayFont = "'Lilita One', cursive";

export default function Discover({ data, earn, isDone, onBack }) {
  const [revealed, setRevealed] = useState(new Set());
  const done = isDone("discover");
  const threshold = Math.max(3, Math.ceil(data.items.length * 0.7));

  const toggle = (i) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
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
        {data.items.map((item, i) => {
          const open = revealed.has(i);
          return (
            <div
              key={i}
              className="ch"
              onClick={() => toggle(i)}
              style={{
                background: open
                  ? "rgba(74,144,217,.08)"
                  : "rgba(255,255,255,.04)",
                borderRadius: 10,
                padding: "12px 14px",
                border: open
                  ? "1px solid rgba(74,144,217,.25)"
                  : "1px solid rgba(255,255,255,.05)",
                animation: `pi .3s ease ${i * 0.06}s both`,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div
                  style={{
                    flex: 1,
                    fontFamily: displayFont,
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  {item.name}
                </div>
                <span
                  style={{
                    color: "rgba(255,255,255,.2)",
                    fontSize: 14,
                    transition: "transform .3s",
                    transform: open ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▼
                </span>
              </div>
              {open && (
                <div
                  style={{
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid rgba(255,255,255,.05)",
                    color: "rgba(255,255,255,.55)",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {revealed.size >= threshold && !done && (
        <DoneButton
          onClick={() => {
            earn("discover", 2);
            onBack();
          }}
          text="Got It! +2 ⭐"
        />
      )}
      {done && <DoneBadge />}
    </div>
  );
}
