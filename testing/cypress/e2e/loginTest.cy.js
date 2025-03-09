const usersLogin = require('../fixtures/loginEditado.json'); // Asegúrate de que la ruta sea correcta

describe('incubadoraNoc Test demo login', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.checkFooterSocialLinks()
            cy.goToExplorarCursos()
            cy.inscribirseEnCurso('Angular'); // Inscribirse en un curso específico
            cy.goToDashboard();
            cy.goToMisCursos()
            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});


