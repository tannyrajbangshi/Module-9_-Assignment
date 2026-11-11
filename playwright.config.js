
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  fullyParallel: false,

  retries: 0,

  reporter: 'list',

  use: {
    baseURL: 'https://www.saucedemo.com',

    browserName: 'chromium',

    headless: true,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure'
  }

});
