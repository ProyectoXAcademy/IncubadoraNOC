const express = require('express')
const router = express.Router()

const {paymentController} = require('../Controllers')

router.get('/:id', paymentController.getPaymentById)

module.exports = router