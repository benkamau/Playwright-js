import { test, expect, type Page } from '@playwright/test';

test.use({
  colorScheme: 'dark' // or 'light'
}); 



test.describe('Test BaseURL',() => {
  test.use({baseURL: undefined})
  test('test baseURL', async ({ page }) => {
    await page.goto('/'); // Navigates to https://playwright.dev/docs/intro
     await page.getByRole('link', { name: 'Doc' }).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    await expect(page).toHaveTitle(/Installation/);
  })
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Navigate to the Playwright website
 
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

});


test('get intro page', async ({ page }) => {
     await page.goto('https://playwright.dev/');

    // Click the "Get started" link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });

//Annotations
//test.skip()  -- to skip a test
test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // This hook is only run in Chromium.
  });

  test('test 1', async ({ page }) => {
    // This test is only run in Chromium.
  });

  test('test 2', async ({ page }) => {
    // This test is only run in Chromium.
  });
});

//test.fail()  -- to mark a test as expected to fail

//test.fixme()  -- to mark a test as needing a fix
test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');

 // await page.goto('http://localhost:3000/settings');
});

test('user profile', async ({ page }) => {
  //await page.getByText('My Profile').click();
  // ...
});
//test.slow()  -- to mark a test as slow
//test.only()  -- to run only a specific test
//test.describe() -- to group tests together

// Group Tests
test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});


//Tag tests
test('test login page', {
  tag: '@fast',
}, async ({ page }) => {
  // ...
});

test('test full report @slow', async ({ page }) => {
  // ...
});

test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header', async ({ page }) => {
    // ...
  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    // ...
  });
});

// Using  --grep on CLI
// npx playwright test --grep "@fast"

test('test login page 2', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  // ...
});

test.describe('report tests', {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test('test report header', async ({ page }) => {
    // ...
  });

  test('test full report', {
    annotation: [
      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
      { type: 'performance', description: 'very slow test!' },
    ],
  }, async ({ page }) => {
    // ...
  });
});

/// Run tests sequentially
test.describe.configure({mode: 'serial'}) // to run tests in a describe block sequentially instead of parallel

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Run First Test', async () => {
  // This test will use the same page instance.
  await page.goto('https://playwright.dev/');
});

test('Run Second Test', async () => {
  // This test will use the same page instance.
  await page.goto('https://playwright.dev/docs/intro');
});

//opt out of parallel tests
test.describe('Run un parallel tests with other describes', () => {
 test.describe.configure({mode: 'default'});
 test(' in order test 1', async ({ page }) => {});
 test(' in order test 2', async ({ page }) => {});
});

//Passing Environment Variables
// test(`example test`, async ({ page }) => {
//   // ...
//   await page.getByLabel('User Name').fill(process.env.USER_NAME);
//   await page.getByLabel('Password').fill(process.env.PASSWORD);
// });

//Retries using worker processes
test.describe('Retries using worker processes', () => {
  test.beforeAll(async () => { /* ... */ });
  test('first good', async ({ page }) => { /* ... */ });
  test('second flaky', async ({ page }) => { /* ... */ });
  test('third good', async ({ page }) => { /* ... */ });
  test.afterAll(async () => { /* ... */ });
});