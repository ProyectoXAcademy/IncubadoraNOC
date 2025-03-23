const express = require('express');
const router = express.Router();

const { publicationController } = require('../Controllers');

/**
 * @swagger
 * /api/publication:
 *   get:
 *     summary: Obtiene todas las publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', publicationController.getAllPublications);

/**
 * @swagger
 * /api/publication/{id}:
 *   get:
 *     summary: Obtiene una publicación por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Publicación encontrada
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Publicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', publicationController.getPublicationById);

/**
 * @swagger
 * /api/publication/create:
 *   post:
 *     summary: Crea una nueva publicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la publicación
 *               content:
 *                 type: string
 *                 description: Contenido de la publicación
 *     responses:
 *       201:
 *         description: Publicación creada con éxito
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: No autorizado para crear publicaciones
 *       500:
 *         description: Error interno del servidor
 */
router.post('/create', publicationController.createPublication);

module.exports = router;
