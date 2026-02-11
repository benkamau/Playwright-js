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

//Passing Environment Variables
// test(`example test`, async ({ page }) => {
//   // ...
//   await page.getByLabel('User Name').fill(process.env.USER_NAME);
//   await page.getByLabel('Password').fill(process.env.PASSWORD);
// });


//Sharding is a technique to split test files into smaller groups and run them in parallel across multiple machines or processes. This can significantly reduce the overall 
// test execution time, especially for large test suites. Playwright does not have built-in support for sharding, but you can achieve it by using a test runner like Jest or Mocha in combination with Playwright.
//Sharding in Playwright means splitting your tests into smaller parts called "shards". Each shard is like a separate job that can run independently.
// sharding between multiple machines:
// npx playwright test --shard=1/4
// npx playwright test --shard=2/4
// npx playwright test --shard=3/4
// npx playwright test --shard=4/4