const { courseModel } = require('../Models');
const { sequelize } = require('../Config/dbConfig');

const getCourseById = async (course_id) => {
  const findCourse = await courseModel.findByPk(course_id);
  if (!findCourse) {
    const error = new Error(`Error al encontrar curso con id=${course_id}`);
    error.statusCode = 404;
    throw error;
  }
  return findCourse;
};

const getAllCourses = async () => {
  const courses = await courseModel.findAll();
  if (courses.length === 0) {
    const error = new Error('No hay cursos.');
    error.statusCode = 404;
    throw error;
  }
  return courses;
};

const getCoursesByTeacherId = async (teacher_id) => {
  const courses = await courseModel.findAll({ where: { teacher_id } });
  if (courses.length === 0) {
    const error = new Error(`No hay cursos dictados por el docente con id=${teacher_id}`);
    error.statusCode = 404;
    throw error;
  }
  return courses;
};

const getCoursesByTeacher = async (teacher_id) => {
  const courses = await courseModel.findAll({ where: { teacher_id } });
  return courses;
};

const createCourse = async (
  name,
  description,
  long_description,
  category,
  teacher_id,
  img,
  start_date,
  end_date,
  duration,
  modality,
  level,
  price
) => {
  const newCourse = {
    name,
    description,
    long_description,
    category,
    teacher_id,
    img,
    active: true,
    start_date,
    end_date,
    duration,
    modality,
    level,
    price,
    inscription_requeriments: null,
    approval_conditions: null
  };
  return await courseModel.create(newCourse);
};

const putCourseById = async (
  course_id,
  name,
  description,
  long_description,
  category,
  inscription_requeriments,
  approval_conditions,
  active,
  img,
  start_date,
  end_date,
  duration,
  modality,
  level,
  price
) => {
  const updated = await courseModel.update(
    {
      name,
      description,
      long_description,
      category,
      inscription_requeriments,
      approval_conditions,
      active,
      img,
      start_date,
      end_date,
      duration,
      modality,
      level,
      price
    },
    { where: { course_id } }
  );

  if (updated[0] === 0) {
    const error = new Error('No se pudo editar la información del curso');
    error.statusCode = 404;
    throw error;
  }

  return updated;
};

const editCourse = async (id, course) => {
  const transaction = await sequelize.transaction();
  try {
    await courseModel.update(course, {
      where: { course_id: id },
      transaction
    });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const putTeacherCourseById = async (course_id, teacher_id) => {
  const updated = await courseModel.update(
    { teacher_id },
    { where: { course_id } }
  );

  if (updated[0] === 0) {
    const error = new Error('No se pudo asignar un profesor al curso');
    error.statusCode = 404;
    throw error;
  }

  return updated;
};

const setImgUrl = async (course_id, url) => {
  await courseModel.update({ img: url }, { where: { course_id } });
  console.log(`Url de imagen del curso con id=${course_id} actualizada`);
};

module.exports = {
  getCourseById,
  createCourse,
  getAllCourses,
  editCourse,
  putCourseById,
  getCoursesByTeacherId,
  setImgUrl,
  getCoursesByTeacher,
  putTeacherCourseById
};
