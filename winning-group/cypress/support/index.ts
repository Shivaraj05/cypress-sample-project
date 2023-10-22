import "./commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      visitMagento(): Chainable<any>;
      loginSaucedemo(): Chainable<any>;
      setSessionStorage(key: string, value: string): Chainable<any>;
    }
  }
}
