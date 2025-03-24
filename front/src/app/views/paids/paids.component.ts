import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { UserService } from '../../services/users/user.service';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paids',
  standalone: true,
  templateUrl: './paids.component.html',
  styleUrl: './paids.component.css',
  imports: [NgIf, NgFor, RouterModule, CommonModule]
})
export class PaidsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute ,
    private servEnrollments: MyEnrollmentsService,
    private servUser: UserService,
    private router : Router
  ) {}

  registrationsByCourse: any[] = [];
  users: any[] = [];

  ngOnInit() {
    const course_id = Number(this.route.snapshot.paramMap.get('course_id'));
  

 
  this.servUser.getAllUsers().subscribe({
    next: (usuarios) => {
      this.users = usuarios;

      
      this.servEnrollments.getInscriptionsByIdCourse(course_id).subscribe({
        next: (res) => {
          this.registrationsByCourse = res;
          this.loadUserData(); 
        },
        error: (err) => {
          console.error('Error al obtener inscripciones:', err);
        }
      });
    },
    error: (err) => {
      console.error('Error al obtener usuarios:', err);
    }
  });

  }
  

  loadUserData() {
    
    this.registrationsByCourse.forEach(reg => {
      const alumno = this.users.find(u => u.user_id === reg.student_id);
      reg.alumno = alumno;
    });
  }

  getNombreAlumno(student_id: number): string {
    const alumno = this.users.find(u => u.user_id === student_id);
    return alumno ? `${alumno.name} ${alumno.lastName}` : 'Desconocido';
  }

  marcarComoPagado(registration_id: number) {
    this.servEnrollments.setPaidStatus(registration_id, true).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Pago confirmado',
          text: 'El alumno ahora puede acceder al contenido.'
        });
        const reg = this.registrationsByCourse.find(r => r.registration_id === registration_id);
        if (reg) reg.paid = true;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el estado de pago.'
        });
      }
    });
  }


  volverAlCurso() {
    const course_id = Number(this.route.snapshot.paramMap.get('course_id'));
    this.router.navigate(['/dashboard/view-course', course_id]);
  }

}
