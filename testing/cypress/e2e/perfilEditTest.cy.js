const usersLogin = require('../fixtures/login.json'); // Asegúrate de que la ruta sea correcta

describe('incubadoraNoc Test demo', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.goToDashboard();
            cy.editProfile('Nahuel', 'Argandoña', '12345678', '1992-08-15', 'Nahuel@example.com');
            cy.cambiarContraseña('12345', 'newPass123', 'newPass123');
            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});
