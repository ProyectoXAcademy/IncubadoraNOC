import { Component } from "@angular/core";
import { CreateUserRoleService } from "../../services/createUserRole/create-user-role.service";
import {FormBuilder,Validator,FormGroup,FormControl,ReactiveFormsModule,Validators,} from "@angular/forms";
import Swal from "sweetalert2";
import { NgIf , NgFor} from "@angular/common";
import { User } from "../../models/user.model";

@Component({
  selector: "app-create-user-role",
  imports: [ReactiveFormsModule, NgIf, NgFor],
  standalone: true,
  templateUrl: "./create-user-role.component.html",
  styleUrl: "./create-user-role.component.css",
})
export class CreateUserRoleComponent {
  constructor(
    private serv: CreateUserRoleService,
    private formBuilder: FormBuilder
  ) {}

  formPOST: FormGroup | any;
  user: any|undefined;
  roles: any|null = null // hacer modelo en el front de 

  ngOnInit() {
    this.formPOST = this.formBuilder.group({
      email: new FormControl<string|null>(null, [Validators.required,Validators.email])
    });
  } //

  // GETTERS
  get email_GET() {return this.formPOST.controls['email']}

  // METODO POST DEL FORM
  getRolesSUBMIT() {
    if (this.formPOST.valid) {
      this.serv.getUserBYMailGET({email: this.formPOST.value.email}).subscribe({
          next: (r) => {
            
            this.serv.getRolesByUserIdGET(r.user_id).subscribe(
              {
                next:(r)=>{
                this.roles = r}
              }
            )
            this.user = r;
            Swal.fire({
              icon: "success",
              title: "Usuario encontrado",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
          },
          error: (e) => {
            Swal.fire({
              icon: "error",
              title: "No se encontro el mail",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
          },
        });
    } else {this.formPOST.markAllAsTouched();}
  } //////////////
  

  addRole(user_id:number){
    this.serv.getUserBYMailGET({email: this.formPOST.value.email}).subscribe({
      next: (r) => {
        this.serv.getRolesByUserIdGET(r.user_id).subscribe(
          {
            next:(r)=>{
              if(r.length == 2){
                Swal.fire({
                  icon: "error",
                  title: "Este usuario ya es docente",
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true,
                }); 
              }else{
                this.serv.addTeacherRole({
                  UserUserId: user_id,
                  RoleRoleId: 2
                }).subscribe({
                  next:(r) => {
                    Swal.fire({
                      icon: "success",
                      title: "Rol docente asignado",
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,}); 

                  }
                })}}})}})}//////
   
        
      
    }//

  












