import { Component } from '@angular/core';
import { MyEnrollmentsComponent } from '../my-enrollments/my-enrollments.component';
import { Registration } from '../../models/registration.model';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/users/user.service';
import { LoggedUser } from '../../models/registeredUser.model';
import { Grade } from '../../models/grades.model';
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import {FormBuilder,Validator,FormGroup,FormControl,ReactiveFormsModule,Validators,} from "@angular/forms";
import { NgIf , NgFor} from "@angular/common";
import Swal from "sweetalert2";
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-admin-grades',
  imports: [NgFor,ReactiveFormsModule,RouterModule],
  templateUrl: './admin-grades.component.html',
  styleUrl: './admin-grades.component.css'
})
export class AdminGradesComponent {
  
  constructor(private servRegistration:MyEnrollmentsService,
    private servUser:UserService,
    private servGrade:MyGradesService,
    private formBuilder:FormBuilder,
    private routerActivate:ActivatedRoute
  ){}
    id:number=1
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
      
        }})}})}}})}///
    
    
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






}////////////////////////////
