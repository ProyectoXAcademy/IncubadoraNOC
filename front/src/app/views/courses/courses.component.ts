import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {



  courses = [
    {
      id: 1,
      title: 'Curso de Angular',
      image: 'ruta-de-la-imagen-angular.jpg',
      shortDescription: 'Aprende Angular desde cero.',
      longDescription:
        'Este curso te enseñará los fundamentos de Angular y cómo construir aplicaciones web robustas.',
      startDate: '10 de marzo de 2025',
      duration: '8 semanas',
      price: 200,
    },
    // Otros cursos...
  ];

  selectedCourse: any = null;
  eRef: any;

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  deselectCourse() {
    this.selectedCourse = null;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    setTimeout(() => {
      if (this.selectedCourse && !this.eRef.nativeElement.contains(event.target)) {
        this.deselectCourse();
      }
    }, 0);
  }
  
  
  enroll(courseId: number) {
    
    console.log(`Inscribirse en el curso con ID: ${courseId}`);
  }
}
