import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I am on the sign in page', () => {
  cy.visit('https://bitly.com/a/sign_up');
});

When('I click the Accept All button on the OneTrust cookie modal if it is visible', () => {
  cy.get('button').contains('Accept All').should('be.visible').click();
});

When('I click the click the Create free account button', () => {
  cy.get('button').contains('Create free account').click();
});

When('I enter {string} in the email field', (email) => {
  cy.get('input[type="email"]').type(email);
});

When('I enter {string} in the password field', (password) => {
  cy.get('input[type="password"]').type(password);
});

Then('The page title should be correct', () => {
  cy.title().should('eq', 'Sign up for the Bitly Connections Platform');
});

Then('I should see all the interactable elements on the page', () => {
  cy.get('img[alt="Bitly"]').should('exist');
  cy.get('a').contains('Log in').should('exist');
  cy.get('a').contains('Log in with SSO').should('exist');
  cy.get('input[type="email"]').should('exist');
  cy.get('input[type="password"]').should('exist');
  cy.get('button').contains('Create free account').should('exist');
  cy.get('a[data-testid="google-button"]').eq(0).should('exist');
  cy.get('a').contains('Terms of Service').should('exist');
  cy.get('a').contains('Privacy Policy').should('exist');
  cy.get('a').contains('Acceptable Use Policy').should('exist');
});

Then('I should see all front-end error text elements', () => {
  cy.get('div').contains('Please enter your email address').should('exist');
  cy.get('span').contains('One letter').should('exist');
  cy.get('span').contains('One number').should('exist');
  cy.get('span').contains('One special character').should('exist');
  cy.get('span').contains('9 or more characters').should('exist');
});

Then('I should see the back-end error alert', () => {
  cy.get('div').contains('Please enter a valid email address').should('exist');
});

Then('I should see the header of the interal app', () => {
  cy.get('h1').contains('Your Connections Platform').should('exist');
});
