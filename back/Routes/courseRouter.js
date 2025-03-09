const express = require('express')
const router = express.Router()

const {courseController} = require('../Controllers')

router.get('/:id', courseController.getCourseById)
router.get('/', courseController.getAllCourses)
router.post('/create', courseController.createCourse)
router.put('/put', courseController.putCourseById)
//router.put('/edit', courseController.editCourse)
router.get('/teacher/:id', courseController.getCoursesByTeacherId)
router.put('/img', courseController.setImgUrl)



module.exports = router