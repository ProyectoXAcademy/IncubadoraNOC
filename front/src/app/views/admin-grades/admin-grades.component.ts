import { Component } from '@angular/core';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { UserService } from '../../services/users/user.service';
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import {FormBuilder,Validator,FormGroup,FormControl,ReactiveFormsModule,Validators,} from "@angular/forms";
import { NgIf , NgFor} from "@angular/common";
import Swal from "sweetalert2";
import { RouterModule,ActivatedRoute, RouterLinkActive } from '@angular/router';
import {  Router } from '@angular/router';


@Component({

  selector: 'app-admin-grades',
  imports: [NgFor,ReactiveFormsModule,RouterModule,],
  standalone: true,
  templateUrl: './admin-grades.component.html',
  styleUrl: './admin-grades.component.css'
})
export class AdminGradesComponent {
  
  constructor(private servRegistration:MyEnrollmentsService,
    private servUser:UserService,
    private servGrade:MyGradesService,
    private formBuilder:FormBuilder,
    private routerActivate:ActivatedRoute,
    private router: Router
  ){}
    students:any = []
    student:any


    formPOST :FormGroup | any;
    idToGrade:number|null = null



    ngOnInit(){
      this.idToGrade = Number(this.routerActivate.snapshot.paramMap.get('course_id'));
      this.getRegistrations(this.idToGrade)
      this.formPOST = this.formBuilder.group({
        value: new FormControl<number|null>(null, Validators.required)
      });
    }



    getRegistrations(id:number){
      this.servRegistration.getInscriptionsByIdCourse(id).subscribe({
        next:(r)=> {
          for(let rs of r){
            this.servUser.getUserById(rs.student_id).subscribe({
              next:(alumno) => {
                this.servGrade.gradesByIdCourseANDIdStudent(
                  {
                    course_id:this.idToGrade,
                    student_id:alumno.user_id
                  }).subscribe({
                    next:(notas)=>{
                      this.student= {alumno,notas}
                      this.students!.push(this.student)
                      this.students.sort((a:any,b:any) => a.alumno.lastName.localeCompare(b.alumno.lastName))
                    }})}})}
      }})}///
    
    
    addGrade(id_student:number){
      const id_course = Number(this.routerActivate.snapshot.paramMap.get('course_id'));      
      if(this.formPOST.value.value !==null){
        this.servGrade.gradesADD({
          student_id: id_student,
          course_id:id_course,
          value:this.formPOST.value.value,
          type:"nota"
        }).subscribe({
  
          next:(r)=> {

            this.formPOST.reset()
            Swal.fire({
              icon: 'success',
              title: 'La nota se registro exitosamente',
              text: 'Por favor refresque la página para ver la nota cargada',
              });
          }
  
        }
      )
      }else{
        Swal.fire({
              icon: 'error',
              title: 'Error al registrar nota',
              text: 'Porfavor ingrese un valor',
              });
      this.formPOST.reset()
      }

    }




    volverAlCurso() {
      const course_id = Number(this.routerActivate.snapshot.paramMap.get('course_id'));
      this.router.navigate(['/dashboard/view-course', course_id]);
    }

}////////////////////////////
