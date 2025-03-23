const express = require('express');
const router = express.Router();
const { noteController } = require('../Controllers');

/**
 * @swagger
 * /api/note/{id}:
 *   get:
 *     summary: Obtener una nota por ID
 *     description: Recupera los detalles de una nota específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la nota.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nota encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la nota.
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *                 value:
 *                   type: number
 *                   description: Valor de la nota.
 *                 type:
 *                   type: string
 *                   description: Tipo de la nota.
 *       404:
 *         description: Nota no encontrada
 * 
 */
router.get('/:id', noteController.getNoteById);

/**
 * @swagger
 * /api/note/user/{id}:
 *   get:
 *     summary: Obtener las notas de un estudiante
 *     description: Recupera todas las notas asociadas a un estudiante específico.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del estudiante.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la nota.
 *                   student_id:
 *                     type: string
 *                     description: ID del estudiante.
 *                   course_id:
 *                     type: string
 *                     description: ID del curso.
 *                   value:
 *                     type: number
 *                     description: Valor de la nota.
 *                   type:
 *                     type: string
 *                     description: Tipo de la nota.
 *       404:
 *         description: No se encontraron notas para el estudiante.
 */
router.get('/user/:id', noteController.getNoteByIdStudent);

/**
 * @swagger
 * /api/note/student:
 *   post:
 *     summary: Obtener notas por estudiante y curso
 *     description: Recupera las notas de un estudiante en un curso específico utilizando los IDs.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: El ID del estudiante.
 *               course_id:
 *                 type: string
 *                 description: El ID del curso.
 *     responses:
 *       200:
 *         description: Notas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la nota.
 *                   student_id:
 *                     type: string
 *                     description: ID del estudiante.
 *                   course_id:
 *                     type: string
 *                     description: ID del curso.
 *                   value:
 *                     type: number
 *                     description: Valor de la nota.
 *                   type:
 *                     type: string
 *                     description: Tipo de la nota.
 *       404:
 *         description: No se encontraron notas para el estudiante y curso proporcionados.
 */
router.post('/student', noteController.getNoteByIdStudentANDIdCourse);

/**
 * @swagger
 * /api/note:
 *   post:
 *     summary: Crear una nueva nota
 *     description: Permite crear una nueva nota para un estudiante en un curso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: El ID del estudiante.
 *               course_id:
 *                 type: string
 *                 description: El ID del curso.
 *               value:
 *                 type: number
 *                 description: El valor de la nota.
 *               type:
 *                 type: string
 *                 description: El tipo de la nota.
 *     responses:
 *       200:
 *         description: Nota creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la nota.
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *                 value:
 *                   type: number
 *                   description: Valor de la nota.
 *                 type:
 *                   type: string
 *                   description: Tipo de la nota.
 */
router.post('/', noteController.createGrade);

module.exports = router;
