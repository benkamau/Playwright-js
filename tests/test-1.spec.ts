import { test, expect } from '@playwright/test';

// record new launches a new test file
test('test', async ({ page }) => {
  await page.goto('https://jiji.co.ke/');
  await page.getByRole('textbox', { name: '-searchbox' }).click();
  await page.getByRole('textbox', { name: '-searchbox' }).fill('bmw x3');
  await page.getByRole('textbox', { name: '-searchbox' }).press('Enter');
  await page.locator('div:nth-child(2) > .b-top-categories__item__inner > .b-top-categories__item__image').click();
  await page.getByRole('link', { name: 'BMW X5 xDrive35d AWD (3.0L 6cyl 8A) 2017 Black DIAMOND KSh 5,999,000 BMW X5' }).click();
  await page.locator('a').filter({ hasText: 'Show contact' }).first().click();
  await page.locator('.b-auth-popup__close > .icons').click();
});

// record at cursor records actions in the current test file and actions are captured by the cursor click.
test('Record at cursor', async({page}) => {
await page.goto('https://jiji.co.ke/');
await page.getByRole('link', { name: 'Vehicles Vehicles 239,141 ads' }).click();
await page.getByRole('link', { name: 'Vehicle Parts & Accessories |' }).click();
await page.getByText('Engine & Drivetrain', { exact: true }).click();
await page.getByRole('combobox').locator('div').filter({ hasText: /^Search in Vehicle Parts & Accessories$/ }).click();
await page.getByRole('textbox', { name: '-searchbox' }).fill('subaru');
await page.getByRole('textbox', { name: '-searchbox' }).press('Enter');
await page.goto('https://jiji.co.ke/car-parts-and-accessories?filter_attr_1598_type=Engine+%26+Drivetrain&query=subaru');
});

