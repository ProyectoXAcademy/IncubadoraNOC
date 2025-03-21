import { Component, EventEmitter, Output, DoCheck } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements DoCheck {

  sidebarItems = [
    { label: 'Mi Perfil', path: 'profile', roles: ['Estudiante', 'Administrador', 'Docente'] },
    { label: 'Mis Cursos Dictados', path: 'mycourses', roles: ['Docente','Administrador'] },
    { label: 'Mis Inscripciones', path: 'myenrollments', roles: ['Estudiante', 'Administrador', 'Docente'] },
    { label: 'Mis Notas', path: 'mygrades', roles: ['Estudiante'] },
    //{ label: 'Mis Asistencias', path: 'attendance', roles: ['Estudiante'] },
    { label: 'Crear Curso', path: 'create-course', roles: ['Administrador'] },
    { label: 'Crear Noticia', path: 'create-notice', roles: ['Administrador'] },
    { label: 'Asignar Docente', path: 'create-user-role', roles: ['Administrador'] }
  ];

  filteredSidebarItems: any[] = [];
  userRole: string = '';

  ngDoCheck(): void {
    const storedUser = localStorage.getItem('loggedUser'); 

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); 
      const newRole = parsedUser.Roles?.[0]?.name || 'user';

      if (this.userRole !== newRole) {
        this.userRole = newRole;
        this.updateSidebarItems();
      }
    }
  }

  updateSidebarItems() {
    this.filteredSidebarItems = this.sidebarItems.filter(item =>
      item.roles.includes(this.userRole)
    );
  }

  @Output() closeSidebar = new EventEmitter<void>(); 

  onItemClick() {
    this.closeSidebar.emit(); 
  }
}
