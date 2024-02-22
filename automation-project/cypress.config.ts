// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   chromeWebSecurity: false,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha/",
      // "quite": true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
