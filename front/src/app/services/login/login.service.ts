import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Auth } from '../../models/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/login'; 
  private authenticatedSource = new BehaviorSubject<boolean>(this.isAuthenticated()); // Establece el estado inicial del BehaviorSubject
  authenticated$ = this.authenticatedSource.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Inyecta PLATFORM_ID
  ) {}

  private getHttpOptions() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    // Verifica que 'window' esté definido (solo en el navegador)
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token') || ''; // Recupera el token de localStorage
      httpHeaders = httpHeaders.set('Authorization', `Bearer ${token}`);
    }

    return { headers: httpHeaders };
  }

  loginUser(userData: Auth): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl, userData).pipe(
      tap(response => {
        console.log('Token recibido:', response.token); // Verifica el token recibido
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Guarda el token en localStorage
          this.authenticatedSource.next(true); // Emite un estado de autenticación exitoso
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token'); // Elimina el token de localStorage
    this.authenticatedSource.next(false); // Emite un estado de no autenticación
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      console.log('Token en localStorage:', token); // Verifica si el token está guardado correctamente
      return !!token; // Devuelve true si hay un token
    }
    return false; // No estamos en el navegador
  }
}
