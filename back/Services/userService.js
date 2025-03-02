const {userModel} = require('../Models')
const {hashPassword} = require('./hashPasswordService')
const {createUserRole} = require('./userRoleService')
const {getRoleByName} = require('./roleService')
const {sequelize} = require('../Config/dbConfig')
const bcrypt = require ('bcrypt')

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

const editUser = async (id, user) => {
    const transaction = await sequelize.transaction()
    try {
        await userModel.update(user, {
            where: {
                user_id: id
            }
        })
        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        throw error
    }
}



const changePassword = async (user_id, oldPassword, newPassword) => {
    try {
        
        const user = await userModel.findByPk(user_id);

        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            throw new Error('Contraseña actual incorrecta');
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        
        await user.update({ password: hashedPassword });

        return { message: 'Contraseña actualizada correctamente' };
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {getUserById, createUser, getUserByEmail, editUser, changePassword}