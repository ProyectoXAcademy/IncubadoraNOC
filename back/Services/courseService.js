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

const createCourse = async (name, description, category, teacher_id) => {
    try {
        const newCourse = {
            name: name,
            description: description,
            category: category,
            teacher_id: teacher_id,
            inscription_requirements: null,
            approval_conditions: null,
            active: true
        }
        console.log(newCourse)
        const createdCourse = await courseModel.create(newCourse)
        return createdCourse
    } catch (error) {
        throw error
    }
}

const getAllCourses = async () => {
    try {
        const courses = await courseModel.findAll()
        if (courses.length === 0) {
            const error = new Error()
            error.message = 'No hay cursos.'
            error.statusCode = 404
            throw error
        }
        return courses
    } catch (error) {
        throw error
    }
}


const putCourseById = async (course_id,name, description, category, teacher_id,inscription_requeriments,approval_conditions,active) => {
    try {
        const courses = await courseModel.update(
            {   
            name:name,
            description:description,
            category:category,
            teacher_id:teacher_id,
            inscription_requeriments:inscription_requeriments,
            approval_conditions:approval_conditions,
            active:active
            },{where:{course_id: course_id}}

        )
        if (courses.length === 0) {
            const error = new Error()
            error.message = 'No se pudo editar la informacion del curso'
            error.statusCode = 404
            throw error
        }
        return courses
    } catch (error) {
        throw error
    }
}



module.exports = {getCourseById, createCourse, getAllCourses,putCourseById}









