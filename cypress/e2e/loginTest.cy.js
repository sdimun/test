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

    // chceck if eshop screen is displayed
    cy.get('.bm-burger-button').should('be.visible');
    cy.get('[data-test="title"]').should("be.visible");
    cy.get(".app_logo").should("be.visible");
    cy.get('[data-test="shopping-cart-link"]').should("be.visible");
    cy.get('[data-test="product-sort-container"]').should("be.visible");

    cy.get('[data-test="inventory-item"]').then((list) => {
      const length = list.length;
      expect(length).eq(6);
    });

    cy.get('[data-test="footer"]').within(() => {
      cy.get('[data-test="social-twitter"]').should('exist');
      cy.get('[data-test="social-facebook"]').should('exist');
      cy.get('[data-test="social-linkedin"]').should('exist');
      cy.get('[data-test="footer-copy"]').should('exist');
    });
    
    // open navBar
    cy.openNavBar();
    cy.get('.bm-menu').within(()=>{
      cy.get('[data-test="inventory-sidebar-link"]').should('exist');
      cy.get('[data-test="about-sidebar-link"]').should('exist');
      cy.get('[data-test="logout-sidebar-link"]').should('exist');
      cy.get('[data-test="reset-sidebar-link"]').should('exist');
    });
    cy.get('.bm-cross-button').should('be.visible');


    cy.logoutBtn().click();

    cy.loginBtn().should("be.visible");
  });
});
