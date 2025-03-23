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
    2,
    "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg",
    "2025-04-01",
    "2025-06-01",
    "8 semanas",
    "Online",
    "Intermedio",
    45000,
    "Conocimientos básicos de HTML, CSS y JavaScript",  
    "80% de asistencia y entrega del proyecto final"     
  );
  
  await courseService.createCourse(
    "UX-UI", 
    "Diseño utilizando la herramienta Figma", 
    "Aprendé a diseñar experiencias digitales impactantes utilizando Figma...",
    "Diseño", 
    3,
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
    4,
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
    2,
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
    3,
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

  await courseService.createCourse(
    "JavaScript Avanzado",
    "Profundizá tus conocimientos en JavaScript moderno",
    "Dominá funciones avanzadas, asincronía, módulos ES6+ y técnicas profesionales para el desarrollo frontend.",
    "Programación",
    4,
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    "2025-05-01",
    "2025-06-15",
    "6 semanas",
    "Online",
    "Avanzado",
    47000,
    "Conocimientos sólidos de JavaScript básico",
    "Entrega de desafíos semanales y proyecto final"
  );
  
  await courseService.createCourse(
    "Diseño Gráfico con Canva",
    "Creá piezas visuales impactantes sin experiencia previa",
    "Aprendé a diseñar contenido para redes sociales, presentaciones y más usando Canva.",
    "Diseño",
    4,
    "https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg",
    "2025-04-05",
    "2025-05-10",
    "5 semanas",
    "Online",
    "Básico",
    32000,
    "Solo necesitás una cuenta gratuita de Canva",
    "Entrega de un portfolio final de piezas gráficas"
  );
  
  await courseService.createCourse(
    "Marketing Digital 360°",
    "Dominá herramientas de marketing online",
    "Estrategias de contenido, email marketing, SEO, SEM y gestión de campañas en redes sociales.",
    "Marketing",
    2,
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "2025-06-05",
    "2025-07-20",
    "7 semanas",
    "Híbrido",
    "Intermedio",
    49000,
    "Conocimientos básicos de redes y contenido digital",
    "Examen final + presentación de estrategia integral"
  );
  
  await courseService.createCourse(
    "Finanzas para Emprendedores",
    "Aprendé a gestionar y planificar tus finanzas",
    "Desde costos, precios y flujo de caja hasta proyecciones financieras y herramientas de control.",
    "Negocios",
    3,
    "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg",
    "2025-05-10",
    "2025-06-20",
    "6 semanas",
    "Presencial",
    "Básico",
    43000,
    "Manejo básico de Excel y calculadora",
    "Entrega de plan financiero del emprendimiento"
  );
  
  await courseService.createCourse(
    "Portugués para Viajeros",
    "Comunicación básica para tu próximo viaje",
    "Frases útiles, expresiones cotidianas y cultura brasileña para disfrutar tu experiencia al máximo.",
    "Idiomas",
    3,
    "https://st3.depositphotos.com/1022214/16484/i/450/depositphotos_164847814-stock-photo-question-falas-portuges-do-you.jpg",
    "2025-04-20",
    "2025-05-25",
    "5 semanas",
    "Online",
    "Básico",
    36000,
    "Ningún requisito previo",
    "Participación en clases prácticas y prueba oral final"
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