import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../../models/enrollment.model';



@Injectable({
  providedIn: 'root'
})
export class MyEnrollmentsService {
  private apiUrl = 'http://localhost:3000/api/inscripciones'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para inscribir al usuario
  inscribirUsuario(student_id: number, course_id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, { student_id, course_id }, { headers });
  }



  // Método para obtener inscripciones por usuario (opcional)
  obtenerInscripcionesPorUsuario(student_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${student_id}`);
  }
}


  
