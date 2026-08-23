import { useRef, useState } from "react";

import {
  createOfflineBackup,
  parseOfflineBackup,
  restoreOfflineBackup,
} from "../../data/offlineBackup";
import { DISPLAY_FONT as displayFont } from "../../utils/constants";

export default function OfflineDataTools() {
  const inputRef = useRef(null);
  const [status, setStatus] = useState(null);

  const downloadBackup = () => {
    const backup = createOfflineBackup();
    const blob = new Blob([`${JSON.stringify(backup, null, 2)}\n`], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `catechist-toolkit-backup-${backup.exportedAt.slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setStatus({ type: "success", text: `Backup downloaded with ${backup.entries.length} records.` });
  };

  const restoreBackup = async (event) => {
    const [file] = event.target.files || [];
    event.target.value = "";
    if (!file) return;

    try {
      const text = await file.text();
      const backup = parseOfflineBackup(text);
      const confirmed = window.confirm(
        `Replace this browser's offline toolkit data with ${backup.entries.length} records from the selected backup? Online sign-in tokens will not be changed.`
      );
      if (!confirmed) {
        setStatus({ type: "info", text: "Restore cancelled; no data changed." });
        return;
      }
      const result = restoreOfflineBackup(localStorage, backup);
      setStatus({ type: "success", text: `Restored ${result.restored} records. Reloading…` });
      window.setTimeout(() => window.location.reload(), 250);
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Restore failed." });
    }
  };

  return (
    <section
      aria-labelledby="offline-data-title"
      style={{
        background: "var(--surface-card)",
        borderRadius: 10,
        padding: "14px",
        border: "1px solid var(--border-default)",
        marginBottom: 20,
      }}
    >
      <h2
        id="offline-data-title"
        style={{
          fontFamily: displayFont,
          color: "var(--text-primary)",
          fontSize: 17,
          margin: "0 0 5px",
        }}
      >
        Offline data backup
      </h2>
      <p style={{ color: "var(--text-tertiary)", fontSize: 11, lineHeight: 1.45, margin: "0 0 10px" }}>
        Download a private copy before changing browsers or clearing site data. The file can contain
        student details, progress, curriculum edits, and the local catechist PIN; store it securely.
        Online account tokens are never exported or replaced.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <button type="button" className="bh" onClick={downloadBackup} style={buttonStyle}>
          Download backup
        </button>
        <button
          type="button"
          className="bh"
          onClick={() => inputRef.current?.click()}
          style={buttonStyle}
        >
          Restore backup
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          onChange={restoreBackup}
          aria-label="Choose offline backup file"
          style={{ display: "none" }}
        />
      </div>
      {status && (
        <p
          role="status"
          style={{
            color: status.type === "error" ? "var(--accent-red)" : "var(--text-secondary)",
            fontSize: 11,
            margin: "10px 0 0",
          }}
        >
          {status.text}
        </p>
      )}
    </section>
  );
}

const buttonStyle = {
  padding: "9px 13px",
  borderRadius: 8,
  border: "1px solid var(--border-medium)",
  background: "var(--surface-input)",
  color: "var(--text-primary)",
  fontFamily: displayFont,
  fontSize: 12,
  cursor: "pointer",
};
