// <- HERE IS THE OTHER CLICKS -> 
// GO TO DASHBOARD
Cypress.Commands.add('goToDashboard', () => {
    cy.get('body').then($body => {
        // Verificar si el botón de logout existe dentro del dropdown
        if ($body.find('.dropdown-btn').length > 0) {
            // Abrir el menú desplegable
            cy.get('.dropdown-btn').should('be.visible').click();

            // Asegurar que el menú se muestre
            cy.get('.dropdown-menu').invoke('show');

            // Ahora hacer clic en la opción "Ir al Dashboard"
            cy.contains('a', 'Ir al Dashboard').should('be.visible').click();

            // Validar que la URL cambia a la página de login
            cy.url().should('include', '/dashboard');
        } else {
            cy.log('El usuario no inició sesión, no es necesario ir al dashboard.');
        }
    });
});