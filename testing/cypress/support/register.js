// REGISTER
Cypress.Commands.add('register', (name, lastName, dni, date_of_birth, email, password) => {
    cy.visit('http://localhost:4200/register');

    cy.get('[formControlName="name"]').type(name);
    cy.get('[formControlName="lastName"]').type(lastName);
    cy.get('[formControlName="dni"]').type(dni.toString());
    cy.get('[formControlName="date_of_birth"]').type(date_of_birth);
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password.toString());
    cy.get('[formControlName="termsAccepted"]').check();

    cy.get('form').find('#btn-formRegister').click();

    cy.url().should('include', '/'); // Validar que el registro fue exitoso
    cy.wait(1000); // Espera 2 segundos

});