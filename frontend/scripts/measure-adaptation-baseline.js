// Automated reconstruction is a technical proxy, never human preparation time.
import { chromium } from '@playwright/test';
import { performance } from 'node:perf_hooks';
import { adaptationFixture } from '../e2e/fixtures/adaptation.js';
import { openEditor, section } from '../e2e/fixtures/editor.js';

const { original, draft } = adaptationFixture();
const browser = await chromium.launch();
try {
  const context = await browser.newContext({ baseURL: 'http://127.0.0.1:4173' });
  const page = await context.newPage();
  const records = [];
  const start = performance.now();
  for (const [label, session] of [['original', original], ['draft', draft]]) {
    await openEditor(page, session);
    await page.getByText('Discover', { exact: true }).click();
    await page.getByText('Closing Prayer', { exact: true }).click();
    records.push({
      label,
      meta: await section(page, 'Session Info').locator('input').evaluateAll(nodes => nodes.map(node => node.value)),
      discover: await section(page, 'Discover').locator('input').evaluateAll(nodes => nodes.map(node => node.value)),
      prayer: await section(page, 'Closing Prayer').locator('input, select').evaluateAll(nodes => nodes.map(node => node.value)),
    });
  }
  console.log(JSON.stringify({
    method: 'Automated reconstruction proxy; seeded original and draft opened separately, not human timing',
    elapsed_ms: Math.round(performance.now() - start),
    editor_opens: 2, section_expansions: 4, pane_copy_equivalents: 6,
    session_reference_lookups: 2,
    limitation: 'All fields still require comparison; arbitrary changes require inspecting remaining sections. Removed original needs a separate untouched copy or bundled source; reset would discard draft.',
    records,
  }, null, 2));
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.getByText('Quick Quiz', { exact: true }).click();
  await page.waitForTimeout(300);
  console.log(JSON.stringify({ existing_quiz_errors: errors }));
} finally {
  await browser.close();
}
