import { test, expect } from '@playwright/test';

test('buttons', async ({ page }) => {
    await page.goto('https://quality-engineering-labs.vercel.app/index.html');
    const depositBtn = page.getByTestId('deposit-btn');
    const withdrawBtn = page.getByTestId('withdraw-btn');

    // Assertions before clicking
    await expect(depositBtn).toBeVisible();
    await expect(withdrawBtn).toBeVisible();

    // Actions
    await depositBtn.click();
    await withdrawBtn.click();

    // Assertions after clicking
    await expect(depositBtn).toBeEnabled();
    await expect(withdrawBtn).toBeEnabled();
});

