import { Component } from '@angular/core';
import { Courses } from '../../models/courses.model';
import { CoursesService } from '../../services/courses/courses.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CreateUserRoleService } from '../../services/createUserRole/create-user-role.service';


@Component({
  selector: 'app-course-view',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {
  constructor(private serv:CoursesService, private servRole:CreateUserRoleService){}

  course:Courses | null = null
  editarDescripcion:Boolean = false
  esDocente: boolean = false

  ngOnInit(){
    this.editarDescripcion
    this.esDocente
    this.getInfoCourse()
    this.controlRole()
  }


  // DESCRIPCION ////////////////////////////////
  getInfoCourse(){
    // pasar el id del curso por ruta
    this.serv.getCourseByIdGET(1).subscribe({
      next: (c) => { this.course = c}
    }
    )
  }//

  editarDescripcionTrue(){this.editarDescripcion = true}

  descriptionCoursePUT(){
    this.serv.putCourseById(this.course!).subscribe({
      next:(r)=> {
        console.log(r)   
        console.log("se edito")
      }

    })
    this.editarDescripcion = false

  }

  descriptionCancelar(){this.editarDescripcion = false ;this.getInfoCourse()}

  controlRole(){
    this.servRole.getRolesByUserIdGET(JSON.parse(localStorage.getItem('loggedUser')!).user_id).subscribe({
      next:(r) => {if(r.length === 2){this.esDocente = true}}})
      }
  //////////////////////////////////////




}/////
