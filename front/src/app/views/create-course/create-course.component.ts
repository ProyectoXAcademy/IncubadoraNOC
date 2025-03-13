import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { CoursesService } from '../../services/courses/courses.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // ✅ IMPORTA `ReactiveFormsModule`
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit {
  formPOST: FormGroup;
  teachers: any[] = []; // ✅ Lista de docentes extraída del backend

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private coursesService: CoursesService
  ) {
    this.formPOST = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      teacher_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTeachers();
  }

  private loadTeachers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.teachers = users.filter(user => 
          user.Roles.some((role: { name: string; }) => role.name === 'Docente') // ✅ Filtramos docentes
        );
      },
      error: (err) => {
        console.error('Error al obtener docentes:', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo cargar la lista de docentes.',
        });
      }
    });
  }


  // metodo post del formulario, antes valida
  createCourseSUBMIT(){
    this.teacher_id = JSON.parse(localStorage.getItem('loggedUser')!).user_id
    if(this.formPOST.valid){
      this.serv.createCoursePOST({
        name: this.formPOST.value.name,
        description:this.formPOST.value.description,
        category: this.formPOST.value.category,
        teacher_id: this.teacher_id!,
      }).subscribe({
        error: (e) =>{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al crear el curso',
          });
    this.formPOST.reset()

          
        },
        complete: () => {
          Swal.fire({
            icon: 'success',
            title: 'Curso Creado',
            text: 'El curso ha sido creado exitosamente',
          });
          this.formPOST.reset();
        },
        error: (err) => {
          console.error('Error al crear curso:', err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al crear el curso. Inténtalo de nuevo.',
          });
        }
      });
    } else {
      this.formPOST.markAllAsTouched();
    }
  }
}