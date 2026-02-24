 import { test, expect, request } from '@playwright/test';

test('gets the json from api and adds a new fruit', async ({ page }) => {
  // Get the response and add to it
  await page.route('*/**/api/v1/fruits', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'Loquat', id: 100 }, { name: 'Ovacado', id: 101 });
    // Fulfill using the original response, while patching the response body
    // with the given JSON object.
    await route.fulfill({ response, json });
  });

  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the new fruit is visible
  await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
  await expect(page.getByText('Ovacado', { exact: true })).toBeVisible();
});

test('Sucessful response', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();   
   
});


// const REPO = 'test-repo-1';
// const USER = 'github-username';

// test('should create a bug report', async ({ request }) => {
//   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     data: {
//       title: '[Bug] report 1',
//       body: 'Bug description',
//     }
//   });
//   expect(newIssue.ok()).toBeTruthy();

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Bug] report 1',
//     body: 'Bug description'
//   }));
// });

// test('should create a feature request', async ({ request }) => {
//   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     data: {
//       title: '[Feature] request 1',
//       body: 'Feature description',
//     }
//   });
//   expect(newIssue.ok()).toBeTruthy();

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Feature] request 1',
//     body: 'Feature description'
//   }));
// });

// // using beforeAll and afterAll
// test.beforeAll(async ({ request }) => {
//   // Create a new repository
//   const response = await request.post('/user/repos', {
//     data: {
//       name: REPO
//     }
//   });
//   expect(response.ok()).toBeTruthy();
// });

// test.afterAll(async ({ request }) => {
//   // Delete the repository
//   const response = await request.delete(`/repos/${USER}/${REPO}`);
//   expect(response.ok()).toBeTruthy();
// });

// //using request context
// (async () => {
//   // Create a context that will issue http requests.
//   const context = await request.newContext({
//     baseURL: 'https://api.github.com',
//   });

//   // Create a repository.
//   await context.post('/user/repos', {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       // Add GitHub personal access token.
//       'Authorization': `token ${process.env.API_TOKEN}`,
//     },
//     data: {
//       name: REPO
//     }
//   });

//   // Delete a repository.
//   await context.delete(`/repos/${USER}/${REPO}`, {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       // Add GitHub personal access token.
//       'Authorization': `token ${process.env.API_TOKEN}`,
//     }
//   });
// })();

// //Reusing authentication state
// const requestContext = await request.newContext({
//   httpCredentials: {
//     username: 'user',
//     password: 'passwd'
//   }
// });
// await requestContext.get(`https://api.example.com/login`);
// // Save storage state into the file.
// await requestContext.storageState({ path: 'state.json' });

// // Create a new context with the saved storage state.
// const context = await browser.newContext({ storageState: 'state.json' });

