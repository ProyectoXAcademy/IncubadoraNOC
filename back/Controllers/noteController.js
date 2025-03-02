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

const getNoteByIdStudent = async (req, res, next) => {
    try {
        const id = req.params.id
        const findNotes = await noteService.getNoteByIdStudent(id)
        res.status(200).json(findNotes)
    } catch (error) {
        next(error)
    }
}

const getNoteByIdStudentANDIdCourse = async (req, res, next) => {
    try {
        const {student_id,course_id} = req.body
        const findNotes = await noteService.getNoteByIdStudentANDIdCourse(student_id,course_id)
        res.status(200).json(findNotes)
    } catch (error) {
        next(error)
    }
}

const createGrade= async (req, res, next) => {
    try {
        const {student_id,course_id,value,type} = req.body
        const findNotes = await noteService.createGrade(student_id,course_id,value,type)
        res.status(200).json(findNotes)
    } catch (error) {
        next(error)
    }
}

module.exports = {getNoteById,getNoteByIdStudent,getNoteByIdStudentANDIdCourse,createGrade}