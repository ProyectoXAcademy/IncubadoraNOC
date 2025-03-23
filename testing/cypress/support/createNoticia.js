Cypress.Commands.add('createNoticia', (titulo, description, type, issue_date) => {
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.get('#edit-btn').should('be.visible').click(); // Hacer clic en el botón "Editar"
  
    cy.get('input[name="titulo"]').clear().type(titulo);
    cy.get('input[name="description"]').clear().type(description);
    cy.get('input[name="type"]').clear().type(type);
    cy.get('input[name="issue_date"]').clear().type(issue_date); // Asegúrate de que el formato sea el esperado (ej. "yyyy-mm-dd")
  
    cy.get('.btn-save').click(); // Guardar cambios
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.wait(1000); // Espera 2 segundos
  
  });