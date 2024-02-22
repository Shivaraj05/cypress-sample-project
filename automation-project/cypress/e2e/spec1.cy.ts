import magentoHomePage from "../page-objects/magentohome.page";
import util from "../support/utility";

const homePage = magentoHomePage;
let url = util.getBaseUrl("Magento");

describe("Validate the Magento Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", `${url}`).as("getContent");
    cy.intercept("GET", "/pub/static/**").as("getContentV1");

    cy.visitMagento();
  });

  it("validate if all expected elements are present", () => {
    cy.wait("@getContent").its("response.statusCode").should("eq", 200);
    cy.wait("@getContentV1").its("response.statusCode").should("eq", 200);
    homePage.elements.menuItems().should("be.visible");
    homePage.elements.createAccount().should("be.visible");
    homePage.elements.searchStore().should("be.visible");
    homePage.elements.signIn().should("be.visible");
  });
});
