
import { test, expect } from '@playwright/test';
test('Check heading visible', async ({ page }) => {
    await page.goto('https://quality-engineering-labs.vercel.app/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).not.toBeEmpty();

});