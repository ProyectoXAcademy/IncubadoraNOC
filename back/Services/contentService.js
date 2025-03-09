const {contentModel} = require('../Models')

const getContentById = async (content_id) => {
    try {
        const findContent = await contentModel.findByPk(content_id)
        if (!findContent) {
            const error = new Error()
            error.message = `Error al encontrar Contenido con id=${content_id}`
            error.statusCode = 404
            throw error
        }
        return findContent
    } catch (error) {
        throw error
    }
}

const createContent = async (type, name, url, course_id) => {
    try {
        const newContent = {
            type: type,
            name: name,
            url: url,
            course_id: course_id
        }
        await contentModel.create(newContent)
        return newContent
    } catch (error) {
        throw error
    }
}

const getAllContent = async () => {
    try {
        const allContent = await contentModel.findAll()
        if (allContent.length === 0) {
            const error = new Error()
            error.message = 'No hay contenido.'
            error.statusCode = 404
            throw error
        }
        return allContent
    } catch (error) {
        throw error
    }
}

const getContentOfCourse = async (course_id) => {
    try {
        const content = await contentModel.findAll({
            where: {
                course_id: course_id
            }
        })
        if (content.lenght === 0) {
            const error = new Error()
            error.message = `El curso con id=${course_id} no tiene contenido.`
            error.statusCode = 404
            throw error
        }
        return content
    } catch (error) {
        throw error
    }
}

module.exports = {getContentById, createContent, getAllContent, getContentOfCourse}