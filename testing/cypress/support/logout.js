// LOGOUT
Cypress.Commands.add('logout', () => {
    cy.get('body').then($body => {
        // Verificar si el botón de logout existe dentro del dropdown
        if ($body.find('.dropdown-btn').length > 0) {
            // Abrir el menú desplegable
            cy.get('.dropdown-btn').should('be.visible').click();

            // Asegurar que el menú se muestre
            cy.get('.dropdown-menu').invoke('show');

            // Buscar el botón de logout dentro del menú
            cy.get('.logout-btn').should('be.visible').click();

            // Validar que la URL cambia a la página de login
            cy.url().should('include', '/');
        } else {
            cy.log('El usuario no inició sesión, no es necesario hacer logout.');
        }
    });
});
