const express = require('express')
const router = express.Router()

const {noteController} = require('../Controllers')

router.get('/:id', noteController.getNoteById)
router.get('/user/:id', noteController.getNoteByIdStudent)



module.exports = router