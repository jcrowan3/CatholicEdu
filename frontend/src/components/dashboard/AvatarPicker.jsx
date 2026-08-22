const AVATARS = [
  "😊", "😄", "🤗", "😎", "🥳",
  "🦁", "🐶", "🐱", "🦋", "🐸",
  "⭐", "🌟", "🌈", "🎨", "⚽",
  "🎵", "📚", "🌻", "🕊️", "💫",
];

export default function AvatarPicker({ value, onChange, accent = "#6DB87B", size = 20 }) {
  return (
    <div
      aria-label="Choose an avatar"
      role="group"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: 4,
      }}
    >
      {AVATARS.map((emoji) => (
        <button
          aria-label={`Use ${emoji} avatar`}
          aria-pressed={value === emoji}
          key={emoji}
          onClick={() => onChange(emoji)}
          type="button"
          style={{
            appearance: "none",
            background: value === emoji ? `color-mix(in srgb, ${accent} 20%, transparent)` : "transparent",
            border: value === emoji ? `2px solid ${accent}` : "2px solid transparent",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: size,
            lineHeight: 1.3,
            padding: "3px 0",
          }}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}
