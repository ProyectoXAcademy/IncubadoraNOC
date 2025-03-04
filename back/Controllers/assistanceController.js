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

const createAssistance = async (req, res, next) => {
    try {
        const {course_id, student_id,date} = req.body
        const newAssistance = await assistanceService.createAssistance(course_id, student_id,date)
        res.status(200).json(newAssistance)
    } catch (error) {
        next(error)
    }
}

const getAssistanceByIdStudentANDIdCourse = async (req, res, next) => {
    try {
        const {student_id,course_id} = req.body
        const findAssistance = await assistanceService.getAssistanceByIdStudentANDIdCourse(student_id,course_id)
        res.status(200).json(findAssistance)
    } catch (error) {
        next(error)
    }
}



module.exports = {getAssistanceById,createAssistance,getAssistanceByIdStudentANDIdCourse}