describe('User can login to system', () => {
  it.only('User can login with valid username and password', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('h4').should('have.text', 'Login');

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');

    cy.get('.btn').click();

    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin');
  })

  //negative test case
  it.only('User cannot login with valid username and wrong password', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();

    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  })

  
  it.only('User cannot login with valid username and wrong password', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.get(':nth-child(2) > .form-control').type('superadminadasda@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();

    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  })

  it.only('User cannot login with empty username and correct password', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();

    cy.get('.invalid-feedback').should('have.text', 'The email field is required.');
  })

  it.only('User cannot login with valid username and empty password', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get('.btn').click();

    cy.get('.invalid-feedback').should('have.text', 'The password field is required.');
  })









})