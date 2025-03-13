const {registrationModel} = require('../Models')

const getRegistrationById = async (registration_id) => {
    try {
        const findRegistration = await registrationModel.findByPk(registration_id)
        if (!findRegistration) {
            const error = new Error()
            error.message = `Error al encontrar inscripción con id=${registration_id}`
            error.statusCode = 404
            throw error
        }
        return findRegistration
    } catch (error) {
        throw error
    }
}


const createRegistration = async (student_id, course_id, is_teacher = false) => {
  try {
    console.log('Creando inscripción con:', { student_id, course_id, is_teacher });

    // Verificar si ya está inscrito
    const existingRegistration = await registrationModel.findOne({
      where: { student_id, course_id }
    });

    if (existingRegistration) {
      console.log('El usuario ya está inscrito en este curso.');
      throw new Error('El usuario ya está inscrito en este curso.');
    }

    // Crear inscripción con is_teacher
    const newRegistration = await registrationModel.create({
      student_id,
      course_id,
      registration_date: new Date(),
      is_teacher
    });

    console.log('Inscripción creada con éxito:', newRegistration);
    return newRegistration;
  } catch (error) {
    console.error('Error en createRegistration:', error.message);
    throw error;
  }
};

const getUserRegistrations = async (user_id) => {
  try {
    // 1️⃣ Obtener el rol del usuario
    const user = await userModel.findByPk(user_id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    let whereCondition = { student_id: user_id }; // Por defecto, buscar como estudiante

    if (user.role === 'Docente') {
      whereCondition = { student_id: user_id, is_teacher: true }; // Si es docente, filtrar cursos que dicta
    }

    // 2️⃣ Obtener las inscripciones del usuario
    const registrations = await registrationModel.findAll({
      where: whereCondition
    });

    if (registrations.length === 0) {
      return "No hay registros.";
    }

    return registrations;
  } catch (error) {
    throw error;
  }
};

const getUsersRegistrationsByCourseId = async (course_id) => {
  try {
    const registrations = await registrationModel.findAll({
      where: {
        course_id: course_id
      }
    })
    if (registrations.length === 0) {
      return "No hay registros."
    }
    return registrations
  } catch (error) {
    throw error
  }
}


module.exports = {getRegistrationById, createRegistration, getUserRegistrations,getUsersRegistrationsByCourseId}