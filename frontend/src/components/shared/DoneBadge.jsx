import { DISPLAY_FONT as displayFont } from "../../utils/constants";

export default function DoneBadge() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 14,
        padding: 12,
        background: "rgba(109,184,123,.1)",
        borderRadius: 10,
        border: "1px solid rgba(109,184,123,.25)",
      }}
    >
      <span style={{ fontSize: 22 }}>✅</span>
      <span
        style={{
          fontFamily: displayFont,
          fontSize: 13,
          color: "#6DB87B",
          marginLeft: 8,
        }}
      >
        Completed!
      </span>
    </div>
  );
}
