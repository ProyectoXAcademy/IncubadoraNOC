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

module.exports = {getCourseById}