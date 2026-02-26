import { test, expect } from '@playwright/test';

test('test transactions link', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/index.html');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Transactions' }).click();
  await page.getByTestId('delete-txn-1').click();
});