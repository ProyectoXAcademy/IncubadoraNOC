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
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import { Grade } from '../../models/grades.model';

@Component({
  selector: 'app-course-view',
  imports: [FormsModule, NgIf,RouterModule,NgFor],
  standalone :true,
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {

  constructor(private serv:CoursesService, 
    private servRole:CreateUserRoleService,
     private servAttendance:MyAttendanceService,
      private router:Router,
      private routerActive:ActivatedRoute,
      private servGrades:MyGradesService

    ){}
  course:Courses | null = null
  editarDescripcion:Boolean = false
  esDocente: boolean = false
  attendance:Attendance[]|null = null
  grades:Grade[]|null=null

  ngOnInit(){
    this.editarDescripcion
    this.esDocente
    this.attendance
    this.grades
    this.getInfoCourse()
    this.controlRole()
    this.getGradesAlumno()
    this.getAttendanceAlumno()

  }


  ///////////  DESCRIPCION /////////////
  ///////////  DESCRIPCION /////////////

  getInfoCourse(): void {
    const course_id = Number(this.routerActive.snapshot.paramMap.get('course_id')); 
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
  //id:string | null = null

  toGrades(){
    const idToGrades = Number(this.routerActive.snapshot.paramMap.get('course_id'));
    this.router.navigate(['/dashboard/admin-grades', idToGrades]);
  }

  getGradesAlumno(){
    const idToGrades = Number(this.routerActive.snapshot.paramMap.get('course_id'));
    const id_user = JSON.parse(localStorage.getItem('loggedUser')!).user_id
    this.servGrades.gradesByIdCourseANDIdStudent({
        course_id:idToGrades,
        student_id:id_user
    }).subscribe({
      next:(r)=> {
        this.grades = r
      }
    })
  }

  ///////////  ASISTENCIA /////////////
  ///////////  ASISTENCIA /////////////
  toAttendance(){
    const idToGrades = Number(this.routerActive.snapshot.paramMap.get('course_id'));
    this.router.navigate(['/dashboard/admin-attendance', idToGrades]);
  }

  getAttendanceAlumno(){
    const idToGrades = Number(this.routerActive.snapshot.paramMap.get('course_id'));
    const id_user = JSON.parse(localStorage.getItem('loggedUser')!).user_id
    this.servAttendance.attendancesByIdCourseANDIdStudent({
        course_id:idToGrades,
        student_id:id_user
    }).subscribe({
      next:(a)=> {
        this.attendance = a
        console.log(a)
      }
    })
  }







}/////
