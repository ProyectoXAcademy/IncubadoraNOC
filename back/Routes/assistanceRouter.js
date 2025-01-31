const express = require('express')
const router = express.Router()

const {assistanceController} = require('../Controllers')

router.get('/:id', assistanceController.getAssistanceById)

module.exports = router