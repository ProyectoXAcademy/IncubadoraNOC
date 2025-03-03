import { Component } from '@angular/core';
import { MyEnrollmentsService} from '../../services/my-enrollments/my-enrollments.service';
import {FormBuilder,Validator,FormGroup,FormControl,ReactiveFormsModule,Validators,} from "@angular/forms";
import { NgIf , NgFor} from "@angular/common";
import { UserService } from '../../services/users/user.service';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { MyAttendanceService } from '../../services/my-attendance/my-attendance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-attendance',
  imports: [NgFor,ReactiveFormsModule,RouterModule],
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.css'
})
export class AdminAttendanceComponent {
  constructor(private servRegistration:MyEnrollmentsService,
     private servUser:UserService,
     private servAttendance:MyAttendanceService,
     private formBuilder:FormBuilder,
     private routerActivate:ActivatedRoute
   ){}

  students:any=[]
  student:any

  formPOST:FormGroup | any
  idToAttendance:number|null = null

  ngOnInit(){
    this.idToAttendance = Number(this.routerActivate.snapshot.paramMap.get('course_id'))
    this.getRegistrations(this.idToAttendance)
    this.formPOST = this.formBuilder.group({});


  }//

  getRegistrations(id:number){
    this.servRegistration.getInscriptionsByIdCourse(id).subscribe({
      next:(r)=> {
        for(let rs of r){
          this.servUser.getUserById(rs.student_id).subscribe({
            next:(alumno) => {
              this.servAttendance.attendancesByIdCourseANDIdStudent(
                {
                  course_id:this.idToAttendance,
                  student_id:alumno.user_id
                }).subscribe({
                  next:(asistencias)=>{
                    this.student= {alumno,asistencias}
                    this.students!.push(this.student)
                    this.students.sort((a:any,b:any) => a.alumno.lastName.localeCompare(b.alumno.lastName))
                    console.log(this.students)
                  }})}})}
    }})}///

    addAssistance(id_student:number){
       const id_course = Number(this.routerActivate.snapshot.paramMap.get('course_id'));      
            if(this.formPOST.value.value !==null){
              this.servAttendance.attendanceADD({
                student_id: id_student,
                course_id:id_course,
              }).subscribe({
        
                next:(r)=> {
                  this.formPOST.reset()
                  Swal.fire({
                    icon: 'success',
                    title: 'La asistencia se registro exitosamente',
                    text: 'Por favor refresque la página para ver la asistencia cargada',
                    });
                }
        
              }
            )
            }
    }
}////////////////////
