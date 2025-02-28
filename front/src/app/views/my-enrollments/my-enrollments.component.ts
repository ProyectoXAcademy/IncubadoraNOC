import { Component, OnInit } from '@angular/core';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses/courses.service';


@Component({
  selector: 'app-my-enrollments',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './my-enrollments.component.html',
  styleUrl: './my-enrollments.component.css'
})
export class MyEnrollmentsComponent implements OnInit {
  userCourses: any[] = [];
  courses: any[] = [];

  constructor(
    private enrollmentsService: MyEnrollmentsService,
    private coursesService: CoursesService,
  
  ) {}

  ngOnInit(): void {
    
    this.loadCourses();
  }

  
  loadCourses(): void {
    this.coursesService.getCoursesGET().subscribe(
      (data) => {
        this.courses = data;
        this.getUserRegistrations();
        
      },
      (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    );
  }


  getUserRegistrations(): void {
    const loggedUser = localStorage.getItem('loggedUser');
  
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
     
  
      if (user && user.user_id) {
        this.enrollmentsService.getUserRegistrations(user.user_id).subscribe({
          next: (registrations) => {
           
  
            
            this.userCourses = registrations;
            
            
          },
          error: (error) => {
            console.error('Error al obtener las inscripciones:', error);
          }
        });
      } else {
        console.error('No se encontró user_id en el objeto de usuario.');
      }
    } else {
      console.error('No se encontró el usuario logueado en localStorage.');
    }
  }

  getCourseName(course_id: any): string {
   
    const course = this.courses.find(c => Number(c.course_id) === Number(course_id));
  
    if (!course) {
      console.warn(`Curso con ID ${course_id} no encontrado en la lista.`);
    }
  
    return course ? course.name : 'Curso no encontrado';
  }
  
  
  

}
