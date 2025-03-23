Cypress.Commands.add('goToMisInscripciones', () => {
  cy.reload(); // Recarga la página para aplicar los cambios
  cy.contains('a', 'Mis Inscripciones').should('be.visible').click();
  // Verificar que la URL cambió
  cy.url().should('include', '/dashboard/myenrollments');
  cy.wait(1000); // Espera 2 segundos
});

Cypress.Commands.add('createNoticia', (title, description, type, issue_date) => {
  // Ingresar el título
  cy.get('input[formcontrolname="title"]').clear().type(title);
  // Ingresar la descripción
  cy.get('input[formcontrolname="description"]').clear().type(description);
  // Seleccionar el tipo (por ejemplo, 'noticia')
  cy.get('select[formcontrolname="type"]').select(type);  // Se asume que 'type' es un desplegable
  // Ingresar la fecha de emisión (ejemplo: "2025-03-23")
  cy.get('input[formcontrolname="issue_date"]').clear().type(issue_date);  // Asegúrate de que el formato sea el esperado (yyyy-mm-dd)
  // Hacer clic en el botón de guardar cambios
  cy.get('.btn-submit').click();
  // Recargar la página para aplicar los cambios
  cy.reload();
  // Esperar 1 segundo
  cy.wait(1000);
});

Cypress.Commands.add('goToMiCreateNoticia', () => {
  cy.visit('http://localhost:4200/dashboard/create-notice');
  cy.reload(); // Recarga la página para aplicar los cambios
  // Verificar que la URL cambió
  cy.url().should('include', '/dashboard/create-notice');
  cy.wait(1000); // Espera 2 segundos
});