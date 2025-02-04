import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  termsAccepted: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}
  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete todos los campos.'
      });
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.'
      });
      return;
    }
  
    if (!this.termsAccepted) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes aceptar los términos y condiciones.'
      });
      return;
    }
  
    Swal.fire({
      icon: 'success',
            title: 'Registro exitoso',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
    }).then(() => {
      this.router.navigate(['']); 
    });
  
    // Opcional: Reiniciar el formulario
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.termsAccepted = false;
  }
  
}
