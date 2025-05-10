

// login btn
Cypress.Commands.add('loginBtn', () => {
  cy.get('[data-test="login-button"]').contains('Login')
})


// login function
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').contains('Login').click();
})