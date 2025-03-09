const express = require('express')
const router = express.Router()

const { userController } = require('../Controllers')
const { authMiddleware } = require('../Middlewares')

router.get('/:id', userController.getUserById)

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Registra un nuevo usuario en la plataforma.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nahuel"
 *               lastName:
 *                 type: string
 *                 example: "Argandonia"
 *               dni:
 *                 type: integer
 *                 example: 37732587
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *                 example: "1993-07-06"
 *               email:
 *                 type: string
 *                 example: "usuarioprueba2@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 example: "Estudiante"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Nahuel"
 *                 lastName:
 *                   type: string
 *                   example: "Argandonia"
 *                 email:
 *                   type: string
 *                   example: "usuarioprueba2@gmail.com"
 *       400:
 *         description: Error en la solicitud (datos faltantes o inválidos)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Todos los campos son obligatorios."
 *       409:
 *         description: El usuario ya existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El correo electrónico ya está registrado."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error inesperado, inténtelo más tarde."
 */

router.post('/create', userController.createUser)

/** router.put('/edit', authMiddleware.userIsAuth, userController.editUser) */
router.put('/edit', userController.editUser)

router.post('/mail', userController.getUserByEmail)

router.put('/change-password', userController.changePassword)

router.put('/change-password', userController.changePassword)

router.put('/img', userController.setImgUrl)


module.exports = router
