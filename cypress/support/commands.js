// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
Cypress.Commands.add("fillForm", (user) => {
  cy.fixture("users").then((users) => {
    const u = users[user];
    cy.get("#firstName").type(u.firstName);
    cy.get("#lastName").type(u.lastName);
    cy.get("#userEmail").type(u.email);
    cy.get("#userNumber").type(u.mobile);
    cy.get("#submit").click();
  });
});
