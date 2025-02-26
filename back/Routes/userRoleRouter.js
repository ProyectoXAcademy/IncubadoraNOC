const express = require('express')
const router = express.Router()

const {userRoleController} = require('../Controllers')

router.get('/:id', userRoleController.getUserRoleById)
router.get('/userID/:id', userRoleController.getUserRoleByUserId)
router.post('/create', userRoleController.createUserRole)



module.exports = router