import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  selectedCourse: any = null;
  categories: string[] = ['Programación', 'Diseño', 'Marketing', 'Negocios', 'Idiomas'];


  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
   
  }


  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    );
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  deselectCourse() {
    this.selectedCourse = null;
  }

  enroll(courseId: number) {
    console.log(`Inscribirse en el curso con ID: ${courseId}`);
  }

  

filterByCategory(category: string) {
  console.log('Filtrando por:', category);
  
}


}