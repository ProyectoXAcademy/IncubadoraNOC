import { Component } from '@angular/core';
import { Attendance } from '../../models/attendance.model';
import { MyAttendanceService } from '../../services/my-attendance/my-attendance.service';

@Component({
  selector: 'app-my-attendance',
  imports: [],
  standalone:true,
  templateUrl: './my-attendance.component.html',
  styleUrl: './my-attendance.component.css'
})
export class MyAttendanceComponent {
  constructor(private serv:MyAttendanceService){}

  attendances:Attendance|null = null

  ngOnInit(){this.getAttendances()}
  
  getAttendances(){
    this.serv.attendancesGET().subscribe(
      d => this.attendances = d
    )
  }

}
