import { SESSIONS } from '../../src/data/grade1.js';

// Synthetic classroom edits only. No curriculum source is changed.
export function adaptationFixture() {
  const original = structuredClone(SESSIONS[0]);
  const draft = structuredClone(original);
  draft.discover.items[0].desc = 'Invite everyone to name something in creation they noticed today.';
  draft.prayer.lines.pop();
  draft.discover.items.push({ icon: '📝', name: 'Class reflection', desc: 'Allow quiet thinking time before sharing.' });
  return { original, draft };
}

// Manually enumerated positional leaf changes, independent of the comparator.
export const expectedPaths = [
  'discover.items[0].desc',
  'discover.items[3].icon',
  'discover.items[3].name',
  'discover.items[3].desc',
  'prayer.lines[5].s',
  'prayer.lines[5].t',
];
