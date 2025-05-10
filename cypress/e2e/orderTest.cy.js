describe("Order", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.login("standard_user", "secret_sauce");
  });

  it("Add and remove product from homeScreen", () => {
    // add item to chart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");

    // remove item from chart from homeScreen
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should(
      "be.visible"
    );

  });

  it("Add product and remove it from chart ", () => {
    // add item to chart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");

    // check if added item is in chart
    cy.cartBtn().click();
    cy.get('[data-test="inventory-item-name"]').should('exist');


    // remove this item from chart
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();


    cy.get('[data-test="inventory-item"]').should("not.exist");
  });

  it("Full order with 2 items", () => {
    // add 2 items to chart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should("be.visible");

    // go to chart
    cy.cartBtn().click();

    // check if user is on cart screen
    cy.get('[data-test="title"]').contains("Your Cart").should("be.visible");

    // continue in order by clicking on checkout
    cy.get('[data-test="checkout"]').click();

    // check if user is on checkout screen
    cy.get('[data-test="title"]').contains("Checkout").should("be.visible");

    // fill first name, last name, zip code and confirm it
    cy.get('[data-test="firstName"]').type("Igor");
    cy.get('[data-test="lastName"]').type("Horn");
    cy.get('[data-test="postalCode"]').type("04001");

    cy.get('[data-test="continue"]').click();

    // check if user is on overview screen
    cy.get('[data-test="title"]').contains("Overview").should("be.visible");

    cy.get('[data-test="finish"]').click();

    //check if order has been successful
    cy.get('[data-test="back-to-products"]').should("be.visible");

    cy.get('[data-test="back-to-products"]').click();
  });
});
