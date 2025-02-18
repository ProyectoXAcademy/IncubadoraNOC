const express = require('express')
const router = express.Router()

const {courseController} = require('../Controllers')

router.get('/:id', courseController.getCourseById)
router.post('/create', courseController.createCourse)
router.get('/', courseController.getAllCourses)
router.post('/create', courseController.createCourse)






module.exports = router