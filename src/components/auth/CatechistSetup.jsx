import { useState } from "react";
import { setPin, setProgramName } from "../../data/store";
import { GRADES } from "../../data/grades";

const displayFont = "'Lilita One', cursive";

export default function CatechistSetup({ grade, onComplete }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [pin, setPinVal] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const gradeInfo = GRADES.find((g) => g.grade === grade);

  const handleNameNext = () => {
    setProgramName(grade, name.trim());
    setStep(1);
  };

  const handlePinSubmit = () => {
    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      setError("PIN must be exactly 4 digits");
      return;
    }
    if (pin !== confirm) {
      setError("PINs do not match");
      return;
    }
    setPin(grade, pin);
    onComplete();
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: "40px 20px",
        animation: "su .4s ease",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>✝️</div>
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: 24,
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          Welcome, Catechist!
        </h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
          {gradeInfo
            ? `Setting up ${gradeInfo.title} — ${gradeInfo.subtitle}`
            : "Let\u2019s set up your program."}
        </p>
      </div>

      {step === 0 && (
        <div style={{ animation: "pi .3s ease" }}>
          <label
            style={{
              color: "var(--text-tertiary)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              display: "block",
              marginBottom: 6,
            }}
          >
            PARISH / PROGRAM NAME (OPTIONAL)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. St. Mary's CCD"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 15,
              fontFamily: "inherit",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handleNameNext}
            style={{
              width: "100%",
              marginTop: 16,
              padding: "14px 0",
              borderRadius: 10,
              background: "linear-gradient(135deg, #4A90D9, #3A70B9)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 1 && (
        <div style={{ animation: "pi .3s ease" }}>
          <p
            style={{
              color: "var(--text-tertiary)",
              fontSize: 12,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Set a 4-digit PIN to protect catechist mode.
          </p>

          <label
            style={{
              color: "var(--text-tertiary)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              display: "block",
              marginBottom: 6,
            }}
          >
            PIN
          </label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={(e) => {
              setPinVal(e.target.value.replace(/\D/g, "").slice(0, 4));
              setError("");
            }}
            placeholder="••••"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 22,
              fontFamily: "inherit",
              outline: "none",
              textAlign: "center",
              letterSpacing: 8,
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              color: "var(--text-tertiary)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              display: "block",
              marginBottom: 6,
              marginTop: 14,
            }}
          >
            CONFIRM PIN
          </label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value.replace(/\D/g, "").slice(0, 4));
              setError("");
            }}
            placeholder="••••"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 22,
              fontFamily: "inherit",
              outline: "none",
              textAlign: "center",
              letterSpacing: 8,
              boxSizing: "border-box",
            }}
          />

          {error && (
            <p
              style={{
                color: "#D94A4A",
                fontSize: 12,
                textAlign: "center",
                marginTop: 8,
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={handlePinSubmit}
            style={{
              width: "100%",
              marginTop: 16,
              padding: "14px 0",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6DB87B, #4A9B5B)",
              color: "#fff",
              fontFamily: displayFont,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
            }}
          >
            Start Teaching
          </button>
        </div>
      )}
    </div>
  );
}
