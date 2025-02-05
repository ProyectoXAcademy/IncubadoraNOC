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

const createPublication = async (type, title, description, issue_date, owner_id) => {
    try {
        const newPublication = {
            type: type,
            title: title,
            description: description,
            issue_date: issue_date,
            owner_id: owner_id,
        }
        await publicationModel.create(newPublication)
        return newPublication
    } catch (error) {
        throw error
    }
}

const getAllPublications = async () => {
    try {
        const publications = await publicationModel.findAll()
        if (publications.length === 0) {
            const error = new Error()
            error.message = `No hay publicaciones.`
            error.statusCode = 404
            throw error
        }
        return publications
    } catch (error) {
        throw error
    }
}

module.exports = {getPublicationById, createPublication, getAllPublications}