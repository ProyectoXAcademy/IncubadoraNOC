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
  isEditing: boolean = false; // Controla el modo edición
  editedUser: LoggedUser | null = null; // Para editar sin modificar el original

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }
  


  loadUser(): void {
    // Suponiendo que tienes el ID del usuario autenticado en algún lugar (ej. localStorage)
    const storedUser = localStorage.getItem('loggedUser');
    if (!storedUser) {
      console.error('No hay usuario autenticado.');
      return;
    }
  
    const parsedUser = JSON.parse(storedUser);
    const userId = Number(parsedUser.user_id); // Asegurar que el ID sea un número
  
    console.log('Obteniendo usuario desde el backend, ID:', userId);
  
    // Llamar al servicio para obtener el usuario actualizado desde el backend
    this.userService.getUserById(userId).subscribe({
      next: (response) => {
        console.log('Usuario actualizado desde el backend:', response);
        this.user = response;
  
        // Opcional: Guardar en localStorage la versión más reciente
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
      this.userService.editUser (this.editedUser).subscribe({
        next: (response) => {
          console.log('Usuario actualizado desde backend:', response);
  
          // Actualizar los datos en el componente
          this.user = response;
  
          // Guardar en localStorage la versión más reciente
          localStorage.setItem('loggedUser', JSON.stringify(response));
  
          this.isEditing = false;
          alert('Perfil actualizado exitosamente.');
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
          alert('Error al actualizar el perfil.');
        }
      });
    }
  }
  
  

  // Cancela la edición
  cancel(): void {
    this.isEditing = false;
    this.editedUser = null;
  }
}




