const express = require('express')
const router = express.Router()

const {userRoleController} = require('../Controllers')

router.get('/:id', userRoleController.getUserRoleById)

module.exports = router