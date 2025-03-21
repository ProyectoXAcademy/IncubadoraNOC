const express = require('express')
const router = express.Router()

const {courseController} = require('../Controllers')

router.get('/:id', courseController.getCourseById)
router.get('/', courseController.getAllCourses)
router.post('/create', courseController.createCourse)
router.put('/put', courseController.putCourseById)
router.put('/putTeacherId', courseController.putTeacherCourseById)

router.put('/edit', courseController.editCourse)
router.get('/teacher/:id', courseController.getCoursesByTeacherId)
router.get('/teacher_id/:id', courseController.getCoursesByTeacherId)
router.put('/img', courseController.setImgUrl)
router.get('/teacher/:teacher_id', courseController.getCoursesByTeacher);
router.get('/teacher/:id', courseController.getCoursesByTeacher)



module.exports = router