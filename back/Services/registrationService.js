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

module.exports = {getRegistrationById}