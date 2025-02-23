const {userService} = require('../Services')



    

    

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findUser = await userService.getUserById(id)
        res.status(200).json(findUser)
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const {name, lastName, dni, date_of_birth, email, password, role} = req.body
        const newUser = await userService.createUser(name, lastName, dni, date_of_birth, email, password, role)
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
}

const getUserByEmail = async (req, res, next) => {
    try {
        const {email} = req.body
        const findUser = await userService.getUserByEmail(email)
        res.status(200).json(findUser)
    } catch (error) {
        next(error)
    }
}



module.exports = {getUserById, createUser, getUserByEmail}