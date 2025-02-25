const userModel = require('./UserModel')
const roleModel = require('./RoleModel')
const userRoleModel = require('./UserRoleModel')
const courseModel = require('./CourseModel')
const noteModel = require('./NoteModel')
const paymentModel = require('./PaymentModel')
const assistanceModel = require('./AssistanceModel')
const registrationModel = require('./RegistrationModel')
const publicationModel = require('./PublicationModel')

// Relaciones entre modelos

// Un usuario puede tener varios roles y un rol puede estar asignado a varios usuarios (muchos a muchos)
userModel.belongsToMany(roleModel, {through: 'UserRoles'})
roleModel.belongsToMany(userModel, {through: 'UserRoles'})

// Un usuario puede tener una o varias inscripciones y/o asistencias
userModel.hasMany(assistanceModel, {foreignKey: 'student_id'})
userModel.hasMany(registrationModel, {foreignKey: 'student_id'})

// Un curso tiene un docente asignado
courseModel.belongsTo(userModel, {foreignKey: 'teacher_id'})

// Una asistencia tiene un alumno y curso correspondiente
assistanceModel.belongsTo(userModel, {foreignKey: 'student_id'})
assistanceModel.belongsTo(courseModel, {foreignKey: 'course_id'})

// Una nota tiene asignado un estudiante y un curso
noteModel.belongsTo(userModel, {foreignKey: 'student_id'})
noteModel.belongsTo(courseModel, {foreignKey: 'course_id'})

// Un pago tiene asignado un estudiante y un curso
paymentModel.belongsTo(userModel, {foreignKey: 'student_id'})
paymentModel.belongsTo(courseModel, {foreignKey: 'course_id'})

//Una inscripción tiene asignado un estudiante y un curso
registrationModel.belongsTo(userModel, {foreignKey: 'student_id'})
registrationModel.belongsTo(courseModel, {foreignKey: 'course_id'})

// Una publicación tiene un autor/creador
publicationModel.belongsTo(userModel, {foreignKey: 'owner_id'})


module.exports = {userModel, roleModel, userRoleModel, courseModel, noteModel, paymentModel, assistanceModel, registrationModel, publicationModel}