const usersLogin = require('../fixtures/perfil.json'); // Asegúrate de que la ruta sea correcta

describe('incubadoraNoc Test demo', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.goToDashboard();
            cy.editarPerfil('Carl', 'González', '12345678', '1992-08-15', 'carlos.gonzalez@example.com');
            cy.cambiarContraseña('12345', 'newPass456', 'newPass456');
            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});
