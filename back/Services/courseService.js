const {courseModel} = require('../Models')
const {sequelize} = require('../Config/dbConfig')

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

const getCoursesByTeacherId = async (teacher_id) => {
    try {
        const courses = await courseModel.findAll({
            where: {
              teacher_id: teacher_id,
            },
          })
        if (courses.length === 0) {
            const error = new Error()
            error.message = `No hay cursos dictados por el docente con id=${teacher_id}`
            error.statusCode = 404
            throw error
        }
        return courses
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

const editCourse = async (id, course) => {
    const transaction = await sequelize.transaction()
    try {
        await courseModel.update(course, {
            where: {
                course_id: id
            }
        })
        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        throw error
    }
}


const putCourseById = async (course_id,name, description, category,inscription_requeriments,approval_conditions,active) => {
    try {
        const courses = await courseModel.update(
            {   
            name:name,
            description:description,
            category:category,
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

const putTeacherCourseById = async (course_id,teacher_id) => {
    try {
        const courses = await courseModel.update(
            {   
            teacher_id:teacher_id,
            },{where:{course_id: course_id}}

        )
        if (courses.length === 0) {
            const error = new Error()
            error.message = 'No se pudo asignar un profesor al curso'
            error.statusCode = 404
            throw error
        }
        return courses
    } catch (error) {
        throw error
    }
}



const setImgUrl = async (course_id, url) => {
    try {
        await courseModel.update({img: url}, {
            where: {
                course_id: course_id
            }
        })
        console.log(`Url de imagen del curso con id=${course_id} actualizada`)
    } catch (error) {
        throw error
    }
}

module.exports = {getCourseById, createCourse, getAllCourses,editCourse,putCourseById, getCoursesByTeacherId, setImgUrl, putTeacherCourseById}









