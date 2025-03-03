const express = require('express')
const router = express.Router()

const {assistanceController} = require('../Controllers')

router.get('/:id', assistanceController.getAssistanceById)
router.post('/', assistanceController.createAssistance)
router.post('/student', assistanceController.getAssistanceByIdStudentANDIdCourse)



module.exports = router