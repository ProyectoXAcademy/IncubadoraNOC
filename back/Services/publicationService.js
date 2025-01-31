const {publicationModel} = require('../Models')

const getPublicationById = async (publication_id) => {
    try {
        const findPublication = await publicationModel.findByPk(publication_id)
        if (!findPublication) {
            const error = new Error()
            error.message = `Error al encontrar publicación con id=${publication_id}`
            error.statusCode = 404
            throw error
        }
        return findPublication
    } catch (error) {
        throw error
    }
}

module.exports = {getPublicationById}