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
};

module.exports = {getRegistrationById, createRegistration}