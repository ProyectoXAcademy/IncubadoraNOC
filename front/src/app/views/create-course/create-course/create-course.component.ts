import { Component } from '@angular/core';
import { CoursesService } from '../../../services/courses/courses.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Courses } from '../../../models/courses.model';
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
  

  ngOnInit(){
    this.formPOST = this.formBuilder.group({
      //course_id : new FormControl(null, Validators.required),
      name : new FormControl(null, Validators.required),
      description : new FormControl<Courses|null>(null, Validators.required),
      category : new FormControl<Courses|null>(null, Validators.required),
      inscription_requeriments : new FormControl<Courses|null>(null, Validators.required),
      approval_conditions : new FormControl<Courses|null>(null, Validators.required),
      //teacher_id : new FormControl<Courses|null>(null, Validators.required),
      active : new FormControl<Courses|null>(null, Validators.required)
      })//
    }//
    
  // GETTERS DE LOS CAMPOS DEL FORMULARIO
  
  //get course_id_GET(){return this.formPOST.controls['course_id']}
  get name_GET(){return this.formPOST.controls['name']}
  get description_GET(){return this.formPOST.controls['description'];}
  get category_GET(){return this.formPOST.controls['category'];}
  get inscription_requeriments_GET(){return this.formPOST.controls['inscription_requeriments'];}
  get approval_conditions_GET(){return this.formPOST.controls['approval_conditions'];}
  get teacher_id_GET(){return this.formPOST.controls['teacher_id'];}
  get active_GET(){return this.formPOST.controls['active'];}


  // metodo post del formulario, antes valida
  createCourseSUBMIT(){
    if(this.formPOST.valid){
      this.serv.createCoursePOST({
        course_id:0,
        name: this.formPOST.value.name,
        description:this.formPOST.value.description,
        category: this.formPOST.value.category,
        inscription_requeriments: this.formPOST.value.inscription_requeriments,
        approval_conditions:this.formPOST.value.approval_conditions,
        teacher_id: 0,
        active:this.formPOST.value.active
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
