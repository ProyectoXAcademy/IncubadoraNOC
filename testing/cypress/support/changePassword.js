//CAMBIAR CONTRASEÑA
Cypress.Commands.add('cambiarContraseña', (oldPassword, newPassword, passwordConfirmed) => {
  cy.get('input[placeholder="Ingresa tu contraseña actual"]').clear().type(oldPassword);
  cy.get('input[placeholder="Nueva contraseña"]').clear().type(newPassword);
  cy.get('input[placeholder="Confirma la nueva contraseña"]').clear().type(passwordConfirmed);
  // Asegurarse de que el botón está habilitado antes de hacer clic
  cy.get('button').contains('Actualizar Contraseña').should('be.enabled').click();
  // Verifica que haya un mensaje de confirmación o que los inputs estén vacíos tras la actualización
  cy.contains('Contraseña actualizada correctamente').should('be.visible');
  cy.reload(); // Recarga la página para aplicar los cambios
  cy.wait(1000); // Espera 2 segundos
});