const express = require('express')
const router = express.Router()

const {contentController} = require('../Controllers')

router.get('/:id', contentController.getContentById)
router.post('/create', contentController.createContent)
router.get('/all/', contentController.getAllContent)
router.get('/course/:id', contentController.getContentOfCourse)

module.exports = router