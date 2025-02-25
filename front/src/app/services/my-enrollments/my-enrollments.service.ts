import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, take } from 'rxjs';
import { Registration } from '../../models/registration.model';



@Injectable({
  providedIn: 'root'
})
export class MyEnrollmentsService {
  private apiUrl = 'http://localhost:3000/api/registration/create'; // URL del backend

  private registrations: Registration[] | null = null

  constructor(private http: HttpClient) {}

  // Método para inscribir al usuario
  inscribirUsuario(student_id: number, course_id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, { student_id, course_id }, { headers});
  }


  // Método para obtener inscripciones por usuario (opcional)
  obtenerInscripcionesPorUsuario(student_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${student_id}`);
  }

  getRegistrations() {
    this.getUserRegistrationsFromLS()
    return this.registrations
  }

  async getUserRegistrationsFromLS() {
    const loggedUser = localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      this.http.get<Registration[]>(`http://localhost:3000/api/registration/user/${user.user_id}`, {}).subscribe( (data) => {
        this.registrations = data
      })
    }
    console.log(this.registrations)
  }

}