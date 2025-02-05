const userService = require('./userService')
const roleService = require('./roleService')
const userRoleService = require('./userRoleService')
const courseService = require('./courseService')
const registrationService = require('./registrationService')
const noteService = require('./noteService')
const paymentService = require('./paymentService')
const assistanceService = require('./assistanceService')
const publicationService = require('./publicationService')
const hashPasswordService = require('./hashPasswordService')
const loginService = require('./loginService')

module.exports = {userService, roleService, userRoleService, courseService, registrationService, noteService,
     paymentService, assistanceService, publicationService, hashPasswordService, loginService}