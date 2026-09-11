import { expect } from '@playwright/test';

export async function openEditor(page, session) {
  await page.goto('/');
  await page.evaluate((session) => {
    localStorage.clear();
    localStorage.setItem('catechist_pin_g1_v1', '2468');
    localStorage.setItem('catechist_program_g1_v1', 'Comparison fixture');
    if (session) localStorage.setItem('catechist_sessions_g1_v1', JSON.stringify({ version: 1, sessions: [session] }));
  }, session);
  await page.reload();
  await page.getByRole('button', { name: /Grade 1/ }).click();
  await page.getByRole('button', { name: 'Catechist Mode' }).click();
  await page.getByLabel('Catechist PIN').fill('2468');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByText(session?.title || 'God Made the World', { exact: true }).click();
  await expect(page.getByRole('heading', { name: new RegExp(`Week ${session?.week || 1}:`) })).toBeVisible();
}

export function section(page, title) {
  return page.getByText(title, { exact: true }).locator('..').locator('..');
}
