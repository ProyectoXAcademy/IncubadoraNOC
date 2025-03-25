import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Courses } from '../../models/courses.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Courses[] = [];
  teacher_id: number = 0; 

  constructor(
    private coursesService: CoursesService,
    private router :Router

  ) {}
  imageUrl: string = "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg";

  ngOnInit() {
    this.getLoggedUser();
  }

  
  getLoggedUser() {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.teacher_id = user.user_id; 
      this.loadTeacherCourses();
    }
  }

  

  
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

  goToCourse(course_id?: number): void {
    if (course_id !== undefined) {
      this.router.navigate(['/dashboard/view-course', course_id]); 
    } else {
      console.error('El curso no tiene un ID válido.');
    }
  }
  
}
