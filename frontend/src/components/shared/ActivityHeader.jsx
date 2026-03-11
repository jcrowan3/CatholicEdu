import { DISPLAY_FONT as displayFont } from "../../utils/constants";

/** Shared header for activity screens — renders a title and optional instruction. */
export default function ActivityHeader({ title, instruction }) {
  return (
    <>
      <h2
        style={{
          fontFamily: displayFont,
          fontSize: 22,
          color: "var(--text-primary)",
          margin: "0 0 5px",
        }}
      >
        {title}
      </h2>
      {instruction && (
        <p
          style={{
            color: "var(--text-tertiary)",
            fontSize: 12,
            margin: "0 0 14px",
          }}
        >
          {instruction}
        </p>
      )}
    </>
  );
}
