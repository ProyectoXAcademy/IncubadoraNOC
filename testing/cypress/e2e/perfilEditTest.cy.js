const usersLogin= require('../fixtures/login.json'); 
const changePasswordData = require('../fixtures/changePassword.json'); 
const editPerfilData = require('../fixtures/editPerfil.json'); 

describe('incubadoraNoc Test demo editlogin', { testIsolation: false }, () => {
    usersLogin.forEach(user => {
        it(`Login con ${user.email}`, () => {
            cy.login(user.email, user.password);
            cy.goToDashboard();

            // Usando los datos del JSON editPerfil
            cy.editPerfile(
                editPerfilData.name, 
                editPerfilData.lastName, 
                editPerfilData.dni, 
                editPerfilData.date_of_birth, 
                editPerfilData.email
            );

            // Usando los datos del JSON changePassword
            cy.cambiarContraseña(
                changePasswordData.oldPassword, 
                changePasswordData.newPassword, 
                changePasswordData.confirmNewPassword
            );

            cy.logout();
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});
