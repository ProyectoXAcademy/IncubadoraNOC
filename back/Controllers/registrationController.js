const {registrationService} = require('../Services')

const getRegistrationById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findRegistration = await registrationService.getRegistrationById(id)
        res.status(200).json(findRegistration)
    } catch (error) {
        next(error)
    }
}

const createRegistration = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;

    if (!student_id || !course_id) {
      return res.status(400).json({ message: 'Datos inválidos.' });
    }

    const registration = await registrationService.createRegistration(student_id, course_id);

    res.status(201).json({
      message: 'Inscripción exitosa',
      registration
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const getUserRegistrations = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const registrations = await registrationService.getUserRegistrations(user_id);
    
    res.status(200).json(registrations);
  } catch (error) {
    next(error);
  }
};


const getUsersRegistrationsByCourseId = async (req, res, next) => {
  try {
    const course_id = req.params.id
    const registrations = await registrationService.getUsersRegistrationsByCourseId(course_id)
    res.status(200).json(registrations)
  } catch (error) {
    next(error)
  }
}

module.exports = {getRegistrationById, createRegistration, getUserRegistrations, getUsersRegistrationsByCourseId}