Cypress.Commands.add('newDocente', (email) => {
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.get('#edit-btn').should('be.visible').click(); // Hacer clic en el botón "Editar"
    cy.get('input[formcontrolname="email"]').clear().type(email);
  
    cy.get('.btn-save').click(); // Guardar cambios
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.wait(1000); // Espera 2 segundos
  
  });