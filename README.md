## Installation

### Cypress

Install [Cypress](https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test) testing framework.

```bash
npm install cypress --save-dev
```

### Node.JS

Cypress requires Node.js 18.x or older. You can install it from [Node.js](https://nodejs.org/en/download).

## How to run tests

To run the tests from command line you have to enter next command in terminal:

```bash
npx cypress run --spec "cypress/e2e/*.cy.js" 
```

To launch the Cypress UI and start E2E testing with a choice of browsers, enter the next command and continue in the Cypress UI.


```bash
npx cypress open
```
