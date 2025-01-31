const {noteService} = require('../Services')

const getNoteById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findNote = await noteService.getNoteById(id)
        res.status(200).json(findNote)
    } catch (error) {
        next(error)
    }
}

module.exports = {getNoteById}