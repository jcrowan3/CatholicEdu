export default function ConnectionBanner({ visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        padding: "10px 14px",
        background: "rgba(120, 53, 15, 0.92)",
        color: "#FFF7ED",
        borderBottom: "1px solid rgba(251, 191, 36, 0.45)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
        backdropFilter: "blur(10px)",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 0.2,
      }}
    >
      Offline mode — lessons stay available, and new stars save here until they can sync.
    </div>
  );
}
