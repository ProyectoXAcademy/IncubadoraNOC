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

module.exports = {getPublicationById}