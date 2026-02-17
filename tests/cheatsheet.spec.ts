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

 // Text input
// await page.getByRole('textbox').fill('Peter');

 // Date input
// await page.getByLabel('Birth date').fill('2020-02-02');

 // Time input
// await page.getByLabel('Appointment time').fill('13:15');

 // Local datetime input
// await page.getByLabel('Local time').fill('2020-03-02T05:15');

 // Check the checkbox
// await page.getByLabel('I agree to the terms above').check();

 // Assert the checked state
// expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();

 // Select the radio button
// await page.getByLabel('XL').check();

 // Single selection matching the value or label
// await page.getByLabel('Choose a color').selectOption('blue');

 // Single selection matching the label
// await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });

// Multiple selected items
// await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

// Generic click
// await page.getByRole('button').click();

// Double click
// await page.getByText('Item').dblclick();

 // Right click
// await page.getByText('Item').click({ button: 'right' });

 // Shift + click
// await page.getByText('Item').click({ modifiers: ['Shift'] });

 // Ctrl + click on Windows and Linux
 // Meta + click on macOS
// await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });

// Hover over element
// await page.getByText('Item').hover();

// Click the top left corner
// await page.getByText('Item').click({ position: { x: 0, y: 0 } });

//Forcing the click
//await page.getByRole('button').click({ force: true });

// Hit Enter
// await page.getByText('Submit').press('Enter');

// Dispatch Control+Right
// await page.getByRole('textbox').press('Control+ArrowRight');

// Press $ sign on keyboard
// await page.getByRole('textbox').press('$');

//Upload file

// Select one file
// await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

// Select multiple files
// await page.getByLabel('Upload files').setInputFiles([
//   path.join(__dirname, 'file1.txt'),
//   path.join(__dirname, 'file2.txt'),
// ]);

// Select a directory
// await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));

// Remove all the selected files
// await page.getByLabel('Upload file').setInputFiles([]);

// Upload buffer from memory
// await page.getByLabel('Upload file').setInputFiles({
//   name: 'file.txt',
//   mimeType: 'text/plain',
//   buffer: Buffer.from('this is test')
// });

// Focus on an element
// await page.getByLabel('Password').focus();

//Drag and Drop
//await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));

// manual drag and drop
// await page.locator('#item-to-be-dragged').hover();
// await page.mouse.down();
// await page.locator('#item-to-drop-at').hover();
// await page.mouse.up();

// Scrolls automatically so that button is visible
// await page.getByRole('button').click();

// Scroll the footer into view, forcing an "infinite list" to load more content
// await page.getByText('Footer text').scrollIntoViewIfNeeded();

// Position the mouse and scroll with the mouse wheel
// await page.getByTestId('scrolling-container').hover();
// await page.mouse.wheel(0, 10);

// Alternatively, programmatically scroll a specific element
// await page.getByTestId('scrolling-container').evaluate(e => e.scrollTop += 100);