import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import Swal from 'sweetalert2';

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
  student_id!: number;

  constructor(
    private coursesService: CoursesService,
    private myEnrollmentsService: MyEnrollmentsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadStudentId();
    this.loadCourses();
  }


  loadStudentId() {
    const storedUser = localStorage.getItem('loggedUser');
    this.student_id = storedUser ? JSON.parse(storedUser).user_id : null;
  
    if (!this.student_id) {
      Swal.fire('Error', 'No se pudo obtener el usuario logueado.', 'error');
    }
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

  enroll(course_id: number) {
    if (!this.student_id) {
      Swal.fire('Error', 'Usuario no autenticado.', 'error');
      return;
    }
  
    this.myEnrollmentsService.inscribirUsuario(this.student_id, course_id).subscribe({
      next: (response) => {
        Swal.fire('¡Inscripción exitosa!', 'Te has inscrito correctamente al curso.', 'success');
      },
      error: (error) => {
        console.error('Error al inscribirse:', error);
  
        const errorMessage = error.error?.message || 'No se pudo realizar la inscripción.';
        Swal.fire('Error al inscribirse', errorMessage, 'error');
      }
    });
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
