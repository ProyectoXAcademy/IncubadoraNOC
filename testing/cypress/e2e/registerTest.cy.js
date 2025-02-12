const usersRegister = require('../fixtures/register.json'); // Asegúrate de que la ruta sea correcta

describe('Registro de usuarios en incubadoraNoc', { testIsolation: false }, () => {
  usersRegister.forEach(user => {
      it(`Registro de ${user.email}`, () => {
          cy.register(user.name, user.lastName, user.dni, user.date_of_birth, user.email, user.password, user.role);
      });
  });
});