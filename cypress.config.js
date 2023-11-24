const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
// <<<<<<< HEAD
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      username: "",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5500,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
// =======
    specPattern : "cypress/e2e/magento",
    supportFile : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://magento.softwaretestingboard.com/',
// >>>>>>> 0ec6f3301f8615f2402c8182f9d4f2717c69afba
  },
});
