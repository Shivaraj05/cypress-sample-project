import magentoHomePage from "../page-objects/magentohome.page";
import util from "../support/utility";

const homePage = magentoHomePage;
let url = util.getBaseUrl("Magento");
const interceptSearchUrl = `${url}/catalogsearch/result/**`;
describe("Product search in Magento Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", interceptSearchUrl, {
      fixture: "./product-search-mock-response.html",
    }).as("mockedResponse");
    cy.visit(url);
  });

  it("search product and validate result", () => {
    const searchProduct = "Hero Hoodie";
    homePage.searchProductItem(searchProduct);
    homePage.elements
      .productTitle()
      .contains(searchProduct)
      .should("be.visible");
    cy.wait("@mockedResponse").its("response.statusCode").should("eq", 200);
  });
});
