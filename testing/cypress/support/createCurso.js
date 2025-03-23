Cypress.Commands.add('createCurso', (name, description, cateogry, teacher) => {
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.get('#edit-btn').should('be.visible').click(); // Hacer clic en el botón "Editar"
  
    cy.get('input[name="name"]').clear().type(name);
    cy.get('input[name="description"]').clear().type(description);
    cy.get('input[name="cateogry"]').clear().type(cateogry);
    cy.get('input[name="teacher"]').clear().type(teacher); // Asegúrate de que el formato sea el esperado (ej. "yyyy-mm-dd")
  
    cy.get('.btn-save').click(); // Guardar cambios
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.wait(1000); // Espera 2 segundos
  
  });