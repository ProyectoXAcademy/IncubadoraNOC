Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="remember-button"]').click();
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/'); // Validar login
});

Cypress.Commands.add('logout', () => {
    cy.get('body').then($body => {
        if ($body.find('.logout-btn').length > 0) {
            cy.get('.logout-btn').click();
            cy.url().should('include', '/'); // Validar que regresa a la página de login
        } else {
            cy.log('El usuario no inició sesión, no es necesario hacer logout.');
        }
    });
});


Cypress.Commands.add('register', (name, lastName, dni, date_of_birth, email, password, role) => {
    cy.visit('http://localhost:4200/register');
    
    cy.get('[formControlName="name"]').type(name);
    cy.get('[formControlName="lastName"]').type(lastName);
    cy.get('[formControlName="dni"]').type(dni.toString());
    cy.get('[formControlName="date_of_birth"]').type(date_of_birth);
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password.toString());
    
    cy.get(`[formControlName="role"][value="${role}"]`).check();
    
    cy.get('[formControlName="termsAccepted"]').check();
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/'); // Validar que el registro fue exitoso
});
