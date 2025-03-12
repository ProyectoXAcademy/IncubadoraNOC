import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {


  sidebarItems = [
    { label: 'Mi Perfil', path: 'profile', roles: ['Estudiante', 'Administrador', 'Docente'] },
    { label: 'Mis Cursos', path: 'mycourses', roles: ['Estudiante', 'Docente'] },
    { label: 'Mis Asistencias', path: 'attendance', roles: ['Estudiante'] },
    { label: 'Mis Notas', path: 'mygrades', roles: ['Estudiante'] },
    { label: 'Mis Inscripciones', path: 'myenrollments', roles: ['Estudiante', 'Administrador', 'Docente'] },
    { label: 'Crear Curso', path: 'create-course', roles: ['Administrador'] },
    { label: 'Crear Noticia', path: 'create-notice', roles: ['Administrador'] },
    { label: 'Asignar Docente', path: 'create-user-role', roles: ['Administrador'] }
  ];

  filteredSidebarItems: any[] = [];
  userRole: string = '';

  ngOnInit(): void {
    const storedUser = localStorage.getItem('loggedUser'); 

    
  
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); 
  
      
      if (parsedUser.Roles && parsedUser.Roles.length > 0) {
        this.userRole = parsedUser.Roles[0].name; 
      } else {
        this.userRole = 'user'; 
      }
    } else {
      this.userRole = 'user'; 
    }
  
    
  
    
    this.filteredSidebarItems = this.sidebarItems.filter(item =>
      item.roles.includes(this.userRole)
    );
  }

  
  
 
  @Output() closeSidebar = new EventEmitter<void>(); 

  onItemClick() {
    this.closeSidebar.emit(); 
  }
}
