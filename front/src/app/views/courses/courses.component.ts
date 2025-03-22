import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { UserService } from '../../services/users/user.service';
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
  filteredCourses: any[] = [];
  selectedCourse: any = null;
  categories: string[] = ['Todos', 'Programación', 'Diseño', 'Marketing', 'Negocios', 'Idiomas'];
  studentId!: number;

  imageUrl: string = "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg";

  constructor(
    private coursesService: CoursesService,
    private enrollmentsService: MyEnrollmentsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudentId();
    this.loadCourses();
  }

  loadStudentId() {
    const storedUser = localStorage.getItem('loggedUser');
    this.studentId = storedUser ? JSON.parse(storedUser).user_id : null;
  }

  loadCourses(): void {
    this.coursesService.getCoursesGET().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        for (let d of data) {
          this.userService.getUserById(d.teacher_id).subscribe({
            next: (r) => {
              d.teacherName = r.name + " " + r.lastName;
            }
          });
        }
      },
      error: (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    });
  }

  selectCourse(course: any) {
    console.log('Curso seleccionado:', course); // 👈 esto

    this.selectedCourse = course;
  }

  deselectCourse() {
    this.selectedCourse = null;
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

  goToCourseDetail() {
    if (this.selectedCourse?.course_id) {
      this.router.navigate(['/courses-detail', this.selectedCourse.course_id]);
    } else {
      console.error('course_id no válido');
    }
  }
  
  
}
