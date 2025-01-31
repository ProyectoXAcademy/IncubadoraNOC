import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service'; // Importa el servicio

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    // Suscribirse al estado del Dark Mode
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
