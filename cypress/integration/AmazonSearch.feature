Feature: Search for specific book on amazon
  User search for 'First Head Java, 2nd Edition' book on Amazon.com

  Scenario: Search for "Head First Java, 2nd Edition" book from amazon.com main page
    Given Www.amazon.com is open
    When  I type "Java"
    And   Click serache's submit button
    Then  Www.amazon.com load page with results

  Scenario: Search for "Head First Java, 2nd Edition" from amazon.com page with some search result
    When  I click on "Books" catagory
    Then  "Head First Java, 2nd Edition" book is exist 

  Scenario: Check amzon's search results page before and after reload
    When I remember second result item
    Then I reload page
    And  Second result item the same