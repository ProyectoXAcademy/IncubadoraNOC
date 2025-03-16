import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Auth } from '../../models/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { LoggedUser } from '../../models/registeredUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/login'; 
  private authenticatedSource = new BehaviorSubject<boolean>(this.isAuthenticated()); // Establece el estado inicial del BehaviorSubject
  authenticated$ = this.authenticatedSource.asObservable();

  private userSubject = new BehaviorSubject<LoggedUser | null>(this.getUserFromLocalStorage());
  user$ = this.userSubject.asObservable(); // Observable para suscribirse en otros componentes

  private userRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole') || 'user');
  userRole$ = this.userRoleSubject.asObservable();

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
    return this.http.post<{ token: string, findUser: LoggedUser }>(this.apiUrl, userData).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('loggedUser', JSON.stringify(response.findUser));
          localStorage.setItem('token', response.token);
  
          if (response.findUser.Roles && response.findUser.Roles.length > 0) {
            const userRole = response.findUser.Roles[0].name;
            localStorage.setItem('userRole', userRole);
            this.userRoleSubject.next(userRole); // ✅ Actualizar el rol en el servicio
          }
  
          this.authenticatedSource.next(true);
          this.userSubject.next(response.findUser);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role'); // Asegurar que eliminamos el rol del usuario
  
    this.authenticatedSource.next(false);
    this.userSubject.next(null);
    this.userRoleSubject.next(null); // Emitir el cambio para actualizar la vista
  }
  

  isAuthenticated(): boolean {
    //if (isPlatformBrowser(this.platformId)) {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log('Token en localStorage:', token); // Verifica si el token está guardado correctamente
      //return !!token; // Devuelve true si hay un token
      return true;
    }
    return false; // No estamos en el navegador
  }

  getLoggedUser(): Observable<LoggedUser> {
    const token = localStorage.getItem('token'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<LoggedUser>(this.apiUrl, { headers });
  }


  private getUserFromLocalStorage(): LoggedUser | null {
    const storedUser = localStorage.getItem('loggedUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  updateUser(user: LoggedUser | null): void {
    if (!user) {
      console.warn('Intento de actualizar usuario con valor nulo.');
      return;
    }
  
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.userSubject.next(user);
  
    
    if (user.Roles && user.Roles.length > 0) {
      const userRole = user.Roles[0].name;
      localStorage.setItem('userRole', userRole);
      this.userRoleSubject.next(userRole);
    } else {
      console.warn('El usuario actualizado no tiene roles.');
    }
  }
  
}
