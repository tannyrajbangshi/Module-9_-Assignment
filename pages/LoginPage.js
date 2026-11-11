
class LoginPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Login method
  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  // Get error message
  async getErrorMessage() {
    if (await this.errorMessage.isVisible()) {
      return await this.errorMessage.innerText();
    }

    return '';
  }
}

// Export class
module.exports = LoginPage;
