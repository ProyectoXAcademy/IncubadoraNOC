const {assistanceService} = require('../Services')

const getAssistanceById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findAssistance = await assistanceService.getAssistanceById(id)
        res.status(200).json(findAssistance)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAssistanceById}