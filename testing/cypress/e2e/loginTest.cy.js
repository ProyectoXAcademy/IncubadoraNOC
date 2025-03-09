const usersLogin = require('../fixtures/login.json'); // Asegúrate de que la ruta sea correcta

describe('incubadoraNoc Test demo login', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});


