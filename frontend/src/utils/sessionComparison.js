const ABSENT = Symbol('absent');
const isContainer = value => value !== null && typeof value === 'object';

/** Compare JSON session fields without mutating either version. Arrays compare
 * by position (not inferred identity); an item deletion may shift later rows.
 * Missing properties are distinct from empty strings, null, and empty objects.
 */
export function compareSessionFields(original, draft) {
  if (!original || !draft) return null;
  const changes = [];
  function visit(before, after, path) {
    if (Object.is(before, after)) return;
    const beforeContainer = isContainer(before);
    const afterContainer = isContainer(after);
    const compatible = (beforeContainer && afterContainer && Array.isArray(before) === Array.isArray(after))
      || (before === ABSENT && afterContainer) || (after === ABSENT && beforeContainer);
    if (compatible) {
      const keys = [...new Set([
        ...Object.keys(beforeContainer ? before : {}),
        ...Object.keys(afterContainer ? after : {}),
      ])];
      if (keys.length) {
        const array = Array.isArray(before) || Array.isArray(after);
        for (const key of keys) {
          const nextPath = array ? `${path}[${key}]` : path ? `${path}.${key}` : key;
          visit(beforeContainer && Object.hasOwn(before, key) ? before[key] : ABSENT,
            afterContainer && Object.hasOwn(after, key) ? after[key] : ABSENT, nextPath);
        }
        return;
      }
      if (beforeContainer && afterContainer) return;
    }
    changes.push({
      path, kind: before === ABSENT ? 'added' : after === ABSENT ? 'removed' : 'changed',
      before: before === ABSENT ? undefined : before,
      after: after === ABSENT ? undefined : after,
    });
  }
  visit(original, draft, '');
  return changes;
}

export function comparisonText(value) {
  if (value === undefined) return '(Not present)';
  if (value === '') return '(Empty text)';
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

const LABELS = {
  discover: 'Discover', items: 'Items', icon: 'Icon', name: 'Name', desc: 'Description',
  title: 'Title', instruction: 'Instruction', prayer: 'Prayer', lines: 'Lines',
  s: 'Speaker', t: 'Text', quiz: 'Quiz', questions: 'Questions', q: 'Question',
  opts: 'Options', options: 'Options', correct: 'Correct answer index', bonus: 'Bonus',
  ccc: 'CCC reference', verse: 'Scripture verse', pillar: 'Pillar', week: 'Week',
  timeline: 'Timeline', order: 'Order', id: 'ID', text: 'Text', sort: 'Sort & Match',
  groups: 'Groups', group: 'Group', fillblank: 'Fill the Blank', sentences: 'Sentences',
  answer: 'Answer', secondary: 'Secondary activity', reward: 'Reward',
};
export function comparisonLabel(path) {
  return path.replace(/\[(\d+)\]/g, (_, index) => `.${Number(index) + 1}`)
    .split('.').map(part => LABELS[part] || part).join(' › ');
}
