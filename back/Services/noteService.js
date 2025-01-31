const {noteModel} = require('../Models')

const getNoteById = async (note_id) => {
    try {
        const findNote = await noteModel.findByPk(note_id)
        if (!findNote) {
            const error = new Error()
            error.message = `Error al encontrar nota con id=${note_id}`
            error.statusCode = 404
            throw error
        }
        return findNote
    } catch (error) {
        throw error
    }
}

module.exports = {getNoteById}