class homeSaucePage {
  elements = {
    usernameInput: () => cy.get('input[type="text"]'),
    passwordInput: () => cy.get('input[type="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".auth-login-main-form-error"),
    codeFreshIcon: () =>
      cy.get('span[class="auth-login-main__button-name"]').eq(5),
  };

  submitLogin(username, password) {
    this.elements.codeFreshIcon().click();
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new homeSaucePage();
