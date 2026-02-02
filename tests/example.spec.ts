import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Navigate to the Playwright website

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // //Using locators
  // const getStarted = page.getByRole('link', { name: 'Get started' });
  // //click the get started link
  // await getStarted.click();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();



});

test.describe('Playwright Demo Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Playwright website before each test
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });
})
// launch options
// npx playwright test --project="chromium" tests/example.spec.ts
// npx playwright test --headed
// npx playwright test tests/example.spec.ts --reporter=html
// npx playwright show-report  
// npx playwright test --ui
// npx playwright test --last-failed     --run only the test that failed in the previous run

//Basic actions
// locator.check()  -- for checkboxes
// locator.uncheck()  -- for checkboxes
// locator.selectOption()  -- for dropdowns
// locator.fill()  -- for input fields
// locator.type()  -- for input fields
// locator.press()  -- for keyboard actions
// locator.hover()  -- for mouse hover actions
// locator.scrollIntoViewIfNeeded()  -- to scroll to an element
// locator.screenshot()  -- to take a screenshot of an element
// locator.focus()  -- to focus on an element
// locator.setInputFiles()  -- to upload files
// locator.clear()  -- to clear input fields
// locator.evaluate()  -- to run JavaScript code within the browser context

//Assertions
// expect(locator).toBeVisible()  -- to check visibility
// expect(locator).toBeHidden()  -- to check if hidden
// expect(locator).toHaveText()  -- to check text content
// expect(locator).toHaveAttribute()  -- to check attributes
// expect(locator).toHaveClass()  -- to check CSS classes
// expect(locator).toHaveCount()  -- to check number of elements
// expect(locator).toBeEnabled()  -- to check if enabled
// expect(locator).toBeDisabled()  -- to check if disabled
// expect(locator).toBeChecked()  -- to check if checkbox/radio is checked
// expect(locator).toBeEmpty()  -- to check if empty
// expect(page).toHaveURL()  -- to check the current URL
// expect(locator).toBeTruthy()  -- to check if truthy -- does not need await as it is not a promise

//test hooks
// test.beforeEach(async ({ page }) => {
//   // Code to run before each test
// });

// test.afterEach(async ({ page }) => {
//   // Code to run after each test
// });

// test.beforeAll(async () => {
//   // Code to run before all tests
// });

// test.afterAll(async () => {
//   // Code to run after all tests
// });

//Codegen command
// npx playwright codegen https://playwright.dev/
// This command will open a browser and generate code for the actions you perform on the specified URL.

//debugging
// npx playwright test --debug
// npx playwright test example.spec.ts --debug   --- debug a specific test file
// npx playwright test example.spec.ts:10 --debug  -- debug a specifica test by line number


//Test Reports
// npx playwright show-report

// Trace run
// npx playwright test --trace on
// npx playwright test example.spec.ts --trace on