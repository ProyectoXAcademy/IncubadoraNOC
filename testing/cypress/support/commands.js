// <- HERE IS THE OTHER CLICKS -> 
// GO TO DASHBOARD
Cypress.Commands.add('goToDashboard', () => {
    // Asegurar que el dropdown esté visible y hacer clic
    cy.get('.dropdown-btn').should('be.visible').click();

    // Forzar la visibilidad del menú manualmente si sigue oculto
    cy.get('.dropdown-menu').invoke('show');

    // Ahora hacer clic en la opción "Ir al Dashboard"
    cy.contains('a', 'Ir al Dashboard').should('be.visible').click();

    // Verificar que la URL cambió
    cy.url().should('include', '/dashboard');
});

