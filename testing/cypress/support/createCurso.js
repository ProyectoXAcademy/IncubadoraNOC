Cypress.Commands.add('goToMiCreateCurso', () => {
  cy.visit('http://localhost:4200/dashboard/create-course');
  cy.reload(); // Recarga la página para aplicar los cambios
  // Verificar que la URL cambió
  cy.url().should('include', '/dashboard/create-course');
  cy.wait(1000); // Espera 1 segundos
});

Cypress.Commands.add('createCurso', (name, description, category, teacher_id) => {
  cy.get('input[formcontrolname="name"]').clear().type(name);
  cy.get('input[formcontrolname="description"]').clear().type(description);
  // Para el campo 'category', selecciona 'Programación'
  cy.get('select[formcontrolname="category"]').select(category);
  // Para el campo 'teacher', selecciona 'Leo Messi'
  cy.get('select[formcontrolname="teacher_id"]').select(teacher_id);
  // Asegúrate de que el formato sea el esperado en los inputs de texto
  cy.get('.btn-submit').click(); // Guardar cambios
  cy.reload(); // Recarga la página para aplicar los cambios
  cy.wait(1000); // Espera 1 segundo
});


Cypress.Commands.add('goToMisCursosDictados', () => {
  cy.visit('http://localhost:4200/dashboard/mycourses');
  cy.reload(); // Recarga la página para aplicar los cambios  // Verificar que la URL cambió
  cy.url().should('include', '/dashboard/mycourses');
  cy.wait(1000); // Espera 1 segundos
});

