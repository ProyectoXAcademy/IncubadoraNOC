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

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.loadUserCourses();
  }

  loadUserCourses() {
    // Llamar al método correctamente con ()
    this.coursesService.getCoursesGET().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error al obtener los cursos del usuario', error);
      }
    });
  }
}
