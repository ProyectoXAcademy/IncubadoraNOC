const express = require('express')
const router = express.Router()

const { loginController } = require('../Controllers')

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
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1..."
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: "usuarioprueba@gmail.com"
 *       400:
 *         description: Solicitud incorrecta (faltan datos o formato incorrecto)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El email y la contraseña son obligatorios."
 *       401:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Correo o contraseña incorrectos."
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

router.post('/', loginController.login)

module.exports = router
