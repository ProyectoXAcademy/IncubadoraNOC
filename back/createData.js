const {dbConfig} = require('./Config')
const {roleService, userService, publicationService, courseService, contentService} = require('./Services')

const createData = async () => {
    await dbConfig.sequelize.sync({force: true})

    //Crear roles
    await roleService.createRole("Administrador")
    await roleService.createRole("Docente")
    await roleService.createRole("Estudiante")

    //Usuarios de prueba, se crea un administrador, docente y alumno
    await userService.createUser("Sergio", "Gonzalez", 9999, "2025-01-01", "usuarioprueba@gmail.com", "12345", "Administrador")
    await userService.createUser("Lisandro", "Perez", 12345, "2022-12-18", "lisandro@gmail.com", "12345", "Docente" )
    await userService.createUser("Lance", "Stroll", 12345, "2022-12-18", "lance@gmail.com", "12345", "Docente" )
    await userService.createUser("Leo", "Messi", 12345, "2022-12-18", "messi@gmail.com", "12345", "Docente" )
    await userService.createUser("Alumno", "Gonzalez", 1111, "2018-12-09", "alumnodeprueba@gmail.com", "12345", "Estudiante")
    await userService.createUser("Jose", "Lopeez", 1234, "2018-12-09", "jose@gmail.com", "12345", "Estudiante")
    await userService.createUser("Thiago", "Motta", 1345, "2018-12-09", "thiago@gmail.com", "12345", "Estudiante")
    await userService.createUser("Juana", "De Arco", 4567, "2018-12-09", "juana@gmail.com", "12345", "Estudiante")

    //Publicaciones de ejemplo
    await publicationService.createPublication("Noticia", "IA revoluciona la medicina", "La inteligencia artificial está transformando la medicina al mejorar diagnósticos y tratamientos personalizados.", "2025-03-04", null);
    await publicationService.createPublication("Noticia", "Computación cuántica: la próxima revolución", "La computación cuántica promete resolver problemas complejos rápidamente, con grandes inversiones de empresas tecnológicas.", "2025-03-04", null);        
    await publicationService.createPublication("Noticia", "Trabajo remoto: nuevas herramientas digitales", "El trabajo remoto crece gracias a plataformas como Zoom y Slack, mejorando la eficiencia laboral global.", "2025-03-04", null);    
    await publicationService.createPublication("Noticia", "Inflación global alcanza niveles récord", "La inflación mundial está afectando el poder adquisitivo y la estabilidad económica en varios países.", "2025-03-04", null);    
    await publicationService.createPublication("Noticia", "Criptomonedas: impacto financiero global", "Las criptomonedas están ganando popularidad, pero las autoridades siguen cautelosas por su volatilidad.", "2025-03-04", null);
    await publicationService.createPublication("Noticia", "Inversión verde: un nuevo motor económico", "La transición a energías renovables está creando nuevas oportunidades de negocio en sectores sostenibles.", "2025-03-04", null);
    await publicationService.createPublication("Noticia", "Crédito para Innovación Tecnológica", "Crédito de hasta $500,000 para PyMEs tecnológicas con tasas fijas y plazos flexibles.", "2025-03-04", null);
    await publicationService.createPublication("Noticia", "Crédito de Consumo para Educación", "Crédito de hasta $30,000 para financiar estudios, con tasas accesibles y plazos flexibles.", "2025-03-04", null);


   //Curso de ejemplo
   await courseService.createCourse("Angular", "Angular desde 0 a experto", "Programación", 1,"https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg")
   await courseService.createCourse("UX-UI", "Diseño utilizando la herramienta figma", "Diseño", 1,"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg")
   await courseService.createCourse("Ingles avanzado", "Nivel 3 de ingles", "Idiomas", 1,"https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg")
   await courseService.createCourse("Comunity manager", "Aprenderas con las mejores herramientas para marketin", "Marketing", 1,"https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg")
   await courseService.createCourse("Ser tu porpio jefe", "Como generar tus propios ingresos desde casa ", "Negocios", 1,"https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg")

   // Contenido de ejemplo
   await contentService.createContent("Video", "Angular completo", "https://www.youtube.com/watch?v=f7unUpshmpA", 1)
   await contentService.createContent("PDF", "UX-UI Primera parte", "https://course.ccs.neu.edu/cs5500sp17/09-UX.pdf", 2)

   // Se le asigna una imagen de perfil al administrador (Usuario con user_id=1)
   await userService.setImgUrl(1, "https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small_2x/global-admin-icon-color-outline-vector.jpg")
   // Se le asigna una imagen al curso de Angular
   await courseService.setImgUrl(1, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png")
   

console.log("Se crearon los datos en la Base de datos!")
}
createData()