import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const profilePage = require("../../pages/ProfilePage");

Given("I go to codefresh", () => {
  cy.visit("/");
});

When(
  "A user enters the username {string}, the password {string}, and clicks on the login button",
  (username, password) => {
    loginPage.submitLogin(username, password);
  }
);

When(
  "A user provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password);
    });
  }
);

When("I open profile dropdown", () => {
  profilePage.openDropdown();
});

When("I click on {string} button", (text) => {
  profilePage.clickButtonWithText(text);
});
