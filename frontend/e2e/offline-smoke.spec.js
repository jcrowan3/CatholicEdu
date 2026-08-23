import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear());
  await page.goto("/");
});

async function openDemoStudent(page) {
  await page.getByRole("button", { name: /Grade 1/ }).click();
  await expect(page.getByRole("heading", { name: "Welcome, Catechist!" })).toBeVisible();

  await page.getByLabel(/Parish \/ Program Name/i).fill("St. Raphael Faith Formation");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByLabel("PIN", { exact: true }).fill("2468");
  await page.getByLabel("CONFIRM PIN", { exact: true }).fill("2468");
  await page.getByRole("button", { name: "Start Teaching" }).click();

  await expect(page.getByRole("heading", { name: "St. Raphael Faith Formation" })).toBeVisible();
  await page.getByRole("button", { name: /Maria \(Demo\)/ }).click();
  await expect(page.getByRole("button", { name: /Discover/ })).toBeVisible();
}

test("landing page exposes the curriculum and passes automated accessibility checks", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Catholic Catechist Toolkit" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Grade 1/ })).toBeEnabled();
  await expect(page.getByRole("button", { name: /Grade 2/ })).toBeEnabled();
  await expect(page.getByText(/requires qualified human review before parish use/)).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("a new offline classroom can be configured and opened as a student", async ({ page }) => {
  await openDemoStudent(page);
  await expect(page.getByRole("button", { name: /Quick Quiz/ })).toBeVisible();
});

test("student learning and navigation surfaces pass automated accessibility checks", async ({ page }) => {
  await openDemoStudent(page);

  let results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);

  await page.getByRole("button", { name: /Discover/ }).click();
  await expect(page.getByRole("heading", { name: /Discover/i })).toBeVisible();
  results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
