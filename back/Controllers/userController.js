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

const editUser = async (req, res, next) => {
    try {
        const editedUser = req.body.user
        console.log(editedUser)
        await userService.editUser(editedUser.user_id, editedUser)
        res.status(200).json(editedUser)
    } catch (error) {
        next(error)
    }
}


const changePassword = async (req, res) => {
    try {
        const { user_id, oldPassword, newPassword } = req.body;

        if (!user_id || !oldPassword || !newPassword) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const response = await userService.changePassword(user_id, oldPassword, newPassword);

        res.status(200).json(response);
    } catch (error) {
        console.error('Error en changePassword:', error.message);
        //res.status(400).json({ message: error.message });
        next(error)
    }
};

const setImgUrl = async (req, res, next) => {
    try {
        const {user_id, img} = req.body
        await userService.setImgUrl(user_id, img)
        res.status(200).json({
            message: 'Foto de perfil de usuario establecida'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getUserById, createUser, getUserByEmail, editUser, changePassword, setImgUrl}