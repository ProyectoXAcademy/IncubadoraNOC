const userModel = require('./UserModel')
const roleModel = require('./RoleModel')
const userRoleModel = require('./UserRoleModel')
const courseModel = require('./CourseModel')
const noteModel = require('./NoteModel')
const paymentModel = require('./PaymentModel')
const assistanceModel = require('./AssistanceModel')
const registrationModel = require('./RegistrationModel')
const publicationModel = require('./PublicationModel')
const contentModel = require('./ContentModel')

// Relaciones entre modelos

// Un usuario puede tener varios roles y un rol puede estar asignado a varios usuarios (muchos a muchos)
userModel.belongsToMany(roleModel, {through: 'UserRoles'})
roleModel.belongsToMany(userModel, {through: 'UserRoles'})

// Un usuario puede tener una o varias inscripciones y/o asistencias. También varios dictados (Si es docente)
userModel.hasMany(assistanceModel, {foreignKey: 'student_id'})
userModel.hasMany(registrationModel, {foreignKey: 'student_id'})

// Un curso tiene un docente asignado. Un curso puede tener mucho contenido
courseModel.belongsTo(userModel, {foreignKey: 'teacher_id'})
courseModel.hasMany(contentModel, {foreignKey: 'course_id'})

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

// Cada curso tiene Contenido. Puede tener uno o varios y cada uno tiene asignado un curso al que pertenece
contentModel.belongsTo(courseModel, {foreignKey: 'course_id'})


module.exports = {userModel, roleModel, userRoleModel, courseModel, noteModel, paymentModel, 
    assistanceModel, registrationModel, publicationModel, contentModel}