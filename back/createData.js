const {dbConfig} = require('./Config')
const {roleService, userService, publicationService, courseService} = require('./Services')

const createData = async () => {
    await dbConfig.sequelize.sync({force: true})

    //Crear roles
    await roleService.createRole("Administrador")
    await roleService.createRole("Docente")
    await roleService.createRole("Estudiante")

    //Usuarios de prueba, se crea un administrador, docente y alumno
    await userService.createUser("Usuario", "de prueba", 9999, "2025-01-01", "usuarioprueba@gmail.com", "12345", "Administrador")
    await userService.createUser("Docente", "de prueba", 12345, "2022-12-18", "docentedeprueba@gmail.com", "12345", "Docente" )
    await userService.createUser("Alumno", "de prueba", 1111, "2018-12-09", "alumnodeprueba@gmail.com", "12345", "Estudiante")

    //Publicaciones de ejemplo
    await publicationService.createPublication("Noticia", "Noticia de ejemplo 1", "Descripción 1", "2025-01-02", null)
    await publicationService.createPublication("Programa de crédito", "Noticia de ejemplo 2", "Descripción 2", "2025-05-02", null)
    await publicationService.createPublication("Noticia", "Noticia de ejemplo 3", "Esto es otra descripción", "2022-10-25", null)

   //Curso de ejemplo
   await courseService.createCourse("Angular", "Programacion", "Programacion", 1)
   await courseService.createCourse("UX-UI", "Diseño", "Diseño", 1)
   await courseService.createCourse("Ingles avanzado", "Idiomas", "Idiomas", 1)
   await courseService.createCourse("Comunity manager", "Marketing", "Marketing", 1)
   await courseService.createCourse("Ser tu porpio jefe", "Negocios", "Negocios", 1)

    console.log("Se crearon los datos en la Base de datos!")
}
createData()