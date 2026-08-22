const FIELD_STYLE = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 6,
  border: "1px solid var(--border-strong)",
  background: "var(--surface-input)",
  color: "var(--text-primary)",
  fontSize: 12,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
};

export default function CommunicationFields({ value, onChange }) {
  return (
    <div style={{ display: "grid", gap: 8, marginBottom: 10 }}>
      <input
        aria-label="Parent email"
        type="email"
        value={value.parentEmail}
        onChange={(event) => onChange({ ...value, parentEmail: event.target.value })}
        placeholder="Parent email"
        style={FIELD_STYLE}
      />
      <textarea
        aria-label="Pickup and contact notes"
        value={value.pickupContactNotes}
        onChange={(event) => onChange({ ...value, pickupContactNotes: event.target.value })}
        placeholder="Pickup/contact notes"
        rows={2}
        style={{ ...FIELD_STYLE, resize: "vertical" }}
      />
      <textarea
        aria-label="Allergy and privacy flags"
        value={value.allergyPrivacyFlags}
        onChange={(event) => onChange({ ...value, allergyPrivacyFlags: event.target.value })}
        placeholder="Allergy/privacy flags"
        rows={2}
        style={{ ...FIELD_STYLE, resize: "vertical" }}
      />
      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-tertiary)", fontSize: 12 }}>
        <input
          type="checkbox"
          checked={value.mediaPermissionGranted}
          onChange={(event) => onChange({ ...value, mediaPermissionGranted: event.target.checked })}
        />
        Media permission granted
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-tertiary)", fontSize: 12 }}>
        <input
          type="checkbox"
          checked={value.weeklyDigestPermission}
          onChange={(event) => onChange({ ...value, weeklyDigestPermission: event.target.checked })}
        />
        Weekly digest permission
      </label>
    </div>
  );
}
