const express = require('express')
const router = express.Router()

const {publicationController} = require('../Controllers')

router.get('/:id', publicationController.getPublicationById)

module.exports = router