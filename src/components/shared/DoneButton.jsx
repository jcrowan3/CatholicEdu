const displayFont = "'Lilita One', cursive";

export default function DoneButton({ onClick, text }) {
  return (
    <button
      className="bh"
      onClick={onClick}
      style={{
        width: "100%",
        marginTop: 16,
        padding: "14px 0",
        borderRadius: 12,
        background: "linear-gradient(135deg, #6DB87B, #4A9B5B)",
        color: "#fff",
        fontFamily: displayFont,
        fontSize: 16,
        border: "none",
        cursor: "pointer",
        animation: "bi .4s ease",
      }}
    >
      {text}
    </button>
  );
}
