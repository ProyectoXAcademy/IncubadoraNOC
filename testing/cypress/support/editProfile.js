
// edit perfile
Cypress.Commands.add('editProfile', (name, lastName, dni, date_of_birth, email) => {
  cy.get('.btn-edit').should.click(); // Hacer clic en el botón "Editar"

  cy.get('input[name="name"]').clear().type(name);
  cy.get('input[name="lastName"]').clear().type(lastName);
  cy.get('input[name="dni"]').clear().type(dni);
  cy.get('input[name="date_of_birth"]').clear().type(date_of_birth); // Asegúrate de que el formato sea el esperado (ej. "yyyy-mm-dd")
  cy.get('input[name="email"]').clear().type(email);

  cy.get('.btn-save').click(); // Guardar cambios

  cy.contains('Perfil actualizado correctamente').should('be.visible').click(); // Verifica mensaje
});