import { Component } from '@angular/core';
import { Grade } from '../../models/grades.model';
import { MyGradesService } from '../../services/my-grades/my-grades.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-my-grades',
  imports: [NgFor],
  standalone:true,
  templateUrl: './my-grades.component.html',
  styleUrl: './my-grades.component.css'
})
export class MyGradesComponent {

  constructor(private serv:MyGradesService){}

  grades:Grade | null = null

  myGrades: Grade[]=
  [
    {
    note_id: 1,
    value: 6,
    type: "intro a los algoritmos",
    student_id: 2,
    course_id:1
    },

    {
      note_id: 1,
      value: 8,
      type: "intro a los algoritmos 2",
      student_id: 2,
      course_id:2
      },

      {
        note_id: 1,
        value: 10,
        type: "analisis matematico 2",
        student_id: 2,
        course_id:3
        },

  ]

  ngOnInit(){
    this,this.getGrades()
  }

  getGrades(){
    this.serv.gradesGET().subscribe(
      d => this.grades = d
    )
  }

}
