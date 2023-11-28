import { faker } from "@faker-js/faker"
import registerPage from "../../support/pageObject/registerPage";

const email = "joko@mailinator.com"
const pwd = "@Joko123"
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const fakeEmail = `${firstName}@mailinator.com`;
const password = faker.internet.password();
const fullname = `${firstName} ${lastName}`

describe('Register Feature', () => {
    it('Register Success Using Valid Data', () => {
     cy.visit('')
     cy.wait(1000)
     registerPage.clickRegister();
     cy.wait(2000)
     registerPage.firstname();
     cy.wait(2000)
     registerPage.lastname();
     cy.wait(2000)
     registerPage.email();
     cy.wait(2000)
     registerPage.pwd();
     cy.wait(2000)
     registerPage.confirmPwd();
     cy.wait(2000)
     registerPage.clickCreateAccount();
     cy.wait(5000)
     registerPage.msgSuccessRegister();
   })
  it('Register Failed Using Already Data', () => {
    cy.visit('')
    cy.wait(1000)
    registerPage.clickRegister();
    cy.wait(2000)
    registerPage.firstname();
    cy.wait(2000)
    registerPage.lastname();
    cy.wait(2000)
    registerPage.email();
    cy.wait(2000)
    registerPage.pwd();
    cy.wait(2000)
    registerPage.confirmPwd();
    cy.wait(2000)
    registerPage.clickCreateAccount();
    cy.wait(5000)
    registerPage.msgErrorRegister_alreadyAccount();
    cy.wait(2000)
  })
  it('Register Failed with Empty Fisrtname', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(2000)
    cy.get('#lastname').type(`${faker.person.lastName()}`)
    cy.wait(2000)
    cy.get('#email_address').type(`${faker.person.firstName()}@mailinator.com`)
    cy.wait(2000)
    cy.get('#password').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#password-confirmation').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#firstname-error').should('contain','This is a required field.')
  })
  it('Register Failed with Empty Lastname', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(2000)
    cy.get('#firstname').type(`${faker.person.firstName()}`)
    cy.wait(2000)
    cy.get('#email_address').type(`${faker.person.firstName()}@mailinator.com`)
    cy.wait(2000)
    cy.get('#password').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#password-confirmation').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#lastname-error').should('contain','This is a required field.')
  })
  it('Register Failed with Empty Email Address', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(6000)
    cy.get('#firstname').type(`${faker.person.firstName()}`)
    cy.wait(2000)
    cy.get('#lastname').type(`${faker.person.lastName()}`)
    cy.wait(2000)
    cy.get('#password').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#password-confirmation').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#email_address-error').should('contain','This is a required field.')
  })
  it('Register Failed with Empty Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(6000)
    cy.get('#firstname').type(`${faker.person.firstName()}`)
    cy.wait(2000)
    cy.get('#lastname').type(`${faker.person.lastName()}`)
    cy.wait(2000)
    cy.get('#email_address').type(`${faker.person.firstName()}@mailinator.com`)
    cy.wait(2000)
    cy.get('#password-confirmation').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#password-error').should('contain','This is a required field.')
  })
  it('Register Failed with Empty Confirm Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(2000)
    cy.get('#firstname').type(`${faker.person.firstName()}`)
    cy.wait(2000)
    cy.get('#lastname').type(`${faker.person.lastName()}`)
    cy.wait(2000)
    cy.get('#email_address').type(`${faker.person.firstName()}@mailinator.com`)
    cy.wait(2000)
    cy.get('#password').type(`${faker.internet.password()}`)
    cy.wait(2000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#password-confirmation-error').should('contain','This is a required field.')
  })
  it('Register Failed with Empty All Field', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.wait(6000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.wait(2000)
    cy.get('#firstname-error').should('contain','This is a required field.')
    cy.get('#lastname-error').should('contain','This is a required field.')
    cy.get('#email_address-error').should('contain','This is a required field.')
    cy.get('#password-error').should('contain','This is a required field.')
    cy.get('#password-confirmation-error').should('contain','This is a required field.')
  })
})