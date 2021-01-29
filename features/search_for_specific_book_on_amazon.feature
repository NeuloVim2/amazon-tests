Feature: Search for specific book on amazon
  User search for 'First Head Java, 2nd Edition' book on Amazon.com

  Scenario: Search for "Head First Java, 2nd Edition" book from amazon.com main page
    Given www.amazon.com is open
    And   focus on search field
    When  I type "Java"
    And   click serache's submit button
    Then  amazon.com load page with results

  Scenario: Search for "Head First Java, 2nd Edition" from amazon.com page with some search result
    Given search result by word "Java" page  is open
    And   departures section is visible
    When  I click on "Books" link
    Then  amazon.com load search results page
    And   items filtered by "Books" catagory
    And   and "Head First Java, 2nd Edition" book is exist 

  Scenario: Reaload amazon.com search results page
    Given amazon.com load search results page
    And   items filtered by "Books" catagory
    And   and second item is <bookName> book 
    When  I reload amazon.com results page
    Then  Given amazon.com load search results page
    And   items filtered by "Books" catagory
    And   and second item is <bookName> book 