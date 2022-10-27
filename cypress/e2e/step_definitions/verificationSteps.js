import { Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const profilePage = require("../../pages/ProfilePage");

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("include.text", errorMessage);
});

Then("The user with {string} name is displayed", (name) => {
  profilePage.checkUserName(name);
});
