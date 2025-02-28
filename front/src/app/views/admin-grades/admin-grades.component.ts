import { Component } from '@angular/core';
import { MyEnrollmentsComponent } from '../my-enrollments/my-enrollments.component';
import { Registration } from '../../models/registration.model';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/users/user.service';

@Component({

  selector: 'app-admin-grades',
  imports: [],
  templateUrl: './admin-grades.component.html',
  styleUrl: './admin-grades.component.css'
})
export class AdminGradesComponent {

    constructor(private servRegistration:MyEnrollmentsService,
      private servUser:UserService
    ){}
    id:number=1

    ngOnInit(){
      this.id=1
      this.getRegistrations(1)
    }

    getRegistrations(id:number){
      this.servRegistration.getUsersByIdCourse(id).subscribe({
        next:(r)=> {
          for(let rs of r){
            this.servUser.getUserById(rs.student_id).subscribe({
              next:(r) => {
                console.log("los usuarios son:")
                
                console.log(r)

              }
            })


          }
          //ahora tengo que traer los estudiantes
        }
      })



    }



}
