const {courseService} = require('../Services')


const getCourseById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findCourse = await courseService.getCourseById(id)
        res.status(200).json(findCourse)
    } catch (error) {
        next(error)
    }
}

const createCourse = async (req, res, next) => {
    try {
        const {name, description, category, teacher_id} = req.body
        const newCourse = await courseService.createCourse(name, description, category, teacher_id)
        res.status(200).json(newCourse)
    } catch (error) {
        next(error)
    }
}

const putCourseById = async (req, res, next) => {
    try {
        const {course_id,name, description, category, teacher_id,inscription_requeriments,approval_conditions,active} = req.body
        const putCourse = await courseService.putCourseById(course_id,name, description, category, teacher_id,inscription_requeriments,approval_conditions,active)
        res.status(200).json(putCourse)
    } catch (error) {
        next(error)
    }
}

const getAllCourses = async (req, res, next) => {
    try {
        const allCourses = await courseService.getAllCourses()
        res.status(200).json(allCourses)
    } catch (error) {
        next(error)
    }
}







module.exports = {getCourseById, createCourse, getAllCourses,putCourseById}