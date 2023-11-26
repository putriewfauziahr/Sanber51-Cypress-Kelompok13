class loginPage {
  email = "#email";
  pass = "#pass";
  login_btn = ".action.login.primary";
  err_msg = '[data-ui-id="message-error"]';
  err_required = "#pass-error";

  inputEmail(email) {
    cy.get(this.email).type(email);
  }

  inputPassword(passwd) {
    cy.get(this.pass).type(passwd);
  }

  clickLogin() {
    cy.get(this.login_btn).click();
  }

  verifyError(message) {
    cy.verifyContain(this.err_msg, message);
    //cy.get(this.err_msg).should('contain', message)
  }
}
export default new loginPage();
