import { Component } from '@angular/core';
import { Courses } from '../../models/courses.model';
import { CoursesService } from '../../services/courses/courses.service';
import { Attendance } from '../../models/attendance.model';
import { MyAttendanceService} from '../../services/my-attendance/my-attendance.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CreateUserRoleService } from '../../services/createUserRole/create-user-role.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';





@Component({
  selector: 'app-course-view',
  imports: [FormsModule, NgIf,RouterModule],
  standalone :true,
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {

  constructor(private serv:CoursesService, 
    private servRole:CreateUserRoleService,
     private servAttendance:MyAttendanceService,
      private router:Router,
      private routerActive:ActivatedRoute
    ){}
  course:Courses | null = null
  editarDescripcion:Boolean = false
  esDocente: boolean = false
  attendance:Attendance|null = null
  habilitacionDeAsistencia:boolean = true // está hardcodeado. La idea es que cuando esta variable venga del back

  ngOnInit(){
    this.editarDescripcion
    this.esDocente
    this.attendance
    this.getInfoCourse()
    this.controlRole()


 
  }


  ///////////  DESCRIPCION /////////////
  ///////////  DESCRIPCION /////////////

  getInfoCourse(): void {
    const course_id = Number(this.routerActive.snapshot.paramMap.get('course_id')); // ✅ Obtiene el ID de la ruta
  
    if (!course_id) {
      console.error('ID del curso no encontrado.');
      return;
    }
  
    this.serv.getCourseByIdGET(course_id).subscribe({
      next: (c) => {
        this.course = c;
        console.log('Curso cargado:', this.course);
      },
      error: (error) => {
        console.error('Error al cargar el curso:', error);
      }
    });
  }

  editarDescripcionTrue(){this.editarDescripcion = true}

  descriptionCoursePUT(){
    this.serv.putCourseById(this.course!).subscribe({
      next:(r)=> {}
    })
    this.editarDescripcion = false
  }

  descriptionCancelar(){this.editarDescripcion = false ;this.getInfoCourse()}

  controlRole(){
    this.servRole.getRolesByUserIdGET(JSON.parse(localStorage.getItem('loggedUser')!).user_id).subscribe({
      next:(r) => {if(r.length === 2){this.esDocente = true}}})
      }

  ///////////  CALIFICACIONES /////////////
  ///////////  CALIFICACIONES /////////////
    
  id:string | null = null

  toGrades(){
    
    const idToGrades = Number(this.routerActive.snapshot.paramMap.get('course_id'));

    this.router.navigate(['/dashboard/admin-grades', idToGrades]);
  }






















  
  ///////////  ASISTENCIA /////////////
  ///////////  ASISTENCIA /////////////
  // Faltantes. 
  // Boton que habilite las asistencias para que los alumnos puedan darlas ("Habilitar asistencias").
  // Boton que lleve a ver asistencias de los alumnos ("Consultar asistencias del curso").
  // Boton que lleve a ver asistencias del alumno ("Ver mis asistencias del curso").
 /* addAttendance(){
    this.servAttendance.attendancePOST({
        student_id: JSON.parse(localStorage.getItem('loggedUser')!).user_id,
        // ESTA HARDCODEADO. Falta traer en id del curso, que vendria por ruta
        course_id: 1
    }).subscribe({
      next:(r)=> {
      console.log(r)
      Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'La asistencia de registro con exito',
                });
      this.habilitacionDeAsistencia = false

      }
    })
  }

*/
















}/////
