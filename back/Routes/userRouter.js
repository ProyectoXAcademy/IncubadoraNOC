const express = require('express')
const router = express.Router()

const {userController} = require('../Controllers')

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
 *                 example: "nahuel"
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
 *       400:
 *         description: Error en la solicitud
 */
router.post('/create', userController.createUser)

module.exports = router