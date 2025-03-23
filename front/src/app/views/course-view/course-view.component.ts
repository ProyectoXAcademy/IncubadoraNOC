import { Component } from '@angular/core';
import { Courses } from '../../models/courses.model';
import { CoursesService } from '../../services/courses/courses.service';
import { Attendance } from '../../models/attendance.model';
import { MyAttendanceService} from '../../services/my-attendance/my-attendance.service';
import { Form, FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CreateUserRoleService } from '../../services/createUserRole/create-user-role.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import { Grade } from '../../models/grades.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Content } from '../../models/content.model';
import { Title } from '@angular/platform-browser';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { UserService } from '../../services/users/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-course-view',
  imports: [FormsModule, NgIf,RouterModule,NgFor,ReactiveFormsModule, CommonModule],
  standalone :true,
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {

  constructor(private serv:CoursesService, 
    private servEnrollments:MyEnrollmentsService,
    private servRole:CreateUserRoleService,
    private servUser:UserService,
     private servAttendance:MyAttendanceService,
      private router:Router,
      private routerActive:ActivatedRoute,
      private servGrades:MyGradesService,
      private servCourse:CoursesService,
      private formBuilder:FormBuilder

    ){}
  course:Courses | null = null
  editarDescripcion:Boolean = false
  agregarContenido:Boolean = false
  esDocente: boolean = false
  attendance:Attendance[]|null = null
  grades:Grade[]|null=null
  docente:User |null = null
  contents:Content[]|null=null


  formPOST:FormGroup | any


  ngOnInit(){
    this.editarDescripcion
    this.agregarContenido
    this.esDocente
    this.attendance
    this.grades
    this.contents
    this.getInfoCourse()
    this.controlRole()
    this.getGradesAlumno()
    this.getAttendanceAlumno()
    this.getContents()

    this.formPOST = this.formBuilder.group({
      title : new FormControl<Content|null>(null, Validators.required),
      type : new FormControl<Content|null>(null, Validators.required),
      link : new FormControl<Content|null>(null, Validators.required ),
      })//

  }


  ///////////  DESCRIPCION /////////////
  ///////////  DESCRIPCION /////////////

  getInfoCourse(): void {
    const course_id = Number(this.routerActive.snapshot.paramMap.get('course_id')); 
    if (!course_id) {
      //console.error('ID del curso no encontrado.');
      return;
    }
  
    this.serv.getCourseByIdGET(course_id).subscribe({
      next: (c) => {
        this.course = c;
        this.servUser.getUserById(this.course.teacher_id).subscribe({
          next:(r) => this.docente = r
        })
        //console.log('Curso cargado:', this.course);
      },
      error: (error) => {
        //console.error('Error al cargar el curso:', error);
      }
    });
  }

  editarDescripcionTrue(){this.editarDescripcion = true}

  descriptionCoursePUT(){
    this.serv.putCourseById(this.course!).subscribe({
      next:(r)=> {console.log(r)}
    })
    this.editarDescripcion = false
  }

  descriptionCancelar(){this.editarDescripcion = false ;this.getInfoCourse()}

  controlRole() {
    const idCourse = Number(this.routerActive.snapshot.paramMap.get('course_id'));
  
    // Obtiene el ID del usuario logueado
    const teacher_id = JSON.parse(localStorage.getItem('loggedUser')!).user_id;
  
    // Obtiene la info del curso actual
    this.serv.getCourseByIdGET(idCourse).subscribe({
      next: (c) => {
        this.course = c;
        // Compara si el usuario es el docente de este curso
        if (teacher_id == c.teacher_id){this.esDocente = true}
      }
    });
  }
  
  ///////////  CALIFICACIONES /////////////
  ///////////  CALIFICACIONES /////////////

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
      }
    })
  }

  ///////////  GET CONTENT /////////////
  ///////////  GET CONTENT ///////////// 


getContents(){
  const id_course = Number(this.routerActive.snapshot.paramMap.get('course_id'));
  this.servCourse.getContentsGET(id_course).subscribe({
    next:(r)=>{
      this.contents=r
    },
    //error:(e)=> {console.log("el error es:");console.log(e)}
  })

}
  ///////////  FORM CONTENT /////////////
  ///////////  FORM CONTENT /////////////  
habilitarFormContenido(){this.agregarContenido = true}
formCancelar(){this.agregarContenido = false}


get title_GET(){return this.formPOST.controls['title']}
get type_GET(){return this.formPOST.controls['type'];}
get link_GET(){return this.formPOST.controls['link'];}

createContentSUBMIT(){
  const id_course = Number(this.routerActive.snapshot.paramMap.get('course_id'));
  if(this.formPOST.valid){
    this.servCourse.createContentPOST({
        course_id:id_course,
        name:this.formPOST.value.title,
        type:this.formPOST.value.type,
        url: this.formPOST.value.link
    }).subscribe({
        error: (e) =>{
          Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: 'Error al crear el curso',
                    });
        },  
        complete: () => {
         Swal.fire({
                  icon: 'success',
                  title: 'Registro exitoso',
                  text: 'Nuevo curso creado',
                });
          this.formPOST.reset()
          this.getContents()

        }
    })
  }
  else{
    this.formPOST.markAllAsTouched();
  }

}



}/////
