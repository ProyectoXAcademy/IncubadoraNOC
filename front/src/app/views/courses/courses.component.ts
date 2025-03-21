import { Component, numberAttribute, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service'
import Swal from 'sweetalert2';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  teacherName:string|null = null
  filteredCourses: any[] = []; 
  selectedCourse: any = null;
  categories: string[] = ['Todos', 'Programación', 'Diseño', 'Marketing', 'Negocios', 'Idiomas'];
  student_id!: number;
  
  imageUrl:string = "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg"

  constructor(
    private coursesService: CoursesService,
    private myEnrollmentsService: MyEnrollmentsService,
    private servUser:UserService,
    
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudentId();
    this.loadCourses();
    console.log(this.imageUrl)
     
  }

  loadStudentId() {
    const storedUser = localStorage.getItem('loggedUser');
    this.student_id = storedUser ? JSON.parse(storedUser).user_id : null;
  }

  loadCourses(): void {
    this.coursesService.getCoursesGET().subscribe(
      (data) => {
        this.courses = data;
        console.log(data)
        this.filteredCourses = data;
        for(let d of data){
          this.servUser.getUserById(d.teacher_id).subscribe({
            next:(r) => {
              d.teacherName = r.name + " " + r.lastName
              console.log(d.teacherName)
            }
          })
        }
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
      Swal.fire({
        title: 'Usuario no autenticado',
        text: 'Parece que no has iniciado sesión. ¿Quieres ir al login?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ir al Login',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      });
      
      return;
    }

    this.myEnrollmentsService.inscribirUsuario(this.student_id, course_id).subscribe({
      next: (response) => {
        Swal.fire('¡Inscripción exitosa!', 'Te has inscrito correctamente al curso.', 'success');
        this.deselectCourse();
      },
      error: (error) => {
        console.error('Error al inscribirse:', error);
        const errorMessage = error.error?.message || 'No se pudo realizar la inscripción.';
        Swal.fire('Error al inscribirse', errorMessage, 'error');
      }
    });
  }

  filterByCategory(category: string) {
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
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
