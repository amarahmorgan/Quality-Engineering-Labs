import { test, expect } from '@playwright/test';

test('buttons', async ({ page }) => {
    await page.goto('https://quality-engineering-labs.vercel.app/index.html');

    await page.getByTestId('deposit-btn').click();
    await page.getByTestId('deposit-btn').click();
    await page.getByTestId('withdraw-btn').click();
    await page.getByTestId('withdraw-btn').click();
})