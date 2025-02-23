import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = []; // Cursos filtrados
  selectedCourse: any = null;
  categories: string[] = ['Todos', 'Programación', 'Diseño', 'Marketing', 'Negocios', 'Idiomas'];

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService.getCoursesGET().subscribe(
      (data) => {
        this.courses = data;
        this.filteredCourses = data; // Inicializamos filteredCourses
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
    this.router.navigate(['/register']);
  }

  filterByCategory(category: string) {
    console.log('Filtrando por:', category);
  
    if (category === 'Todos') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => 
        this.normalizeString(course.category) === this.normalizeString(category)
      );
    }
  }
  

  normalizeString(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD') // Descompone los caracteres con tilde
      .replace(/[\u0300-\u036f]/g, ''); // Elimina las marcas de acento
  }
}
