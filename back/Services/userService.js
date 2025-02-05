const {userModel} = require('../Models')
const {hashPassword} = require('./hashPasswordService')
const {createUserRole} = require('./userRoleService')
const {getRoleByName} = require('./roleService')

const getUserById = async (user_id) => {
    try {
        const findUser = await userModel.findByPk(user_id, {include: {all: true}})
        if (!findUser) {
            const error = new Error()
            error.message = `Error al encontrar usuario con id=${user_id}`
            error.statusCode = 404
            throw error
        }
        return findUser
    } catch (error) {
        throw error
    }
}

// Al crear un usuario, también se crea userRole que relaciona los usuarios y roles
const createUser = async (name, lastName, dni, date_of_birth, email, password, role) => {
    console.log(role)
    try {
        const newUser = {
            name: name,
            lastName: lastName,
            dni: dni,
            date_of_birth: date_of_birth,
            email: email,
            password: await hashPassword(password)
        }
        console.log(newUser)
        const findRole = await getRoleByName(role)
        const createdUser = await userModel.create(newUser)
        await createUserRole(createdUser.user_id, findRole.role_id)
        return createdUser
    } catch (error) {
        throw error
    } 
}

const getUserByEmail = async (email) => {
    try {
        const findUser = await userModel.findOne({
            where: {
                email: email
            }
        })
        if (!findUser) {
            const error = new Error()
            error.message = `Error al encontrar usuario con mail=${mail}`
            error.statusCode = 404
            throw error
        }
        return findUser
    } catch (error) {
        throw error
    }
}

module.exports = {getUserById, createUser, getUserByEmail}