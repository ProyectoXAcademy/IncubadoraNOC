const {contentService} = require('../Services')

const getContentById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findContent = await contentService.getContentById(id)
        res.status(200).json(findContent)
    } catch (error) {
        next(error)
    }
}

const createContent = async (req, res, next) => {
    try {
        const {type, name, url, course_id} = req.body
        const newContent = await publicationService.createContent(type, name, url, course_id)
        res.status(200).json(newContent)
    } catch (error) {
        next(error)
    }
}

const getAllContent = async (req, res, next) => {
    try {
        const content = await contentService.getAllContent()
        res.status(200).json(content)
    } catch (error) {
        next(error)
    }
}

const getContentOfCourse = async (course_id) => {
    try {
        const content = await contentService.getContentOfCourse(course_id)
        res.status(200).json(content)
    } catch (error) {
        next(error)
    }
}

module.exports = {getContentById, createContent, getAllContent, getContentOfCourse}