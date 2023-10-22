class Utility {
  getBaseUrl(env: string) {
    //  let env = Cypress.env('ENV');

    switch (env) {
      case "Saucedemo":
        return " https://www.saucedemo.com";
      case "Magento":
        return "https://magento.softwaretestingboard.com";
    }
  }
}

export default new Utility();
