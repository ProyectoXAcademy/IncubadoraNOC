import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  
  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos.'
      });
      return;
    }

    // Simulación de inicio de sesión exitoso con SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    }).then(() => {
      this.router.navigate(['']); 
    });
  }
}
