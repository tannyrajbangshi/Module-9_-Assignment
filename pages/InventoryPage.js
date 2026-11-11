
class InventoryPage {

  constructor(page) {
    this.page = page;

    // Inventory page locators
    this.pageTitle = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-list"]');
  }

  // Check whether inventory page is loaded
  async isLoaded() {

    try {

      // Wait for inventory page title
      await this.pageTitle.waitFor({
        state: 'visible',
        timeout: 10000
      });

      // Wait for product list
      await this.productList.waitFor({
        state: 'visible',
        timeout: 10000
      });

      return true;

    } catch (error) {

      return false;

    }
  }
}

module.exports = InventoryPage;
