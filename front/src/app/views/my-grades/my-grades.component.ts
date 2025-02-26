import { Component } from '@angular/core';
import { Grade } from '../../models/grades.model';
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import { NgFor } from '@angular/common';
import { of } from 'rxjs';
@Component({
  selector: 'app-my-grades',
  imports: [NgFor],
  standalone:true,
  templateUrl: './my-grades.component.html',
  styleUrl: './my-grades.component.css'
})
export class MyGradesComponent {

  constructor(private serv:MyGradesService){}

  grades:any|null = null

  ngOnInit(){
  this.gets()
  }

  gets(){
    this.serv.gradesGET(JSON.parse(localStorage.getItem('loggedUser')!).user_id).subscribe( G => {
      this.grades = G
      for (let gs of G) {this.serv.courseIdGET(gs.course_id).subscribe(c =>{
          gs.name = c.name;
          this.grades.sort((a:any,b:any) => a.name.localeCompare(b.name))
          }
       )}
      } 
    )
  }



}//
