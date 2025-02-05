import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from '../../core/publications/publications.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, PublicationsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  currentIndex: number = 0;
  totalSlides: number = 3;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  ngOnInit() {
    // Mueve las imágenes cada 3 segundos (3000ms)
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

}
