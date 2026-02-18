import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  
  /* General Timeout for the test*/
  //  timeout: 120_000,
 // expect:{ timeout: 5000 },


  /* Reporter to use. in HTML, JSON, JUnit See https://playwright.dev/docs/test-reporters */
   reporter:[
    ['html'],
    ['json',{outputFile:'test-results/Report.json'}],
    ['junit',{outputFile:'test-results/Report.xml'}],
   ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
      baseURL: 'https://playwright.dev/',

      //API testing using proxy
    //  proxy: {
    //   server: 'http://my-proxy:8080',
    //   username: 'user',
    //   password: 'secret'
    // },

    // API tesing using extraHTTPHeaders
    // extraHTTPHeaders: {
    //   // We set this header per GitHub guidelines.
    //   'Accept': 'application/vnd.github.v3+json',
    //   // Add authorization token to all requests.
    //   // Assuming personal access token available in the environment.
    //   'Authorization': `token ${process.env.API_TOKEN}`,
    //},

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // Screenshot on failure and when tracing is enabled
    screenshot: 'only-on-failure',
    
    // Video recording for each test
    video: 'retain-on-failure',


  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'jiji Tests',
      testMatch: 'tests/test-1.spec.ts',
      retries: 3,
    }
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 13'],
    //   },
    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  /*Running multiple web servers*/
  //   webServer: [
  //   {
  //     command: 'npm run start',
  //     url: 'http://localhost:3000',
  //     name: 'Frontend',
  //     timeout: 120 * 1000,
  //     reuseExistingServer: !process.env.CI,
  //   },
  //   {
  //     command: 'npm run backend',
  //     url: 'http://localhost:3333',
  //     name: 'Backend',
  //     timeout: 120 * 1000,
  //     reuseExistingServer: !process.env.CI,
  //   }
  // ],
});
