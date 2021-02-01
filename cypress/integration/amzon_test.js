// const assert = require('assert');
// const { Given, When, Then } = require('@cucumber/cucumber');

import { variables } from '../support/variables'

describe( "Amozon Search Test", () => {

  // Ensure that amazon.com will be downloaded before any tests
  before(() => {

    //Go to amazon.com
    cy.visit('https://www.amazon.com');

  })

  it('search for specific book', () => {

    // Search for book with name 'Java'
    cy.searchForBook('Java');

    // Click submit button of search field
    cy.clickSubmit();

    // Click for filter butonn by books and click it
    cy.clickFilterByBook();
    
    // Check result page for book with title 'Java Head, 2nd Edition'
    cy.checkForABook('Head First Java, 2nd Edition');

    // Save second item to variable
    cy.rememberSecondBookExistOnThePage();

    // Reload the page
    cy.reload()
    
    // Check result page for secondItem variable
    cy.checkForABook(variables.secondBook)
  })
})