import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(this.loadDarkMode());
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.updateTheme(this.darkModeSubject.value);
  }

  toggleDarkMode() {
    const newMode = !this.darkModeSubject.value;
    this.darkModeSubject.next(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    this.updateTheme(newMode);
  }

  private updateTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  private loadDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }
}
