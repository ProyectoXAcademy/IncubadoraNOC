const express = require('express')
const router = express.Router()

const {noteController} = require('../Controllers')

router.get('/:id', noteController.getNoteById)
router.get('/user/:id', noteController.getNoteByIdStudent)
router.post('/student', noteController.getNoteByIdStudentANDIdCourse)
router.post('/', noteController.createGrade)





module.exports = router