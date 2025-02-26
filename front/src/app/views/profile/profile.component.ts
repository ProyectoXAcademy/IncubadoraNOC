import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedUser } from '../../models/registeredUser.model';
import { UserService } from '../../services/users/user.service';
import { FormsModule } from '@angular/forms';



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
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  // Cambia a modo edición
  enableEdit(): void {
    this.isEditing = true;
    this.editedUser = { ...this.user! }; // Clona el usuario para editar
  }

  //Guarda los cambios (envía petición put al servidor)
  saveChanges(): void {
    if (this.editedUser) {
      this.userService.editUser(this.editedUser).subscribe({
        next: (response) => {
          console.log(response)
          this.user = response;
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


