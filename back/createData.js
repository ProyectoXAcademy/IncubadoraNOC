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
   await courseService.createCourse(
    "Angular", 
    "Angular desde 0 a experto", 
    "En este curso aprenderás Angular desde los fundamentos hasta el desarrollo completo de aplicaciones web SPA...",
    "Programación", 
    1,
    "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg",
    "2025-04-01",
    "2025-06-01",
    "8 semanas",
    "Online",
    "Intermedio",
    45000,
    "Conocimientos básicos de HTML, CSS y JavaScript",  // requisitos
    "80% de asistencia y entrega del proyecto final"     // condiciones
  );
  
  await courseService.createCourse(
    "UX-UI", 
    "Diseño utilizando la herramienta Figma", 
    "Aprendé a diseñar experiencias digitales impactantes utilizando Figma...",
    "Diseño", 
    1,
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    "2025-05-10",
    "2025-06-20",
    "6 semanas",
    "Híbrido",
    "Básico",
    38000,
    "Manejo básico de PC",
    "Entrega de prototipo final en Figma"
  );
  
  await courseService.createCourse(
    "Inglés avanzado", 
    "Nivel 3 de inglés", 
    "Este curso está orientado a estudiantes con nivel intermedio-alto de inglés...",
    "Idiomas", 
    1,
    "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg",
    "2025-03-15",
    "2025-05-30",
    "10 semanas",
    "Online",
    "Avanzado",
    52000,
    "Haber aprobado nivel 2 o demostrar nivel con prueba de ingreso",
    "Aprobación de exámenes escritos y orales"
  );
  
  await courseService.createCourse(
    "Community Manager", 
    "Aprenderás con las mejores herramientas para marketing", 
    "Convertite en un community manager profesional aprendiendo a gestionar redes sociales...",
    "Marketing", 
    1,
    "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    "2025-04-10",
    "2025-05-15",
    "5 semanas",
    "Presencial",
    "Intermedio",
    41000,
    "Conocimientos de redes sociales",
    "Participación activa en simulaciones de campañas"
  );
  
  await courseService.createCourse(
    "Sé tu propio jefe", 
    "Cómo generar tus propios ingresos desde casa", 
    "Este curso está diseñado para despertar tu mentalidad emprendedora...",
    "Negocios", 
    1,
    "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg",
    "2025-06-01",
    "2025-08-01",
    "8 semanas",
    "Online",
    "Básico",
    39000,
    "Ganas de emprender y compromiso con el desarrollo personal",
    "Presentación de un plan de negocio final"
  );
  

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