import assert from 'node:assert/strict';
import test from 'node:test';
import { compareSessionFields, comparisonText } from './sessionComparison.js';
import { adaptationFixture, expectedPaths } from '../../e2e/fixtures/adaptation.js';

test('fixture includes exactly the enumerated edit, addition, and removal without mutation', () => {
  const { original, draft } = adaptationFixture();
  const snapshot = JSON.stringify({ original, draft });
  const changes = compareSessionFields(original, draft);
  assert.deepEqual(changes.map(c => c.path), expectedPaths);
  assert.deepEqual(changes.map(c => c.kind), ['changed', 'added', 'added', 'added', 'removed', 'removed']);
  assert.equal(changes[0].before, 'God freely made the whole world from nothing, with wisdom and love. (CCC 279).');
  assert.equal(changes[0].after, 'Invite everyone to name something in creation they noticed today.');
  assert.equal(changes[5].before, 'Amen.');
  assert.equal(changes[5].after, undefined);
  assert.equal(JSON.stringify({ original, draft }), snapshot);
});

test('unchanged and unavailable originals are distinct; current draft is recomputed', () => {
  const { original } = adaptationFixture();
  assert.deepEqual(compareSessionFields(original, structuredClone(original)), []);
  assert.equal(compareSessionFields(null, original), null);
  const draft = structuredClone(original);
  draft.title = 'New draft';
  assert.equal(compareSessionFields(original, draft)[0].after, 'New draft');
  draft.title = 'Latest draft';
  assert.equal(compareSessionFields(original, draft)[0].after, 'Latest draft');
});

test('compares all JSON fields including hidden fields, scalar types, and empty containers', () => {
  const before = { a: '', b: null, c: [], d: {}, e: false, f: 0, quiz: { bonus: { correct: 0 } }, extra: 'old' };
  const after = { a: null, b: '', e: true, f: 1, quiz: { bonus: { correct: 1 } }, added: {}, extra: { text: 'new' } };
  assert.deepEqual(compareSessionFields(before, after).map(c => c.path), ['a', 'b', 'c', 'd', 'e', 'f', 'quiz.bonus.correct', 'extra', 'added']);
  assert.equal(comparisonText(undefined), '(Not present)');
  assert.equal(comparisonText(''), '(Empty text)');
  assert.equal(comparisonText(null), 'null');
  assert.equal(comparisonText('  spaced\ntext  '), '  spaced\ntext  ');
});

test('middle removals and reorders are positional, not fabricated identity matches', () => {
  const before = { items: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }, { id: 3, text: 'C' }] };
  const after = { items: [before.items[0], before.items[2]] };
  assert.deepEqual(compareSessionFields(before, after).map(c => [c.path, c.before, c.after]), [
    ['items[1].id', 2, 3], ['items[1].text', 'B', 'C'], ['items[2].id', 3, undefined], ['items[2].text', 'C', undefined],
  ]);
});

test('every bundled grade field can be traversed without assuming one activity shape', async () => {
  for (let grade = 1; grade <= 8; grade++) {
    const { SESSIONS } = await import(`../data/grade${grade}.js`);
    for (const session of SESSIONS) {
      assert.deepEqual(compareSessionFields(session, structuredClone(session)), []);
      const draft = structuredClone(session);
      draft.quiz.bonus.reward += ' test';
      assert.deepEqual(compareSessionFields(session, draft).map(c => c.path), ['quiz.bonus.reward']);
    }
  }
});
