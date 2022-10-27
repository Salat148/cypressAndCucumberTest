class profilePage {
  elements = {
    dropDown: () => cy.get(".ant-avatar"),
    dropDownContent: (text) => cy.contains(text),
    userName: () => cy.get(".account-name"),
  };

  openDropdown() {
    this.elements.dropDown().click();
  }

  clickButtonWithText(text) {
    this.elements.dropDownContent(text).click();
  }

  checkUserName(name) {
    this.elements.userName().should("include.text", name);
  }
}

module.exports = new profilePage();
