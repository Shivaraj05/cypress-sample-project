import saucedemoPage from "../page-objects/saucedemo.page";
import util from "../support/utility";

let url = util.getBaseUrl("Saucedemo");
describe("Login to Saucedemo", () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://events.backtrace.io/api/**', {
    //     statusCode: 200,
    //     body: []
    // }).as('mockedResponse');
    // cy.setSessionStorage('backtrace-last-active', '1697768610562')
    // cy.setSessionStorage('backtrace-guid', '341fe98e-7898-4676-9475-3f7a804f376c')
    cy.visit(url);
  });

  it("validate login functionality", () => {
    cy.loginSaucedemo();
    saucedemoPage.elements.products().should("be.visible");
    saucedemoPage.elements.shoppingCart().should("be.visible");
    saucedemoPage.elements.sortItems().should("be.visible");
    saucedemoPage.elements.inventoryItems().should("have.length.above", 1);
    saucedemoPage.elements.menuButton().click();
    saucedemoPage.elements.logout().should("be.visible");
    saucedemoPage.elements.logout().click();
  });
});
