import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedUser } from '../../models/registeredUser.model';
import { UserService } from '../../services/users/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: LoggedUser | null = null;
  isEditing: boolean = false; 
  editedUser: LoggedUser | null = null; 
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  router: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }
  


  loadUser(): void {
    const storedUser = localStorage.getItem('loggedUser');
    if (!storedUser) {
      console.error('No hay usuario autenticado.');
      return;
    }
  
    const parsedUser = JSON.parse(storedUser);
    const userId = Number(parsedUser.user_id); 
  
    console.log('Obteniendo usuario desde el backend, ID:', userId);
  
    
    this.userService.getUserById(userId).subscribe({
      next: (response) => {
        console.log('Usuario actualizado desde el backend:', response);
        this.user = response;
  
       
        if (response.Roles && response.Roles.length > 0) {
          const userRole = response.Roles[0].name; 
          localStorage.setItem('role', userRole);
        }
  
        
        localStorage.setItem('loggedUser', JSON.stringify(this.user));
      },
      error: (err) => {
        console.error('Error al obtener usuario desde backend', err);
      }
    });
  }
  

  // Cambia a modo edición
  enableEdit(): void {
    this.isEditing = true;
    this.editedUser = { ...this.user! }; // Clona el usuario para editar
    
  }

  // Guarda los cambios
  saveChanges(): void {
    if (this.editedUser) {
      this.userService.editUser(this.editedUser).subscribe({
        next: (response) => {
          console.log('Usuario actualizado desde backend:', response);
  
          // Actualizar los datos en el componente
          this.user = response;
  
          // Guardar en localStorage la versión más reciente
          localStorage.setItem('loggedUser', JSON.stringify(response));
  
          this.isEditing = false;
  
          // Mostrar la notificación de éxito con SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Perfil actualizado',
            text: 'Los cambios se han guardado correctamente.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
          }).then(() => {
            // Redirigir al usuario a la página de perfil o donde corresponda
            window.location.reload();  
          });
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
  
          // Mostrar la notificación de error con SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar',
            text: 'Hubo un error al intentar actualizar el perfil.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        }
      });
    }
  }
  
  
  

  // Cancela la edición
  cancel(): void {
    this.isEditing = false;
    this.editedUser = null;
  }

  changePassword(): void {
    const storedUser = localStorage.getItem('loggedUser');
    if (!storedUser) {
      Swal.fire('Error', 'No se encontró el usuario.', 'error');
      return;
    }

    const user = JSON.parse(storedUser);

    if (this.newPassword !== this.confirmPassword) {
      Swal.fire('Error', 'Las contraseñas no coinciden.', 'error');
      return;
    }

    this.userService.changePassword(user.user_id, this.oldPassword, this.newPassword).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Contraseña actualizada correctamente.', 'success');
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
      },
      error: (err) => {
        Swal.fire('Error', err.error.message || 'Hubo un problema al cambiar la contraseña.', 'error');
      }
    });
  }
}




