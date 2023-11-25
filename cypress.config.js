module.exports = {
  e2e: {
    specPattern : "cypress/e2e/magento",
    supportFile : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://magento.softwaretestingboard.com/',
  },
};
