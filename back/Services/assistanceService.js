const {assistanceModel} = require('../Models')

const getAssistanceById = async (assistance_id) => {
    try {
        const findAssistance = await assistanceModel.findByPk(assistance_id)
        if (!findAssistance) {
            const error = new Error()
            error.message = `Error al encontrar asistencia con id=${assistance_id}`
            error.statusCode = 404
            throw error
        }
        return findAssistance
    } catch (error) {
        throw error
    }
}

const createAssistance = async (course_id, student_id) => {
    try {
        const newAssistance = {
            course_id: course_id,
            student_id: student_id
        }
        console.log(newAssistance)
        const createAssistance = await assistanceModel.create(newAssistance)
        return createAssistance
    } catch (error) {
        throw error
    }
}


const getAssistanceByIdStudentANDIdCourse = async (student_id,course_id) => {
    try {
        const findAssistance = await assistanceModel.findAll(
            {
                where: {
                    student_id:student_id,
                    course_id:course_id
                  }            
            }
        )
        if (!findAssistance) {
            const error = new Error()
            error.message = `Error al encontrar las asistencias de estudiante con id=${id_student} en el curso con id=${id_course}`
            error.statusCode = 404
            throw error
        }
        return findAssistance
    } catch (error) {
        throw error
    }
}


module.exports = {getAssistanceById,createAssistance, getAssistanceByIdStudentANDIdCourse}