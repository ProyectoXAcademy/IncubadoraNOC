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
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.wait(1000); // Espera 2 segundos
});

Cypress.Commands.add('goToExplorarCursos', () => {
    // Verificar que el botón está visible y hacer clic
    cy.get('.cta').contains('Explorar Cursos').should('be.visible').click();
    // Verificar que la URL cambia a /courses después del clic
    cy.url().should('include', '/courses');
    cy.wait(1000); // Espera 2 segundos

})

Cypress.Commands.add('inscribirseEnCurso', (cursoNombre) => {
    // Buscar el curso específico y hacer clic
    cy.get('.courses-container .card-container').contains(cursoNombre).should('be.visible').click();  
    // Verificar que la URL cambia a /courses después del clic
    cy.url().should('include', '/');
    cy.wait(1000); // Espera 2 segundos

});
Cypress.Commands.add('goToMisCursos', () => {
    cy.reload(); // Recarga la página para aplicar los cambios
    cy.contains('a', 'Mis Cursos').should('be.visible').click();
    // Verificar que la URL cambió
    cy.url().should('include', '/dashboard/mycourses');
    cy.wait(1000); // Espera 2 segundos
});

Cypress.Commands.add('checkFooterSocialLinks', () => {
    // Verificar y hacer clic en el enlace de Facebook
    cy.get('.footer-social a[href*="facebook"]').should('be.visible').click();
   // Verificar y hacer clic en el enlace de Instagram
    cy.get('.footer-social a[href*="instagram"]').should('be.visible').click();
});
