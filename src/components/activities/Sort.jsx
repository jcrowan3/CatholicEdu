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
  const [placing, setPlacing] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const done = isDone("sort");

  const hitGroup = (group) => {
    if (selected === null) return;
    const selIdx = selected;
    const item = items[selIdx];
    if (item.group === group) {
      setPlacing(selIdx);
      setFeedback({ type: "correct", message: "✓ Correct!" });
      setSelected(null);
      setTimeout(() => {
        const next = [...items];
        next[selIdx] = { ...item, placed: group };
        setItems(next);
        setPlacing(null);
      }, 280);
    } else {
      setFeedback({ type: "wrong", message: "✗ Try again!" });
      setSelected(null);
    }
    setTimeout(() => setFeedback(null), 1200);
  };

  const allDone = items.every((x) => x.placed);

  return (
    <div style={{ animation: "su .4s ease" }}>
      <h2
        style={{
          fontFamily: displayFont,
          fontSize: 22,
          color: "var(--text-primary)",
          margin: "0 0 5px",
        }}
      >
        {data.title}
      </h2>
      <p
        style={{
          color: "var(--text-tertiary)",
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
          alignContent: "flex-start",
        }}
      >
        {items.map((item, i) =>
          !item.placed ? (
            <div
              key={item.name}
              className="bh"
              onClick={() => {
                if (!item.placed && placing === null)
                  setSelected(selected === i ? null : i);
              }}
              style={{
                padding: "6px 10px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                color: "var(--text-primary)",
                background:
                  selected === i
                    ? "rgba(212,168,67,.15)"
                    : "var(--surface-input)",
                border:
                  selected === i
                    ? "2px solid #D4A843"
                    : "2px solid var(--border-medium)",
                boxShadow:
                  selected === i
                    ? "0 0 12px rgba(212,168,67,.35)"
                    : "none",
                animation:
                  placing === i
                    ? "sortPlace .28s ease forwards"
                    : `pi .3s ease ${i * 0.05}s both`,
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
              background: "var(--surface-card)",
              borderRadius: 10,
              padding: "10px 12px",
              border:
                selected !== null
                  ? "1px solid rgba(212,168,67,.35)"
                  : "1px solid var(--border-default)",
              boxShadow:
                selected !== null
                  ? "0 0 16px rgba(212,168,67,.2)"
                  : "none",
              animation:
                selected !== null
                  ? "bucketPulse 1.5s ease-in-out infinite"
                  : undefined,
              transition: "box-shadow .3s, border-color .3s",
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
                      color: "var(--text-primary)",
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
