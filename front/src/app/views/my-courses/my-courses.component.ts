import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Courses } from '../../models/courses.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Courses[] = [];
  teacher_id: number = 0; // ✅ Variable para guardar el ID del profesor logueado

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getLoggedUser();
  }

  // ✅ Obtener el usuario logueado y su `teacher_id`
  getLoggedUser() {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.teacher_id = user.user_id; // ✅ Asignar `teacher_id`
      this.loadTeacherCourses();
    }
  }

  // ✅ Cargar cursos filtrados por el `teacher_id`
  loadTeacherCourses() {
    this.coursesService.getCoursesByTeacher(this.teacher_id).subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error al obtener los cursos del profesor', error);
      }
    });
  }
}
