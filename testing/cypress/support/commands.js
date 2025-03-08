// LOGIN 
Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="remember-button"]').click();
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/'); // Validar login
});
// LOGOUT
Cypress.Commands.add('logout', () => {
    cy.get('body').then($body => {
        if ($body.find('.logout-btn').length > 0) {
            cy.get('.logout-btn').click();
            cy.url().should('include', '/'); // Validar que regresa a la página de login
        } else {
            cy.log('El usuario no inició sesión, no es necesario hacer logout.');
        }
    });
});
// REGISTER
Cypress.Commands.add('register', (name, lastName, dni, date_of_birth, email, password, role) => {
    cy.visit('http://localhost:4200/register');
    
    cy.get('[formControlName="name"]').type(name);
    cy.get('[formControlName="lastName"]').type(lastName);
    cy.get('[formControlName="dni"]').type(dni.toString());
    cy.get('[formControlName="date_of_birth"]').type(date_of_birth);
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password.toString());
    
    cy.get(`[formControlName="role"][value="${role}"]`).check();
    
    cy.get('[formControlName="termsAccepted"]').check();
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/'); // Validar que el registro fue exitoso
});
//GO TO DASHBOARD
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



//PERFIL EDIT
  Cypress.Commands.add('editarPerfil', (nombre, apellido, dni, fechaNacimiento, email) => {
    cy.get('.btn-edit').click(); // Hacer clic en el botón "Editar"
    
    cy.get('input[name="name"]').clear().type(nombre);
    cy.get('input[name="lastName"]').clear().type(apellido);
    cy.get('input[name="dni"]').clear().type(dni);
    cy.get('input[name="date_of_birth"]').clear().type(fechaNacimiento);
    cy.get('input[name="email"]').clear().type(email);
  
    cy.get('.btn-save').click(); // Guardar cambios
  
    cy.contains('Perfil actualizado correctamente').should('be.visible'); // Verifica mensaje
  });
//CAMBIAR CONTRASEÑA
Cypress.Commands.add('cambiarContraseña', (contraseñaActual, nuevaContraseña, confirmarContraseña) => {
    cy.get('input[placeholder="Ingresa tu contraseña actual"]').clear().type(contraseñaActual);
    cy.get('input[placeholder="Nueva contraseña"]').clear().type(nuevaContraseña);
    cy.get('input[placeholder="Confirma la nueva contraseña"]').clear().type(confirmarContraseña);
    
    // Asegurarse de que el botón está habilitado antes de hacer clic
    cy.get('button').contains('Actualizar Contraseña').should('be.enabled').click();
  
    // Verifica que haya un mensaje de confirmación o que los inputs estén vacíos tras la actualización
    cy.contains('Contraseña actualizada correctamente').should('be.visible');
  });