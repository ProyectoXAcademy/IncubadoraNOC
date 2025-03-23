import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses/courses.service';
import { UserService } from '../../services/users/user.service';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  imports: [RouterModule, CommonModule]
})
export class CourseDetailComponent implements OnInit {
  courseId!: number;
  course: any = null;
  studentId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private userService: UserService,
    private enrollmentsService: MyEnrollmentsService
  ) {}

  ngOnInit(): void {
    this.loadStudentId();

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('course_id');
      console.log('Course ID desde URL:', idParam);
      this.courseId = Number(idParam);

      if (!this.courseId || isNaN(this.courseId)) {
        console.error('ID inválido. No se puede cargar el curso.');
        return;
      }

      this.loadCourse();
    });
  }

  loadStudentId() {
    const storedUser = localStorage.getItem('loggedUser');
    this.studentId = storedUser ? JSON.parse(storedUser).user_id : null;
  }

  loadCourse(): void {
    this.coursesService.getCourseById(this.courseId).subscribe({
      next: (data) => {
        this.course = data;

        this.userService.getUserById(data.teacher_id).subscribe({
          next: (res) => {
            this.course.teacherName = res.name + ' ' + res.lastName;
          },
          error: () => {
            this.course.teacherName = 'No disponible';
          }
        });
      },
      error: (err) => {
        console.error('Error al cargar el curso:', err);
      }
    });
  }

  enroll() {
    if (!this.studentId) {
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

    this.enrollmentsService.inscribirUsuario(this.studentId, this.courseId).subscribe({
      next: () => {
        Swal.fire('¡Inscripción exitosa!', 'Te has inscrito correctamente al curso.', 'success');
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'No se pudo realizar la inscripción.';
        Swal.fire('Error al inscribirse', errorMessage, 'error');
      }
    });
  }
}
