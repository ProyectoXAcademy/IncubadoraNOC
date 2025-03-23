const express = require('express');
const router = express.Router();
const { courseController } = require('../Controllers');

/**
 * @swagger
 * /api/course/{id}:
 *   get:
 *     summary: Obtiene un curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Curso encontrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *                 teacher_id:
 *                   type: string
 *                 img:
 *                   type: string
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', courseController.getCourseById);

/**
 * @swagger
 * /api/course:
 *   get:
 *     summary: Obtiene todos los cursos
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   category:
 *                     type: string
 *                   teacher_id:
 *                     type: string
 *                   img:
 *                     type: string
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', courseController.getAllCourses);

/**
 * @swagger
 * /api/course/create:
 *   post:
 *     summary: Crea un nuevo curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               teacher_id:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *                 teacher_id:
 *                   type: string
 *                 img:
 *                   type: string
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/create', courseController.createCourse);

/**
 * @swagger
 * /api/course/put:
 *   put:
 *     summary: Actualiza un curso por ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               inscription_requeriments:
 *                 type: string
 *               approval_conditions:
 *                 type: string
 *               active:
 *                 type: boolean
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso actualizado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/put', courseController.putCourseById);

/**
 * @swagger
 * /api/course/putTeacherId:
 *   put:
 *     summary: Actualiza el ID del profesor en un curso por ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: string
 *               teacher_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: ID del profesor actualizado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/putTeacherId', courseController.putTeacherCourseById);

/**
 * @swagger
 * /api/course/edit:
 *   put:
 *     summary: Edita un curso existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               teacher_id:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso editado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/edit', courseController.editCourse);

/**
 * @swagger
 * /api/course/teacher/{id}:
 *   get:
 *     summary: Obtiene todos los cursos de un profesor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del profesor
 *     responses:
 *       200:
 *         description: Lista de cursos del profesor obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   teacher_id:
 *                     type: string
 *                   img:
 *                     type: string
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/teacher/:id', courseController.getCoursesByTeacherId);

/**
 * @swagger
 * /api/course/teacher_id/{id}:
 *   get:
 *     summary: Obtiene todos los cursos de un profesor por ID (Alias)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del profesor
 *     responses:
 *       200:
 *         description: Lista de cursos del profesor obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   teacher_id:
 *                     type: string
 *                   img:
 *                     type: string
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Profesor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/teacher_id/:id', courseController.getCoursesByTeacherId);

/**
 * @swagger
 * /api/course/img:
 *   put:
 *     summary: Establece la URL de la imagen de un curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: URL de la imagen actualizada con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/img', courseController.setImgUrl);

module.exports = router;
