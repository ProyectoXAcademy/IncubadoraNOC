const {userModel} = require('../Models')
const {hashPassword} = require('./hashPasswordService')

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

const createUser = async (name, lastName, dni, date_of_birth, email, password) => {
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
        await userModel.create(newUser)
        return newUser
    } catch (error) {
        throw error
    } 
}

module.exports = {getUserById, createUser}