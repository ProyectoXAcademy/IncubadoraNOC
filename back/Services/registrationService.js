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


const createRegistration = async (student_id, course_id) => {
  try {
    console.log('Creando inscripción con:', { student_id, course_id });

    // Verificar si ya está inscrito
    const existingRegistration = await registrationModel.findOne({
      where: { student_id, course_id }
    });

    if (existingRegistration) {
      console.log('El usuario ya está inscrito en este curso.');
      throw new Error('El usuario ya está inscrito en este curso.');
    }

    // Crear inscripción directamente
    const newRegistration = await registrationModel.create({
      student_id,
      course_id,
      registration_date: new Date(),
      paid: false
    });

    console.log('Inscripción creada con éxito:', newRegistration);
    return newRegistration;
  } catch (error) {
    console.error('Error en createRegistration:', error.message);
    throw error;
  }
}

const getUserRegistrations = async (user_id) => {
  try {
    const registrations = await registrationModel.findAll({
      where: {
        student_id: user_id
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

const updatePaymentStatus = async (registration_id, paid) => {
  try {
    const registration = await registrationModel.findByPk(registration_id);

    if (!registration) {
      const error = new Error('Inscripción no encontrada');
      error.statusCode = 404;
      throw error;
    }

    registration.paid = paid;
    await registration.save();

    return registration;
  } catch (error) {
    throw error;
  }
}


const getRegistrationByCourseAndStudent = async (course_id, student_id) => {
  try {
    const registration = await registrationModel.findOne({
      where: { course_id, student_id }
    });

    if (!registration) {
      const error = new Error('No se encontró inscripción');
      error.statusCode = 404;
      throw error;
    }

    return registration;
  } catch (error) {
    throw error;
  }
};



module.exports = {getRegistrationById, createRegistration, getUserRegistrations,getUsersRegistrationsByCourseId, updatePaymentStatus, getRegistrationByCourseAndStudent}


