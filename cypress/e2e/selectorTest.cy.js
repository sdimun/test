describe("Selector", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.login('standard_user','secret_sauce');
  });

  afterEach(()=>{
    cy.openNavBar()
    cy.logoutBtn().click()
  })

  it("Sorted items by A-Z", () => {
    cy.get('[data-test="product-sort-container"]').select("az");

    cy.get('[data-test="inventory-item"]').then((list) => {
      const length = list.length;
      expect(length).to.be.greaterThan(0);

      // cy.log('Length', length);
      for (let i = 1; i <= length - 1; i++) {
        let firstCharSelectedEl;
        let firstCharNextEl;

        cy.get(
          '[data-test="inventory-list"] > :nth-child(' +
            parseInt(i) +
            ')  [data-test="inventory-item-name"]'
        )
          .invoke("text")
          .then((text) => {
            firstCharSelectedEl = text.charAt(0).toLowerCase();
            cy.get(
              '[data-test="inventory-list"] > :nth-child(' +
                parseInt(i + 1) +
                ')  [data-test="inventory-item-name"]'
            )
              .invoke("text")
              .then((text) => {
                firstCharNextEl = text.charAt(0).toLowerCase();

                expect(firstCharSelectedEl <= firstCharNextEl).to.be.true;
              });
          });
      }
    });
  });

  it("Sorted items by Z-A", () => {
    cy.get('[data-test="product-sort-container"]').select("za");

    cy.get('[data-test="inventory-item"]').then((list) => {
      const length = list.length;
      expect(length).to.be.greaterThan(0);

      for (let i = 1; i <= length - 1; i++) {
        let firstCharSelectedEl;
        let firstCharNextEl;

        cy.get(
          '[data-test="inventory-list"] > :nth-child(' +
            parseInt(i) +
            ')  [data-test="inventory-item-name"]'
        )
          .invoke("text")
          .then((text) => {
            firstCharSelectedEl = text.charAt(0).toLowerCase();
            cy.get(
              '[data-test="inventory-list"] > :nth-child(' +
                parseInt(i + 1) +
                ')  [data-test="inventory-item-name"]'
            )
              .invoke("text")
              .then((text) => {
                firstCharNextEl = text.charAt(0).toLowerCase();

                expect(firstCharSelectedEl >= firstCharNextEl).to.be.true;
              });
          });
      }
    });
  });

  it("Sorted items by price (low to high)", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");

    cy.get('[data-test="inventory-item"]').then((list) => {
      const length = list.length;
      expect(length).to.be.greaterThan(0);

      // cy.log('Length', length);
      for (let i = 1; i <= length - 1; i++) {
        let priceSelectedEl;
        let priceNextEl;

        cy.get(
          '[data-test="inventory-list"] > :nth-child(' +
            parseInt(i) +
            ')  [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
        )
          .invoke("text")
          .then((text) => {
            let priceString = text.substring(1);
            priceSelectedEl = parseInt(priceString);
            cy.get(
              '[data-test="inventory-list"] > :nth-child(' +
                parseInt(i + 1) +
                ')  [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
            )
              .invoke("text")
              .then((text) => {
                priceString = text.substring(1);
                priceNextEl = parseInt(priceString);

                expect(priceSelectedEl <= priceNextEl).to.be.true;
              });
          });
      }
    });
  });

  it("Sorted items by price (high to low)", () => {
    cy.get('[data-test="product-sort-container"]').select("hilo");

    cy.get('[data-test="inventory-item"]').then((list) => {
      const length = list.length;
      expect(length).to.be.greaterThan(0);

      // cy.log('Length', length);
      for (let i = 1; i <= length - 1; i++) {
        let priceSelectedEl;
        let priceNextEl;

        cy.get(
          '[data-test="inventory-list"] > :nth-child(' +
            parseInt(i) +
            ')  [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
        )
          .invoke("text")
          .then((text) => {
            let priceString = text.substring(1);
            priceSelectedEl = parseInt(priceString);
            cy.get(
              '[data-test="inventory-list"] > :nth-child(' +
                parseInt(i + 1) +
                ')  [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
            )
              .invoke("text")
              .then((text) => {
                priceString = text.substring(1);
                priceNextEl = parseInt(priceString);

                expect(priceSelectedEl >= priceNextEl).to.be.true;
              });
          });
      }
    });
  });
});
