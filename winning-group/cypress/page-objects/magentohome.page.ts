class MagentoHomePage {
  elements = {
    menuItems: () => cy.get('ul[role="menu"]').first(),
    signIn: () => cy.get(".authorization-link").first(),
    createAccount: () => cy.contains("a", "Create an Account").first(),
    searchStore: () => cy.get("#search"),
    submit: () => cy.get('button[class="action search"]'),
    productTitle: () => cy.get('span[data-ui-id="page-title-wrapper"]'),
  };

  searchProductItem(productName: string) {
    this.elements.searchStore().clear();
    this.elements.searchStore().type(productName);
    this.elements.submit().click();
  }
}

export default new MagentoHomePage();
