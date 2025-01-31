const {courseModel} = require('../Models')

const getCourseById = async (course_id) => {
    try {
        const findCourse = await courseModel.findByPk(course_id)
        if (!findCourse) {
            const error = new Error()
            error.message = `Error al encontrar curso con id=${course_id}`
            error.statusCode = 404
            throw error
        }
        return findCourse
    } catch (error) {
        throw error
    }
}

module.exports = {getCourseById}