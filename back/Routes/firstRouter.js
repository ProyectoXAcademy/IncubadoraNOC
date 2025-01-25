const express = require('express')
const router = express.Router()

const {firstController} = require('../Controllers')

router.get('/', firstController.holaMundo)

module.exports = router