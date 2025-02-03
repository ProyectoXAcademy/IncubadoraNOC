const express = require('express')
const router = express.Router()

const {publicationController} = require('../Controllers')

router.get('/:id', publicationController.getPublicationById)
router.post('/create', publicationController.createPublication)

module.exports = router