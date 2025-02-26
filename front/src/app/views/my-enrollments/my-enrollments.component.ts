import { Component, OnInit } from '@angular/core';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-enrollments',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './my-enrollments.component.html',
  styleUrl: './my-enrollments.component.css'
})
export class MyEnrollmentsComponent implements OnInit {
  userCourses: any[] = [];

  constructor(private enrollmentsService: MyEnrollmentsService) {}

  ngOnInit(): void {
    this.getUserRegistrations();
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

}
