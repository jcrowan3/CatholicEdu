import { useState } from "react";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";
import Feedback from "../shared/Feedback";

const displayFont = "'Lilita One', cursive";

export default function Sort({ data, earn, isDone, onBack }) {
  const [items, setItems] = useState(() =>
    [...data.items]
      .sort(() => Math.random() - 0.5)
      .map((it) => ({ ...it, placed: null }))
  );
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const done = isDone("sort");

  const hitGroup = (group) => {
    if (selected === null) return;
    const item = items[selected];
    if (item.group === group) {
      const next = [...items];
      next[selected] = { ...item, placed: group };
      setItems(next);
      setFeedback({ type: "correct", message: "✓ Correct!" });
    } else {
      setFeedback({ type: "wrong", message: "✗ Try again!" });
    }
    setSelected(null);
    setTimeout(() => setFeedback(null), 1200);
  };

  const allDone = items.every((x) => x.placed);

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

      {/* Unplaced items */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          marginBottom: 12,
          minHeight: 36,
        }}
      >
        {items.map((item, i) =>
          !item.placed ? (
            <div
              key={item.name}
              className="bh"
              onClick={() => {
                if (!item.placed) setSelected(selected === i ? null : i);
              }}
              style={{
                padding: "6px 10px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                color: "#fff",
                background:
                  selected === i
                    ? "rgba(212,168,67,.2)"
                    : "rgba(255,255,255,.06)",
                border:
                  selected === i
                    ? "2px solid #D4A843"
                    : "1px solid rgba(255,255,255,.08)",
                animation: `pi .3s ease ${i * 0.05}s both`,
              }}
            >
              {item.icon} {item.name}
            </div>
          ) : null
        )}
      </div>

      {feedback && <Feedback feedback={feedback} />}

      {/* Group buckets */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {data.groups.map((group) => (
          <div
            key={group}
            className="bh"
            onClick={() => hitGroup(group)}
            style={{
              background: "rgba(255,255,255,.03)",
              borderRadius: 10,
              padding: "10px 12px",
              border: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                marginBottom: 5,
              }}
            >
              <span style={{ fontSize: 15 }}>{data.icons[group]}</span>
              <span
                style={{
                  fontFamily: displayFont,
                  fontSize: 13,
                  color: data.colors[group],
                }}
              >
                {group}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {items
                .filter((x) => x.placed === group)
                .map((x) => (
                  <div
                    key={x.name}
                    style={{
                      background: `${data.colors[group]}22`,
                      border: `1px solid ${data.colors[group]}44`,
                      borderRadius: 6,
                      padding: "3px 8px",
                      fontSize: 11,
                      color: "#fff",
                      animation: "bi .3s ease",
                    }}
                  >
                    {x.icon} {x.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {allDone && !done && (
        <DoneButton
          onClick={() => {
            earn("sort", 3);
            onBack();
          }}
          text="All Sorted! +3 ⭐"
        />
      )}
      {done && <DoneBadge />}
    </div>
  );
}
