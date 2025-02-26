const jwt = require('jsonwebtoken')
const secretKey = require('../secret')
const {getUserByEmail} = require('./userService')
const {getUserRoleByUserId} = require('./userRoleService')
const {verifyPassword} = require('./hashPasswordService')

const login = async (email, password) => {
    try {
        console.log(`${email} ${password}`)
        const findUser = await getUserByEmail(email)
        const userRole = await getUserRoleByUserId(findUser.user_id)
        if (findUser) {
            if (await verifyPassword(password, findUser.password)) {
                if (userRole.RoleRoleId == 1) {
                    const token = jwt.sign({
                        user: `${findUser.name} ${findUser.lastName}`,
                        role: 'Admin'
                    }, secretKey, {expiresIn: '1h'})
                    console.log('Se creó token de administrador!')
                    return {
                        findUser,
                        token: token
                    }
                }
                else if (userRole.RoleRoleId == 2) {
                    const token = jwt.sign({
                        user: `${findUser.name} ${findUser.lastName}`,
                        role: 'Teacher'
                    }, secretKey, {expiresIn: '1h'})
                    console.log('Se creó token de Docente!')
                    return {
                        findUser,
                        token: token
                    }
                }
                else {
                    const token = jwt.sign({
                        user: `${findUser.name} ${findUser.lastName}`,
                        role: 'Student'
                    }, secretKey, {expiresIn: '1h'})
                    console.log('Se creó token de Alumno!')
                    return {
                        findUser,
                        token: token
                    }
                }
            }
            else {
                    const error = new Error()
                    error.message = `Error al autenticar usuario. Contraseña incorrecta.`
                    error.statusCode = 401
                    throw error
            }
        }
        else {
            const error = new Error()
            error.message = `Error. No existe usuario con email=${email}`
            error.statusCode = 404
            throw error
        }
    } catch(error) {
        throw error
    }
}

module.exports = {login}