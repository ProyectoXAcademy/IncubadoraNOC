import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, take } from 'rxjs';
import { Registration } from '../../models/registration.model';



@Injectable({
  providedIn: 'root'
})
export class MyEnrollmentsService {
  private apiUrl = 'http://localhost:3000/api/registration/create'; // URL del backend
  private apiGetCourses = 'http://localhost:3000/api/registration'
  private endpointRegistrationByCourseId= " http://localhost:3000/api/registration/course/ "
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

 

  getUserRegistrations(user_id: number): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.apiGetCourses}/user/${user_id}`);
  }

  getInscriptionsByIdCourse(course_id:number): Observable<Registration[]>{
    return this.http.get<Registration[]>(this.endpointRegistrationByCourseId+course_id)
  }

}