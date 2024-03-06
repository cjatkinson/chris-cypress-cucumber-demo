Feature: signUp
  Scenario: Validate page title is correct and interactive elements are visible
    Given I am on the sign in page
    And I click the Accept All button on the OneTrust cookie modal if it is visible
    Then The page title should be correct
    Then I should see all the interactable elements on the page
  Scenario: Validate front-end error handling
    Given I am on the sign in page
    And I click the Accept All button on the OneTrust cookie modal if it is visible
    And I click the click the Create free account button
    Then I should see all front-end error text elements
 Scenario: Validate back-end error handling
    Given I am on the sign in page
    And I click the Accept All button on the OneTrust cookie modal if it is visible
    And I enter "<email>" in the email field
    And I enter "<password>" in the password field
    And I click the click the Create free account button
    Then I should see the back-end error alert
  Examples:
  | email             | password          |
  | test@test.com     | welcome2security! |
 Scenario: Validate new user can create an account and be routed to the app
    Given I am on the sign in page
    And I click the Accept All button on the OneTrust cookie modal if it is visible
    And I enter "<email>" in the email field
    And I enter "<password>" in the password field
    And I click the click the Create free account button
    Then I should see the header of the interal app
  Examples:
  | email             | password          |
  | test@edify.com    | welcome2security! |