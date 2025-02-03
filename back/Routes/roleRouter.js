const express = require('express')
const router = express.Router()

const {roleController} = require('../Controllers')

router.get('/:id', roleController.getRoleById)
router.post('/create', roleController.createRole)

module.exports = router