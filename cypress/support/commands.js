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

// Selectors
const SEARCH_INPUT        = '#twotabsearchtextbox';
const SEARCH_SUBMIT_BTN   = '#nav-search-submit-button';
const FILTER_SECTION      = '#departments > ul';
const FILTER_BOOK         = '> li:first a';
const SEARCH_RESULT_ITEM  = '[data-component-type=s-search-result]';
const SEARCH_RESULT_TITLE = ' h2 > a > span';


Cypress.Commands.add('searchForBook', (bookName) => {
    
    // Find serach-field 
    // Type into search-field "Java"
    cy.get(SEARCH_INPUT)
      .type(bookName)

})
    
Cypress.Commands.add('clickSubmit', () => {
        
    // Find submit button for search field
    // Click on submit button
    cy.get(SEARCH_SUBMIT_BTN)
        .click()

})

Cypress.Commands.add('resultsAreLoaded', () => {

  // Find all s-search-result eleemnt 
  // Check the number of s-search-result item
  // It should be > 1
  cy.get('[data-component-type=s-search-result]')
    .its('length')
    .should('be.gte', 1)

})
Cypress.Commands.add('clickFilterByBook', () => {

    // Search for filter
    // Find book catagory
    // Click it 
    cy.get(FILTER_SECTION) 
      .find(FILTER_BOOK)
      .click()

})

Cypress.Commands.add('checkForABook', (bookName) => {
    cy.get(SEARCH_RESULT_ITEM)
      .find(SEARCH_RESULT_TITLE)
      .should('contain.text', bookName)
})

Cypress.Commands.add('rememberSecondBookExistOnThePage', () => {
    

    cy.get((SEARCH_RESULT_ITEM))
      .eq(1)
      .invoke('text')
      .then( text => {
        variables.secondBook = text
      })
      
})