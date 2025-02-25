import { Component, OnInit } from '@angular/core';
import { Registration} from '../../models/registration.model';
import { MyEnrollmentsService } from '../../services/my-enrollments/my-enrollments.service';


@Component({
  selector: 'app-my-enrollments',
  imports: [],
  standalone:true,
  templateUrl: './my-enrollments.component.html',
  styleUrl: './my-enrollments.component.css'
})
export class MyEnrollmentsComponent implements OnInit {

  private registrations: Registration[] | null = null

  constructor(private serv: MyEnrollmentsService){}

  ngOnInit(): void {
    this.registrations = this.serv.getRegistrations()
    console.log(this.registrations)
    
  }
 

}
