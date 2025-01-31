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

module.exports = {getRegistrationById}