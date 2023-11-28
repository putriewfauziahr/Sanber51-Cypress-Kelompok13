import { faker } from "@faker-js/faker"

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fakeEmail = `${firstName}@mailinator.com`;
const password = faker.internet.password();
const fullname = `${firstName} ${lastName}`

class registerPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }

    clickRegister() {
        cy.get('.panel > .header > :nth-child(3) > a').click()
    }

    firstname() {
        cy.get('#firstname').type(firstName)
    }
    
    lastname() {
        cy.get('#lastname').type(lastName)
    }

    email() {
        cy.get('#email_address').type(fakeEmail)
    }

    pwd() {
        cy.get('#password').type(password)
    }

    confirmPwd() {
        cy.get('#password-confirmation').type(password)
    }

    clickCreateAccount() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }

    msgSuccessRegister() {
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').should('contain','Thank you for registering with Main Website Store.')
    }

    msgErrorRegister_alreadyAccount() {
        cy.get('.message-error').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

    msgFirstnameError() {
        cy.get('#firstname-error').should('contain','This is a required field.')
    }

    msgLastnameError() {
        cy.get('#lastname-error').should('contain','This is a required field.')
    }

    msgEmailError() {
        cy.get('#email_address-error').should('contain','This is a required field.')
    }

    msgEmailInvalid() {
        cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    msgPwdError() {
        cy.get('#password-error').should('contain','This is a required field.')
    }

    msgConfirmPwdError() {
        cy.get('#password-confirmation-error').should('contain','This is a required field.')
    }
}

export default new registerPage();