const express = require('express')
const router = express.Router()

const {loginController} = require('../Controllers')


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Permite a un usuario autenticarse en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuarioprueba@gmail.com"
 *               password:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Credenciales inválidas
 */


router.post('/', loginController.login)

module.exports = router