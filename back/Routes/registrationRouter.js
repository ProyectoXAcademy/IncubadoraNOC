const express = require('express');
const router = express.Router();
const { registrationController } = require('../Controllers');

router.get('/:id', registrationController.getRegistrationById);
router.post('/', registrationController.createRegistration);



module.exports = router;
