const express = require('express');
const router = express.Router();
const { registrationController } = require('../Controllers');

router.get('/:id', registrationController.getRegistrationById);
router.post('/create', registrationController.createRegistration);
router.get('/user/:id', registrationController.getUserRegistrations)

module.exports = router;