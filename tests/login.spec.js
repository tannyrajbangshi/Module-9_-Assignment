
const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

// Import Test Data
const users = require('../data/users.json');

// Run Test for Each User
users.forEach((user) => {

  test(`Login Test - ${user.username} - Expected: ${user.expected}`,
    async ({ page }) => {

      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      // Open Website
      await page.goto('/');

      // Login with Test Data
      await loginPage.login(user.username, user.password);

      // Check Expected Result
      if (user.expected === 'success') {

        expect(await inventoryPage.isLoaded()).toBe(true);

      } else if (user.expected === 'error') {

        const errorMessage = await loginPage.getErrorMessage();

        expect(errorMessage.trim()).not.toBe('');

      }

    }
  );

});
