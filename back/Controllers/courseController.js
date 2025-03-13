const {courseService} = require('../Services')


const getCourseById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findCourse = await courseService.getCourseById(id)
        res.status(200).json(findCourse)
    } catch (error) {
        next(error)
    }
}

const getCoursesByTeacherId = async (req, res, next) => {
    try {
        const teacher_id = req.params.id
        const findCourses = await courseService.getCoursesByTeacherId(teacher_id)
        res.status(200).json(findCourses)
    } catch (error) {
        next(error)
    }
}

const createCourse = async (req, res, next) => {
    try {
        const {name, description, category, teacher_id} = req.body
        const newCourse = await courseService.createCourse(name, description, category, teacher_id)
        res.status(200).json(newCourse)
    } catch (error) {
        next(error)
    }
}

const putCourseById = async (req, res, next) => {
    try {
        const {course_id,name, description, category,inscription_requeriments,approval_conditions,active} = req.body
        const putCourse = await courseService.putCourseById(course_id,name, description, category, teacher_id,inscription_requeriments,approval_conditions,active)
        res.status(200).json(putCourse)
    } catch (error) {
        next(error)
    }
}

const putTeacherCourseById = async (req, res, next) => {
    try {
        const {course_id,teacher_id} = req.body
        const putCourse = await courseService.putTeacherCourseById(course_id,teacher_id)
        res.status(200).json(putCourse)
    } catch (error) {
        next(error)
    }
}

const getAllCourses = async (req, res, next) => {
    try {
        const allCourses = await courseService.getAllCourses()
        res.status(200).json(allCourses)
    } catch (error) {
        next(error)
    }
}

const editCourse = async (req, res, next) => {
    try {
        const editedCourse = req.body.course
        console.log(editedCourse)
        await courseService.editCourse(editedCourse.course_id, editedCourse)
        res.status(200).json(editedCourse)
    } catch (error) {
        next(error)
    }
}



const setImgUrl = async (req, res, next) => {
    try {
        const {course_id, img} = req.body
        await courseService.setImgUrl(course_id, img)
        res.status(200).json({
            message: 'Imagen de curso establecida'
        })
    } catch (error) {
        next(error)
    }
}

const getCoursesByTeacher = async (req, res, next) => {
    try {
      const { teacher_id } = req.params; 
      const courses = await courseService.getCoursesByTeacher(teacher_id); 
  
      if (!courses.length) {
        return res.status(404).json({ message: 'No hay cursos asignados a este profesor' });
      }
  
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  };

module.exports = {getCourseById, createCourse, getAllCourses, putCourseById, getCoursesByTeacherId, setImgUrl, getCoursesByTeacher}
