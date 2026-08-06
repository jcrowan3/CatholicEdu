import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { useState } from "react";
import { getSessions, saveSessions, resetSessionToDefault } from "../../data/store";
import { generateSessionPdf } from "../../utils/generateSessionPdf";
import { reviewSessionLocally } from "../../utils/doctrinalReview";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/client";


/* ─── Shared form styles ─── */
const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 6,
  border: "1px solid var(--border-strong)",
  background: "var(--surface-input)",
  color: "var(--text-primary)",
  fontSize: 13,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  color: "var(--text-tertiary)",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 1,
  display: "block",
  marginBottom: 4,
  marginTop: 10,
};

const smallBtnStyle = {
  padding: "4px 10px",
  borderRadius: 5,
  fontSize: 11,
  border: "none",
  cursor: "pointer",
};

/* ─── Accordion section ─── */
function Section({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: 10,
        border: "1px solid var(--border-default)",
        marginBottom: 8,
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span
          style={{
            flex: 1,
            fontFamily: displayFont,
            fontSize: 13,
            color: "var(--text-primary)",
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: "var(--text-ghost)",
            fontSize: 12,
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          ▼
        </span>
      </div>
      {open && (
        <div style={{ padding: "0 12px 12px", animation: "pi .2s ease" }}>
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Discover Editor ─── */
function DiscoverEditor({ discover, onChange }) {
  const update = (field, val) => onChange({ ...discover, [field]: val });
  const updateItem = (i, field, val) => {
    const items = [...discover.items];
    items[i] = { ...items[i], [field]: val };
    update("items", items);
  };
  const addItem = () =>
    update("items", [
      ...discover.items,
      { icon: "📝", name: "New Item", desc: "Description here" },
    ]);
  const removeItem = (i) =>
    update("items", discover.items.filter((_, idx) => idx !== i));

  return (
    <div>
      <label style={labelStyle}>TITLE</label>
      <input
        style={inputStyle}
        value={discover.title}
        onChange={(e) => update("title", e.target.value)}
      />
      <label style={labelStyle}>INSTRUCTION</label>
      <input
        style={inputStyle}
        value={discover.instruction}
        onChange={(e) => update("instruction", e.target.value)}
      />
      <label style={labelStyle}>ITEMS</label>
      {discover.items.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 4,
            alignItems: "start",
          }}
        >
          <input
            style={{ ...inputStyle, width: 36, textAlign: "center", flexShrink: 0 }}
            value={item.icon}
            onChange={(e) => updateItem(i, "icon", e.target.value)}
          />
          <input
            style={{ ...inputStyle, flex: "1 1 100px" }}
            value={item.name}
            onChange={(e) => updateItem(i, "name", e.target.value)}
          />
          <input
            style={{ ...inputStyle, flex: "2 1 200px" }}
            value={item.desc}
            onChange={(e) => updateItem(i, "desc", e.target.value)}
          />
          <button
            onClick={() => removeItem(i)}
            style={{ ...smallBtnStyle, background: "rgba(217,74,74,.15)", color: "#D94A4A" }}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        style={{ ...smallBtnStyle, background: "rgba(109,184,123,.15)", color: "#6DB87B", marginTop: 4 }}
      >
        + Add Item
      </button>
    </div>
  );
}

/* ─── Quiz Editor ─── */
function QuizEditor({ quiz, onChange }) {
  const updateQ = (qi, field, val) => {
    const questions = [...quiz.questions];
    questions[qi] = { ...questions[qi], [field]: val };
    onChange({ ...quiz, questions });
  };
  const updateOpt = (qi, oi, val) => {
    const questions = [...quiz.questions];
    const opts = [...questions[qi].options];
    opts[oi] = val;
    questions[qi] = { ...questions[qi], options: opts };
    onChange({ ...quiz, questions });
  };

  return (
    <div>
      {quiz.questions.map((q, qi) => (
        <div
          key={qi}
          style={{
            background: "var(--surface-card)",
            borderRadius: 8,
            padding: 8,
            marginBottom: 6,
            border: "1px solid var(--border-light)",
          }}
        >
          <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 4 }}>
            <span style={{ color: "var(--text-ghost)", fontSize: 10, fontWeight: 800 }}>
              Q{qi + 1}
            </span>
            <input
              style={{ ...inputStyle, flex: 1 }}
              value={q.q}
              onChange={(e) => updateQ(qi, "q", e.target.value)}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {q.options.map((opt, oi) => (
              <div key={oi} style={{ display: "flex", gap: 3, alignItems: "center" }}>
                <input
                  type="radio"
                  name={`correct-${qi}`}
                  checked={q.correct === oi}
                  onChange={() => updateQ(qi, "correct", oi)}
                  style={{ accentColor: "#6DB87B" }}
                />
                <input
                  style={{ ...inputStyle, flex: 1 }}
                  value={opt}
                  onChange={(e) => updateOpt(qi, oi, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Prayer Editor ─── */
function PrayerEditor({ prayer, onChange }) {
  const update = (field, val) => onChange({ ...prayer, [field]: val });
  const updateLine = (i, field, val) => {
    const lines = [...prayer.lines];
    lines[i] = { ...lines[i], [field]: val };
    update("lines", lines);
  };
  const addLine = () =>
    update("lines", [...prayer.lines, { s: "L", t: "New line" }]);
  const removeLine = (i) =>
    update("lines", prayer.lines.filter((_, idx) => idx !== i));

  return (
    <div>
      <label style={labelStyle}>TITLE</label>
      <input
        style={inputStyle}
        value={prayer.title}
        onChange={(e) => update("title", e.target.value)}
      />
      <label style={labelStyle}>LINES</label>
      {prayer.lines.map((line, i) => (
        <div key={i} style={{ display: "flex", gap: 4, marginBottom: 3, alignItems: "center" }}>
          <select
            value={line.s}
            onChange={(e) => updateLine(i, "s", e.target.value)}
            style={{ ...inputStyle, width: 50, padding: "8px 4px", flexShrink: 0 }}
          >
            <option value="L">L</option>
            <option value="A">A</option>
          </select>
          <input
            style={{ ...inputStyle, flex: 1 }}
            value={line.t}
            onChange={(e) => updateLine(i, "t", e.target.value)}
          />
          <button
            onClick={() => removeLine(i)}
            style={{ ...smallBtnStyle, background: "rgba(217,74,74,.15)", color: "#D94A4A" }}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={addLine}
        style={{ ...smallBtnStyle, background: "rgba(109,184,123,.15)", color: "#6DB87B", marginTop: 4 }}
      >
        + Add Line
      </button>
    </div>
  );
}

/* ─── Sort Editor ─── */
function SortEditor({ sort, onChange }) {
  const update = (field, val) => onChange({ ...sort, [field]: val });
  const updateItem = (i, field, val) => {
    const items = [...sort.items];
    items[i] = { ...items[i], [field]: val };
    update("items", items);
  };
  const addItem = () =>
    update("items", [
      ...sort.items,
      { icon: "📝", name: "New Item", group: sort.groups[0] || "" },
    ]);
  const removeItem = (i) =>
    update("items", sort.items.filter((_, idx) => idx !== i));

  return (
    <div>
      <label style={labelStyle}>TITLE</label>
      <input style={inputStyle} value={sort.title} onChange={(e) => update("title", e.target.value)} />
      <label style={labelStyle}>INSTRUCTION</label>
      <input style={inputStyle} value={sort.instruction} onChange={(e) => update("instruction", e.target.value)} />
      <label style={labelStyle}>ITEMS</label>
      {sort.items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 4, marginBottom: 3, alignItems: "center" }}>
          <input style={{ ...inputStyle, width: 36, textAlign: "center", flexShrink: 0 }} value={item.icon} onChange={(e) => updateItem(i, "icon", e.target.value)} />
          <input style={{ ...inputStyle, flex: 1 }} value={item.name} onChange={(e) => updateItem(i, "name", e.target.value)} />
          <select style={{ ...inputStyle, width: 120, flexShrink: 0 }} value={item.group} onChange={(e) => updateItem(i, "group", e.target.value)}>
            {sort.groups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <button onClick={() => removeItem(i)} style={{ ...smallBtnStyle, background: "rgba(217,74,74,.15)", color: "#D94A4A" }}>✕</button>
        </div>
      ))}
      <button onClick={addItem} style={{ ...smallBtnStyle, background: "rgba(109,184,123,.15)", color: "#6DB87B", marginTop: 4 }}>+ Add Item</button>
    </div>
  );
}

/* ─── Timeline Editor ─── */
function TimelineEditor({ timeline, onChange }) {
  const update = (field, val) => onChange({ ...timeline, [field]: val });
  const updateItem = (i, field, val) => {
    const items = [...timeline.items];
    items[i] = { ...items[i], [field]: field === "order" ? parseInt(val) || 0 : val };
    update("items", items);
  };
  const addItem = () => {
    const maxOrder = Math.max(0, ...timeline.items.map((x) => x.order));
    update("items", [
      ...timeline.items,
      { id: Date.now(), text: "New step", order: maxOrder + 1 },
    ]);
  };
  const removeItem = (i) =>
    update("items", timeline.items.filter((_, idx) => idx !== i));

  return (
    <div>
      <label style={labelStyle}>TITLE</label>
      <input style={inputStyle} value={timeline.title} onChange={(e) => update("title", e.target.value)} />
      <label style={labelStyle}>INSTRUCTION</label>
      <input style={inputStyle} value={timeline.instruction} onChange={(e) => update("instruction", e.target.value)} />
      <label style={labelStyle}>ITEMS (order = correct position)</label>
      {timeline.items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 4, marginBottom: 3, alignItems: "center" }}>
          <input style={{ ...inputStyle, width: 40, textAlign: "center", flexShrink: 0 }} type="number" value={item.order} onChange={(e) => updateItem(i, "order", e.target.value)} />
          <input style={{ ...inputStyle, flex: 1 }} value={item.text} onChange={(e) => updateItem(i, "text", e.target.value)} />
          <button onClick={() => removeItem(i)} style={{ ...smallBtnStyle, background: "rgba(217,74,74,.15)", color: "#D94A4A" }}>✕</button>
        </div>
      ))}
      <button onClick={addItem} style={{ ...smallBtnStyle, background: "rgba(109,184,123,.15)", color: "#6DB87B", marginTop: 4 }}>+ Add Item</button>
    </div>
  );
}

/* ─── FillBlank Editor ─── */
function FillBlankEditor({ fillblank, onChange }) {
  const update = (field, val) => onChange({ ...fillblank, [field]: val });
  const updateSentence = (i, field, val) => {
    const sentences = [...fillblank.sentences];
    sentences[i] = { ...sentences[i], [field]: val };
    update("sentences", sentences);
  };
  const updateOpt = (si, oi, val) => {
    const sentences = [...fillblank.sentences];
    const opts = [...sentences[si].options];
    opts[oi] = val;
    sentences[si] = { ...sentences[si], options: opts };
    update("sentences", sentences);
  };
  const addOption = (si) => {
    const sentences = [...fillblank.sentences];
    sentences[si] = { ...sentences[si], options: [...sentences[si].options, "new"] };
    update("sentences", sentences);
  };

  return (
    <div>
      <label style={labelStyle}>TITLE</label>
      <input style={inputStyle} value={fillblank.title} onChange={(e) => update("title", e.target.value)} />
      <label style={labelStyle}>INSTRUCTION</label>
      <input style={inputStyle} value={fillblank.instruction} onChange={(e) => update("instruction", e.target.value)} />
      <label style={labelStyle}>SENTENCES (use ___ for blank)</label>
      {fillblank.sentences.map((s, si) => (
        <div key={si} style={{ background: "var(--surface-card)", borderRadius: 6, padding: 6, marginBottom: 4, border: "1px solid var(--border-light)" }}>
          <input style={{ ...inputStyle, marginBottom: 3 }} value={s.text} onChange={(e) => updateSentence(si, "text", e.target.value)} />
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "var(--text-ghost)", fontSize: 9, fontWeight: 700 }}>ANS:</span>
            <input style={{ ...inputStyle, width: 80 }} value={s.answer} onChange={(e) => updateSentence(si, "answer", e.target.value)} />
            <span style={{ color: "var(--text-ghost)", fontSize: 9, fontWeight: 700, marginLeft: 4 }}>OPTS:</span>
            {s.options.map((opt, oi) => (
              <input key={oi} style={{ ...inputStyle, width: 70 }} value={opt} onChange={(e) => updateOpt(si, oi, e.target.value)} />
            ))}
            <button onClick={() => addOption(si)} style={{ ...smallBtnStyle, background: "rgba(109,184,123,.1)", color: "#6DB87B" }}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Session Editor ─── */
export default function SessionEditor({ grade, weekNum, onSessionsChange }) {
  const auth = useAuth();
  const isOnline = auth.isAuthenticated && auth.isOnline;

  const [sessions, setSessions] = useState(() => getSessions(grade));
  const session = sessions.find((s) => s.week === weekNum);
  const [saved, setSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [reviewFindings, setReviewFindings] = useState([]);
  const [reviewing, setReviewing] = useState(false);

  if (!session) return <p style={{ color: "var(--text-primary)" }}>Session not found.</p>;

  const updateSession = (field, val) => {
    const updated = sessions.map((s) =>
      s.week === weekNum ? { ...s, [field]: val } : s
    );
    setSessions(updated);
    setSaved(false);
    setReviewFindings([]);
  };

  const handleSave = async () => {
    let review;
    if (isOnline) {
      try {
        setReviewing(true);
        review = await api.reviewSession(grade, session);
      } catch {
        setReviewFindings([{ message: "The doctrinal review could not run. Check your connection and try again." }]);
        return;
      } finally {
        setReviewing(false);
      }
    } else {
      review = reviewSessionLocally(session);
    }

    setReviewFindings(review.findings);
    if (!review.passed) return;

    if (isOnline) {
      try {
        await api.upsertSessionOverride(grade, weekNum, session);
      } catch {
        setReviewFindings([{ message: "The reviewed session could not be saved. Check your connection and try again." }]);
        return;
      }
    }

    saveSessions(grade, sessions);

    setSaved(true);
    onSessionsChange?.(sessions);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = async () => {
    const updated = resetSessionToDefault(grade, weekNum);
    setSessions(updated);
    onSessionsChange?.(updated);
    setConfirmReset(false);
    setSaved(false);

    // Delete the override from API when online
    if (isOnline) {
      api.deleteSessionOverride(grade, weekNum).catch(() => {});
    }
  };

  return (
    <div style={{ animation: "su .4s ease" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 style={{ fontFamily: displayFont, fontSize: 20, color: "var(--text-primary)", margin: 0 }}>
          Week {weekNum}: {session.title}
        </h2>
        <button
          onClick={() => generateSessionPdf(session)}
          title="Print session as PDF"
          style={{
            background: "var(--surface-input)",
            border: "1px solid var(--border-medium)",
            borderRadius: 8,
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: 13,
            color: "var(--text-faint)",
          }}
        >
          🖨️ PDF
        </button>
      </div>

      {/* Meta fields */}
      <Section title="Session Info" icon="📋" defaultOpen>
        <label style={labelStyle}>TITLE</label>
        <input style={inputStyle} value={session.title} onChange={(e) => updateSession("title", e.target.value)} />
        <label style={labelStyle}>PILLAR</label>
        <select style={inputStyle} value={session.pillar} onChange={(e) => updateSession("pillar", e.target.value)}>
          <option value="Creed">Creed</option>
          <option value="Sacraments">Sacraments</option>
          <option value="Morality">Morality</option>
          <option value="Prayer">Prayer</option>
        </select>
        <label style={labelStyle}>CCC REFERENCE</label>
        <input style={inputStyle} value={session.ccc} onChange={(e) => updateSession("ccc", e.target.value)} />
        <label style={labelStyle}>SCRIPTURE VERSE</label>
        <input style={inputStyle} value={session.verse} onChange={(e) => updateSession("verse", e.target.value)} />
      </Section>

      {/* Activity editors */}
      <Section title="Discover" icon="🔍">
        <DiscoverEditor discover={session.discover} onChange={(d) => updateSession("discover", d)} />
      </Section>

      {session.sort && (
        <Section title="Sort & Match" icon="📂">
          <SortEditor sort={session.sort} onChange={(d) => updateSession("sort", d)} />
        </Section>
      )}

      {session.timeline && (
        <Section title="Put in Order" icon="📋">
          <TimelineEditor timeline={session.timeline} onChange={(d) => updateSession("timeline", d)} />
        </Section>
      )}

      {session.fillblank && (
        <Section title="Fill the Blank" icon="✏️">
          <FillBlankEditor fillblank={session.fillblank} onChange={(d) => updateSession("fillblank", d)} />
        </Section>
      )}

      <Section title="Quick Quiz" icon="❓">
        <QuizEditor quiz={session.quiz} onChange={(d) => updateSession("quiz", d)} />
      </Section>

      <Section title="Closing Prayer" icon="🙏">
        <PrayerEditor prayer={session.prayer} onChange={(d) => updateSession("prayer", d)} />
      </Section>

      {/* Action buttons */}
      {reviewFindings.length > 0 && (
        <div role="alert" style={{ background: "rgba(217,74,74,.12)", border: "1px solid rgba(217,74,74,.35)", borderRadius: 10, padding: 12, marginTop: 16 }}>
          <strong style={{ color: "#D94A4A" }}>Fix before publishing</strong>
          <ul style={{ color: "var(--text-primary)", margin: "8px 0 0", paddingLeft: 20 }}>
            {reviewFindings.map((finding, index) => <li key={`${finding.code || "review"}-${index}`}>{finding.message}</li>)}
          </ul>
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginTop: 16, marginBottom: 20 }}>
        <button
          onClick={handleSave}
          disabled={reviewing}
          style={{
            flex: 1,
            padding: "14px 0",
            borderRadius: 10,
            background: saved
              ? "linear-gradient(135deg, #6DB87B, #4A9B5B)"
              : "linear-gradient(135deg, #4A90D9, #3A70B9)",
            color: "#fff",
            fontFamily: displayFont,
            fontSize: 15,
            border: "none",
            cursor: "pointer",
          }}
        >
          {reviewing ? "Reviewing…" : saved ? "Saved ✓" : "Review & Save"}
        </button>
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              background: "var(--surface-input)",
              color: "var(--text-faint)",
              fontSize: 12,
              border: "none",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        ) : (
          <button
            onClick={handleReset}
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              background: "rgba(217,74,74,.15)",
              color: "#D94A4A",
              fontWeight: 700,
              fontSize: 12,
              border: "none",
              cursor: "pointer",
            }}
          >
            Confirm Reset
          </button>
        )}
      </div>
    </div>
  );
}
