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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { variables } from './variables'

Cypress.Commands.add('searchForBook', (bookName) => {
    
    // Find serach-field 
    // Type into search-field "Java"
    cy.get('#twotabsearchtextbox')
      .type(bookName)

})
    
Cypress.Commands.add('clickSubmit', () => {
        
    // Find submit button for search field
    // Click on submit button
    cy.get('#nav-search-submit-button')
        .click()

})

Cypress.Commands.add('clickFilterByBook', () => {

    // Search for filter
    // Find book catagory
    // Click it 
    cy.get('#departments > ul') 
      .find('> li:first a')
      .click()

})

Cypress.Commands.add('checkForABook', (bookName) => {
    cy.get('[data-component-type=s-search-result]')
      .find(' h2 > a > span')
      .should('contain.text', bookName)
})

Cypress.Commands.add('rememberSecondBookExistOnThePage', () => {
    

    cy.get(('[data-component-type=s-search-result]'))
      .eq(1)
      .invoke('text')
      .then( text => {
        variables.secondBook = text
      })
      
})