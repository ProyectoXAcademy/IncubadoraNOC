const usersLogin = require('../fixtures/loginEditado.json'); // Asegúrate de que la ruta sea correcta

describe('incubadoraNoc Test demo others', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.goToDashboard();
            cy.goToMiCreateCurso()
            cy.createCurso('Angular', 'Curso de angular de prueba', 'Programación', ' Leo Messi'); // Inscribirse en un curso específico
            cy.goToMisCursosDictados()
            cy.goToMiCreateNoticia()
            cy.createNoticia('Angular', 'Curso de angular de prueba', ' Noticia', "1993-07-06"); // Inscribirse en un curso específico
            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});
