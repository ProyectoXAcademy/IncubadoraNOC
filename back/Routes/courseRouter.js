const express = require('express')
const router = express.Router()

const {courseController} = require('../Controllers')

router.get('/:id', courseController.getCourseById)
router.get('/', courseController.getAllCourses)
router.post('/create', courseController.createCourse)
router.put('/put', courseController.putCourseById)
//router.put('/edit', courseController.editCourse)





module.exports = router