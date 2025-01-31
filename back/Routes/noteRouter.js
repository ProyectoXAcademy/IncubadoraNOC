const express = require('express')
const router = express.Router()

const {noteController} = require('../Controllers')

router.get('/:id', noteController.getNoteById)

module.exports = router