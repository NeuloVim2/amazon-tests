import { variables } from '../../support/variables'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Www.amazon.com is open', () => {

  //Go to amazon.com
  cy.visit('https://www.amazon.com');

});

When('I type {string}', (string) => {

  // Search for book with name 'Java'
  cy.searchForBook(string);

});

When('Click serache\'s submit button', () => {

  // Click submit button of search field
  cy.clickSubmit();

});

Then('Www.amazon.com load page with results', () => {

  // Check if there are any search results on the page
  cy.resultsAreLoaded()

});

When  ('I click on "Books" catagory', () => {
  
  // Click for filter butonn by books and click it
  cy.clickFilterByBook();

})


Then('"Head First Java, 2nd Edition" book is exist', () => {

  // Check result page for book with title 'Java Head, 2nd Edition'
  cy.checkForABook('Head First Java, 2nd Edition');

}) 


When('I remember second result item', () => {
  
  // Save second item to variable
  cy.rememberSecondBookExistOnThePage();
  

})

Then('I reload page', () => {
  
  // Reload the page
  cy.reload()

})

Then ('Second result item the same', () => {

  // Check result page for secondItem variable
  cy.checkForABook(variables.secondBook)

})