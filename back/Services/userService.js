const {userModel} = require('../Models')

const getUserById = async (user_id) => {
    try {
        const findUser = await userModel.findByPk(user_id)
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

module.exports = {getUserById}