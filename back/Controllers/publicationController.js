const {publicationService} = require('../Services')

const getPublicationById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findPublication = await publicationService.getPublicationById(id)
        res.status(200).json(findPublication)
    } catch (error) {
        next(error)
    }
}

const createPublication = async (req, res, next) => {
    try {
        const {type, title, description, issue_date, owner_id} = req.body
        const newPublication = await publicationService.createPublication(type, title, description, issue_date, owner_id)
        res.status(200).json(newPublication)
    } catch (error) {
        next(error)
    }
}

module.exports = {getPublicationById, createPublication}