const express = require('express')
const router = express.Router()

const {courseController} = require('../Controllers')

router.get('/:id', courseController.getCourseById)



module.exports = router