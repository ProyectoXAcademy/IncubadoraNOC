const express = require('express')
const router = express.Router()

const {userController} = require('../Controllers')

router.get('/:id', userController.getUserById)

module.exports = router