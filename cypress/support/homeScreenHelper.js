
// click on menu icon to open navigation bar
Cypress.Commands.add('openNavBar', () => {
    cy.get('.bm-burger-button').click()
})

// logout btn
Cypress.Commands.add('logoutBtn', () => {
    cy.get('[data-test="logout-sidebar-link"]').contains('Logout')
})


// chart btn
Cypress.Commands.add('cartBtn', () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
})


