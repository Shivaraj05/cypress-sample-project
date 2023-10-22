import util from "../support/utility";
import saucedemoPage from "../page-objects/saucedemo.page";
import { password, username } from "./constants";

let url = util.getBaseUrl("Magento");

Cypress.Commands.add("visitMagento", () => {
  return cy.visit(url);
});

Cypress.Commands.add("loginSaucedemo", () => {
  saucedemoPage.elements.username().type(username);
  saucedemoPage.elements.pssword().type(password, { log: false });
  saucedemoPage.elements.loginButton().click();
});

Cypress.Commands.add("setSessionStorage", (key, value) => {
  cy.window().then((window) => {
    return window.sessionStorage.setItem(key, value);
  });
});
