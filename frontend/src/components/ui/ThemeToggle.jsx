import { useTheme } from "../../hooks/theme";

export default function ThemeToggle({ style }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "var(--surface-input)",
        border: "1px solid var(--border-medium)",
        borderRadius: 8,
        padding: "6px 8px",
        cursor: "pointer",
        fontSize: 16,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"}
    </button>
  );
}
