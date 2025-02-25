import { Component } from '@angular/core';
import { Enrollment } from '../../models/enrollment.model';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';


@Component({
  selector: 'app-my-enrollments',
  imports: [],
  standalone:true,
  templateUrl: './my-enrollments.component.html',
  styleUrl: './my-enrollments.component.css'
})
export class MyEnrollmentsComponent {

  constructor(private serv:MyEnrollmentsService){}

  enrollments:Enrollment | null = null

 
 

}
