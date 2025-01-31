const express = require('express')
const router = express.Router()

const {roleController} = require('../Controllers')

router.get('/:id', roleController.getRoleById)

module.exports = router