import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { Buffer } from 'node:buffer';
import { performance } from 'node:perf_hooks';
import { adaptationFixture, expectedPaths } from './fixtures/adaptation.js';
import { openEditor, section } from './fixtures/editor.js';

const summary = page => page.getByRole('region', { name: 'Adaptation summary' });
async function openSummary(page) {
  await page.locator('summary').filter({ hasText: 'Adaptation summary' }).click();
  await expect(summary(page).getByText(/changed fields|No changes|original unavailable/)).toBeVisible();
}

test('fixture context is exact, current, accessible, and survives save/reload and PDF export', async ({ page }, testInfo) => {
  const { original, draft } = adaptationFixture();
  const start = performance.now();
  await openEditor(page, draft);
  await openSummary(page);
  const region = summary(page);
  await expect(region.locator('[data-field]')).toHaveCount(6);
  expect(await region.locator('[data-field]').evaluateAll(nodes => nodes.map(node => node.dataset.field))).toEqual(expectedPaths);
  const expected = [
    [original.discover.items[0].desc, draft.discover.items[0].desc],
    ['(Not present)', '📝'], ['(Not present)', 'Class reflection'],
    ['(Not present)', 'Allow quiet thinking time before sharing.'],
    ['A', '(Not present)'], ['Amen.', '(Not present)'],
  ];
  for (let index = 0; index < expected.length; index++) {
    const row = region.locator('[data-field]').nth(index);
    await expect(row.locator('[data-version="before"]')).toHaveText(expected[index][0]);
    await expect(row.locator('[data-version="after"]')).toHaveText(expected[index][1]);
    await expect(row.getByText('Field-specific reference mapping unavailable.')).toBeVisible();
  }
  await expect(region.getByText('Unavailable', { exact: true })).toHaveCount(2);
  await expect(region.getByText(original.verse, { exact: true })).toHaveCount(2);
  await expect(region.getByText(/does not approve content or verify sources/)).toBeVisible();
  console.log(JSON.stringify({ measurement: 'automated after proxy, includes UI verification', project: testInfo.project.name,
    elapsed_ms: Math.round(performance.now() - start), editor_opens: 1, summary_expansions: 1,
    pane_copy_equivalents: 0, separate_session_reference_lookups: 0, human_effort: 'not measured' }));
  const violations = await new AxeBuilder({ page }).include('details').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(violations.violations).toEqual([]);
  await expect(page.locator('body')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await region.evaluate(element => element.scrollIntoView({ block: "start" }));
  await page.evaluate(() => window.scrollBy(0, -70));
  await page.screenshot({ path: `../output/playwright/adaptation-${testInfo.project.name}.png` });

  // Changes are derived directly from live editor state, without reopening.
  await section(page, 'Session Info').locator('input').first().fill('Latest unsaved title');
  await expect(region.locator('[data-field="title"] [data-version="after"]')).toHaveText('Latest unsaved title');
  await page.getByText('Quick Quiz', { exact: true }).click();
  const quiz = section(page, 'Quick Quiz');
  await expect(quiz.locator('input[type="radio"]')).toHaveCount(20);
  await quiz.locator('input:not([type="radio"])').nth(1).fill('God — Creator');
  await expect(region.locator('[data-field="quiz.questions[0].opts[0]"] [data-version="after"]')).toHaveText('God — Creator');
  await page.getByRole('button', { name: 'Review & Save', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Saved ✓', exact: true })).toBeVisible();
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('catechist_sessions_g1_v1')).sessions[0]);
  expect(stored.title).toBe('Latest unsaved title');
  expect(stored.quiz.questions[0].opts[0]).toBe('God — Creator');
  expect(stored.quiz.questions[0]).not.toHaveProperty('options');
  await page.reload();
  await page.getByRole('button', { name: /Grade 1/ }).click();
  await page.getByRole('button', { name: 'Catechist Mode' }).click();
  await page.getByLabel('Catechist PIN').fill('2468');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByText('Latest unsaved title', { exact: true }).click();
  await openSummary(page);
  await expect(summary(page).locator('[data-field]')).toHaveCount(8);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: /PDF/ }).click();
  const download = await downloadPromise;
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  expect(Buffer.concat(chunks).subarray(0, 5).toString()).toBe('%PDF-');

  // Existing deterministic review still blocks a known doctrinal error.
  await section(page, 'Session Info').locator('input').first().fill('Jesus is only a man');
  await page.getByRole('button', { name: 'Review & Save', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Jesus must be presented as true God and true man.');
});

test('unchanged draft, reset, and missing original are explicit', async ({ page }) => {
  await openEditor(page);
  await openSummary(page);
  await expect(summary(page).getByText('No changes from the bundled original.')).toBeVisible();
  await section(page, 'Session Info').locator('input').first().fill('Temporary edit');
  await expect(summary(page).locator('[data-field="title"]')).toBeVisible();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Reset', exact: true }).click();
  await expect(summary(page).getByText('No changes from the bundled original.')).toBeVisible();
  const { draft } = adaptationFixture();
  draft.week = 99;
  await openEditor(page, draft);
  await openSummary(page);
  await expect(summary(page).getByText(/Bundled original unavailable/)).toBeVisible();
  await expect(summary(page).locator('[data-field]')).toHaveCount(0);
});

test('original load failure cannot become an empty comparison', async ({ page }) => {
  await page.route('**/src/data/grade1.js', route => route.abort());
  await openEditor(page, adaptationFixture().draft);
  await openSummary(page);
  await expect(summary(page).getByText(/Bundled original unavailable/)).toBeVisible();
});

test('legacy quiz options remain editable without adding opts', async ({ page }) => {
  const { draft } = adaptationFixture();
  for (const question of draft.quiz.questions) {
    question.options = question.opts;
    delete question.opts;
  }
  await openEditor(page, draft);
  await page.getByText('Quick Quiz', { exact: true }).click();
  await section(page, 'Quick Quiz').locator('input:not([type="radio"])').nth(1).fill('Creator');
  await page.getByRole('button', { name: 'Review & Save', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Saved ✓', exact: true })).toBeVisible();
  const question = await page.evaluate(() => JSON.parse(localStorage.getItem('catechist_sessions_g1_v1')).sessions[0].quiz.questions[0]);
  expect(question.options[0]).toBe('Creator');
  expect(question).not.toHaveProperty('opts');
});
