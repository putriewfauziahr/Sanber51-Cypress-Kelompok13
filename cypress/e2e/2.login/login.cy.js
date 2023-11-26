import loginPage from "../../support/pageObject/loginPage";
const userData = require("../../fixtures/userData.json");

describe("Verify Login Magento functionality", () => {
  it("Failed Login - Wrong password", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    loginPage.inputEmail(userData.valid.valid_user);
    loginPage.inputPassword(userData.invalid[0].invalid_pass);
    loginPage.clickLogin();
    loginPage.verifyError("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
  });

  it("Failed Login - Empty email", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");

    loginPage.inputPassword(userData.valid.valid_password);
    loginPage.clickLogin();
    loginPage.verifyError("A login and a password are required.");
  });

  it("Failed Login - Empty password", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    loginPage.inputEmail(userData.valid.valid_user);
    loginPage.clickLogin();
  });

  it("Succes Login", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");

    // cy.get("#email").type("ganjarmahfud@mail.com");
    cy.get(loginPage.email).type(userData.valid.valid_user);

    // cy.get("#pass").type("Ganjarmahfud#");
    cy.get(loginPage.pass).type(userData.valid.valid_password);

    cy.get(loginPage.login_btn).click();
    // cy.get(".action.login.primary").click();
  });

  // it("Failed Login - Empty email", () => {
  //   cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");

  //   loginPage.inputPassword(userData.valid.valid_pass);
  //   loginPage.verifyError("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
  // });
});
