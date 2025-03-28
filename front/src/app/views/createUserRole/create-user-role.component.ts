import { Component } from "@angular/core";
import { CreateUserRoleService } from "../../services/createUserRole/create-user-role.service";
import {FormBuilder,Validator,FormGroup,FormControl,ReactiveFormsModule,Validators,} from "@angular/forms";
import Swal from "sweetalert2";
import { NgIf , NgFor} from "@angular/common";
import { CoursesService } from "../../services/courses/courses.service";
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
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    
  ) {}

  formPOST: FormGroup | any;
  user: any|undefined;
  roles: any|null = null // hacer modelo en el front de 
  insripcionCurso:Boolean = false
  courses:any[] = []

  ngOnInit() {
    this.insripcionCurso

    this.formPOST = this.formBuilder.group({
      email: new FormControl<string|null>(null, [Validators.required,Validators.email])
    });

    this.loadCourses()

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
              // ordenamos el array por si el usuario tiene dos roles
                const rolesOrdenados = r
                rolesOrdenados.sort((a:any,b:any) => a.RoleRoleId - b.RoleRoleId)
                if(rolesOrdenados[0].RoleRoleId==2){
                  Swal.fire({
                    icon: "error",
                    title: "Este usuario ya es docente",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                  }); 
                }
              else{
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

   /////// FORM INSCRIBIR EN CURSO /////////
   /////// FORM INSCRIBIR EN CURSO /////////
  verCursos(){ this.insripcionCurso=true}
  cancelar(){ this.insripcionCurso=false}

  
  loadCourses(): void {
    this.coursesService.getCoursesGET().subscribe({
      next:(r)=>{
        console.log(r)
        this.courses = r;    
      }
  });
  }//

  addTeacherToCourse(id_course:number){
    this.coursesService.putTeacherIdCourseById({
      course_id:id_course,
      teacher_id:this.user.user_id
    }).subscribe({ 
      
      next:(r)=> {
        console.log(r)
        Swal.fire({
          icon: "success",
          title: "Docente asignado al curso",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,}); 
      }
    
    })

  }

      
    }//

  












