/** Shared constants used across the app. */

export const DISPLAY_FONT = "'Lilita One', cursive";

/** Design system colors. */
export const COLORS = {
  gold: "#D4A843",
  green: "#6DB87B",
  red: "#D94A4A",
  blue: "#4A90D9",
  purple: "#9B6DB8",
};

/** Answer option styling helpers — returns { bg, borderColor } for quiz/fillblank options. */
export function answerOptionStyle(picked, optionValue, correctValue) {
  if (picked === null || picked === undefined) {
    return { bg: "var(--surface-card)", borderColor: "rgba(255,255,255,.07)" };
  }
  if (optionValue === correctValue) {
    return { bg: "rgba(109,184,123,.15)", borderColor: COLORS.green };
  }
  if (optionValue === picked) {
    return { bg: "rgba(217,74,74,.15)", borderColor: COLORS.red };
  }
  return { bg: "var(--surface-card)", borderColor: "rgba(255,255,255,.07)" };
}

/** Progress bar colors for quiz/fillblank step indicators. */
export function stepBarColor(index, currentIndex, results) {
  if (index < currentIndex) {
    return results[index] ? COLORS.green : COLORS.red;
  }
  if (index === currentIndex) return COLORS.gold;
  return "var(--text-invisible)";
}
