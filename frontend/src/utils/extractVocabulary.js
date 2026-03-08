/**
 * Extract vocabulary terms and CCC references from session discover items.
 * Works with all grade data files without modification.
 */

/**
 * Extract CCC paragraph references from text.
 * Matches: "CCC 552", "(CCC 553)", "CCC 748-769", "CCC 484–486"
 */
export function extractCCCRefs(text) {
  if (!text) return [];
  const refs = [];
  const re = /CCC\s*(\d+(?:\s*[-–]\s*\d+)?)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    refs.push(`CCC ${m[1].replace(/\s+/g, "")}`);
  }
  return refs;
}

/**
 * Extract vocabulary from a single session.
 * Uses discover item names as terms and descs as definitions.
 * @returns {{ term: string, definition: string, icon: string, cccRefs: string[], week: number, pillar: string }[]}
 */
export function extractSessionVocabulary(session) {
  if (!session?.discover?.items) return [];
  return session.discover.items.map((item) => ({
    term: item.name,
    definition: item.desc,
    icon: item.icon,
    cccRefs: extractCCCRefs(item.desc),
    week: session.week,
    pillar: session.pillar,
  }));
}

/**
 * Extract vocabulary from all sessions for a grade.
 * Deduplicates by term name (keeps first occurrence), sorts alphabetically.
 * @returns {{ term: string, definition: string, icon: string, cccRefs: string[], week: number, pillar: string }[]}
 */
export function extractGradeVocabulary(sessions) {
  if (!sessions) return [];
  const seen = new Map();
  for (const session of sessions) {
    const terms = extractSessionVocabulary(session);
    for (const t of terms) {
      const key = t.term.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, t);
      }
    }
  }
  return Array.from(seen.values()).sort((a, b) =>
    a.term.localeCompare(b.term)
  );
}
