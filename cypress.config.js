const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern : "cypress/e2e/magento",
    supportFile : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://magento.softwaretestingboard.com/',
    env: {
      username: "",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5500,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
  },
});
