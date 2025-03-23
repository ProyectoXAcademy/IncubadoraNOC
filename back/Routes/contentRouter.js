const express = require('express');
const router = express.Router();

const { contentController } = require('../Controllers');

/**
 * @swagger
 * /api/content/{id}:
 *   get:
 *     summary: Obtiene contenido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del contenido
 *     responses:
 *       200:
 *         description: Contenido encontrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 type:
 *                   type: string
 *                 name:
 *                   type: string
 *                 url:
 *                   type: string
 *                 course_id:
 *                   type: string
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Contenido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', contentController.getContentById);

/**
 * @swagger
 * /api/content/create:
 *   post:
 *     summary: Crea un nuevo contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Tipo de contenido (video, documento, etc.)
 *               name:
 *                 type: string
 *                 description: Nombre del contenido
 *               url:
 *                 type: string
 *                 description: URL del contenido
 *               course_id:
 *                 type: string
 *                 description: ID del curso al que pertenece el contenido
 *     responses:
 *       201:
 *         description: Contenido creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 type:
 *                   type: string
 *                 name:
 *                   type: string
 *                 url:
 *                   type: string
 *                 course_id:
 *                   type: string
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/create', contentController.createContent);

/**
 * @swagger
 * /api/content/all:
 *   get:
 *     summary: Obtiene todos los contenidos
 *     responses:
 *       200:
 *         description: Lista de contenidos obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   type:
 *                     type: string
 *                   name:
 *                     type: string
 *                   url:
 *                     type: string
 *                   course_id:
 *                     type: string
 *       500:
 *         description: Error interno del servidor
 */
router.get('/all/', contentController.getAllContent);

/**
 * @swagger
 * /api/content/course/{id}:
 *   get:
 *     summary: Obtiene todos los contenidos de un curso específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Lista de contenidos del curso obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   type:
 *                     type: string
 *                   name:
 *                     type: string
 *                   url:
 *                     type: string
 *                   course_id:
 *                     type: string
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/course/:id', contentController.getContentOfCourse);

module.exports = router;
