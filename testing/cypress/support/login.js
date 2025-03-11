// LOGIN 
Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="remember-button"]').click();
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/'); // Validar login
    cy.wait(1000); // Espera 2 segundos

});

