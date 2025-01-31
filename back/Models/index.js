const userModel = require('./UserModel')
const roleModel = require('./RoleModel')
const userRoleModel = require('./UserRoleModel')
const courseModel = require('./CourseModel')
const noteModel = require('./NoteModel')
const paymentModel = require('./PaymentModel')
const assistanceModel = require('./AssistanceModel')
const registrationModel = require('./RegistrationModel')
const publicationModel = require('./PublicationModel')

//Relaciones entre modelos

module.exports = {userModel, roleModel, userRoleModel, courseModel, noteModel, paymentModel, assistanceModel, registrationModel, publicationModel}