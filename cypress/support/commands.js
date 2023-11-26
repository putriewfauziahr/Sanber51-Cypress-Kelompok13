// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("login", (email, passw) => {
  cy.get("#email").clear().type(email);
  cy.get("#pass").clear().type(passw);
  cy.get(".action.login.primary").click();
});

Cypress.Commands.add("verifyContain", (locator, value) => {
  cy.get(locator).should("contain", value);
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Fixtures and Custom Commands
Cypress.Commands.add('login', () => {
    cy.fixture('../fixtures/example.json').then((data) => {
      cy.visit('/');        
      cy.get('.home-main > .content > .title').should('contain','Get fit and look fab in new seasonal styles')
      cy.wait(2000);
      cy.get('.panel>.header>.authorization-link>a').click();
      cy.get('#email').type(data.putriemail);
      cy.get('#pass').type(data.putripass);
      cy.get('#send2').click();
    })
    });
// >>>>>>> 0ec6f3301f8615f2402c8182f9d4f2717c69afba

Cypress.on('uncaught:exception', (err, runnable) => {
  // Turn off automatic failure on uncaught exceptions
  return false;
});
