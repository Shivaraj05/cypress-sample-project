class SaucedemoPage {
  elements = {
    products: () => cy.contains(".title", "Products"),
    shoppingCart: () => cy.get("#shopping_cart_container"),
    menuButton: () => cy.get("#react-burger-menu-btn"),
    logout: () => cy.get("#logout_sidebar_link"),
    inventoryItems: () => cy.get(".inventory_item_name"),
    sortItems: () => cy.get('select[data-test="product_sort_container"]'),
    username: () => cy.get("#user-name"),
    pssword: () => cy.get("#password"),
    loginButton: () => cy.contains("#login-button", "Login"),
  };
}

export default new SaucedemoPage();
