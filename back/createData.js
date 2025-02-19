const {dbConfig} = require('./Config')
const {roleService, userService, publicationService} = require('./Services')

const createData = async () => {
    await dbConfig.sequelize.sync({force: true})

    //Crear roles
    await roleService.createRole("Administrador")
    await roleService.createRole("Docente")
    await roleService.createRole("Estudiante")

    //Usuario de prueba
    await userService.createUser("Usuario", "de prueba", 9999, '2025-01-01', "usuarioprueba@gmail.com", "12345", "Administrador")

    //Publicaciones de ejemplo
    await publicationService.createPublication("Noticia", "Noticia de ejemplo 1", "Descripción 1", "2025-01-02", null)
    await publicationService.createPublication("Programa de crédito", "Noticia de ejemplo 2", "Descripción 2", "2025-05-02", null)
    await publicationService.createPublication("Noticia", "Noticia de ejemplo 3", "Esto es otra descripción", "2022-10-25", null)

    console.log("Se crearon los datos en la Base de datos!")
}
createData()