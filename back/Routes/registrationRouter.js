const express = require('express');
const router = express.Router();
const { registrationController } = require('../Controllers');

router.get('/:id', registrationController.getRegistrationById);

module.exports = router;
