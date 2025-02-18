import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Courses } from '../../models/courses.model';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-create-course',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {

  constructor(private serv:CoursesService, private formBuilder:FormBuilder){}

  formPOST:FormGroup | any
  teacher_id:number|null = null
  

  ngOnInit(){
    this.formPOST = this.formBuilder.group({
      name : new FormControl(null, Validators.required),
      description : new FormControl<Courses|null>(null, Validators.required),
      category : new FormControl<Courses|null>(null, Validators.required),
      })//
    }//
    
  // GETTERS DE LOS CAMPOS DEL FORMULARIO
  
  //get course_id_GET(){return this.formPOST.controls['course_id']}
  get name_GET(){return this.formPOST.controls['name']}
  get description_GET(){return this.formPOST.controls['description'];}
  get category_GET(){return this.formPOST.controls['category'];}


  // metodo post del formulario, antes valida
  createCourseSUBMIT(){
    this.teacher_id = JSON.parse(localStorage.getItem('loggedUser')!).user_id
    if(this.formPOST.valid){
      this.serv.createCoursePOST({
        name: this.formPOST.value.name,
        description:this.formPOST.value.description,
        category: this.formPOST.value.category,
        teacher_id: this.teacher_id!,
      }).subscribe({
        next: (n) =>console.log(n),
        error: (e) =>console.log(e),
        complete: () => {
          alert("Nuevo curso creado")
          this.formPOST.reset()
        }
        })
    }else{
      this.formPOST.markAllAsTouched();
    }
  }//

}///////////
