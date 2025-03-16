import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { NoticeServiceTsService } from '../../services/notice/notice-service.ts.service';
import { Publication } from '../../models/publication.model';

@Component({
  selector: 'app-create-notice',
  imports: [ReactiveFormsModule,NgIf],
  standalone: true,
  templateUrl: './create-notice.component.html',
  styleUrl: './create-notice.component.css'
})
export class CreateNoticeComponent {
  constructor(private serv:NoticeServiceTsService, private formBuilder:FormBuilder){}
  formPOST:FormGroup | any
  teacher_id:number|null = null

  ngOnInit(){
    this.formPOST = this.formBuilder.group({
      title : new FormControl<Publication|null>(null, Validators.required),
      description : new FormControl<Publication|null>(null, Validators.required),
      type : new FormControl<Publication|null>(null,Validators.required),
      issue_date : new FormControl<Publication|null>(null,Validators.required),

      })
  
    }//

// GETTERS DE LOS CAMPOS DEL FORMULARIO
  
get title_GET(){return this.formPOST.controls['title']}
get description_GET(){return this.formPOST.controls['description'];}
get type_GET(){return this.formPOST.controls['type'];}
get issue_date_GET(){return this.formPOST.controls['issue_date'];}


createNoticeSUBMIT(){
  if(this.formPOST.valid){
    this.serv.createNoticePOST({
      title:this.formPOST.value.title,
      description:this.formPOST.value.description,
      type:this.formPOST.value.type,
      issue_date:this.formPOST.value.issue_date

    }).subscribe({
            error: (e) =>{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al crear el curso',
              });    
            },
            complete: () => {
             Swal.fire({
                      icon: 'success',
                      title: 'Registro exitoso',
                      text: 'Nuevo curso creado',
                    });
              this.formPOST.reset()
            }
            })
  }else{
    this.formPOST.markAllAsTouched();
  }

}//



}/////
