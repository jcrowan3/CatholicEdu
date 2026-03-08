export default function Feedback({ feedback }) {
  if (!feedback) return null;

  const isCorrect = feedback.type === "correct";
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: 8,
        marginBottom: 10,
        background: isCorrect
          ? "rgba(109,184,123,.12)"
          : "rgba(217,74,74,.12)",
        border: `1px solid ${
          isCorrect ? "rgba(109,184,123,.3)" : "rgba(217,74,74,.3)"
        }`,
        color: isCorrect ? "#6DB87B" : "#D94A4A",
        fontSize: 13,
        fontWeight: 700,
        textAlign: "center",
        animation: "bi .3s ease",
      }}
    >
      {feedback.message}
    </div>
  );
}
