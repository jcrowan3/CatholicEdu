export const CURRICULUM_SCHEMA_VERSION = 1;

/**
 * Wrap a grade's sessions in a stable, versioned contract for tooling and imports.
 * Session objects stay unchanged so saved progress and overrides remain compatible.
 */
export function defineCurriculum(grade, sessions) {
  if (!Number.isInteger(grade) || grade < 1 || grade > 8) {
    throw new TypeError("Curriculum grade must be an integer from 1 through 8.");
  }
  if (!Array.isArray(sessions)) {
    throw new TypeError(`Grade ${grade} curriculum sessions must be an array.`);
  }

  return Object.freeze({
    schemaVersion: CURRICULUM_SCHEMA_VERSION,
    grade,
    sessionCount: sessions.length,
    sessions,
  });
}
