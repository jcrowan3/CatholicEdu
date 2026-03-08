/**
 * Find related sessions based on pillar matching and curriculum proximity.
 * Requires no additional data fields — uses existing pillar and week fields.
 */

/**
 * Find sessions related to the current one.
 * Matches by same pillar, sorted by week proximity (nearest first).
 * @param {object} currentSession - The current session object
 * @param {object[]} allSessions - All sessions for the grade
 * @param {number} limit - Maximum number of results (default 3)
 * @returns {{ week: number, title: string, pillar: string }[]}
 */
export function findRelatedSessions(currentSession, allSessions, limit = 3) {
  if (!currentSession || !allSessions) return [];
  return allSessions
    .filter((s) => s.week !== currentSession.week)
    .filter((s) => s.pillar === currentSession.pillar)
    .sort(
      (a, b) =>
        Math.abs(a.week - currentSession.week) -
        Math.abs(b.week - currentSession.week)
    )
    .slice(0, limit);
}
