const {assistanceModel} = require('../Models')

const getAssistanceById = async (assistance_id) => {
    try {
        const findAssistance = await assistanceModel.findByPk(assistance_id)
        if (!findAssistance) {
            const error = new Error()
            error.message = `Error al encontrar asistencia con id=${assistance_id}`
            error.statusCode = 404
            throw error
        }
        return findAssistance
    } catch (error) {
        throw error
    }
}

module.exports = {getAssistanceById}