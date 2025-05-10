describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Falied login", () => {
    cy.login('test','test');
    //chceck if error message is displayed
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("Success login and logout", () => {
    cy.login('standard_user','secret_sauce');

    // chceck if header is displayed after login
    cy.get(".app_logo").should("be.visible");

    cy.openNavBar();
    cy.logoutBtn().click();

    cy.loginBtn().should("be.visible");
  });
});
