import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class MyEnrollmentsService {
  private apiUrl = 'http://localhost:3000/api/registrations'; // ✅ Corrección de URL base
  private endpointRegistrationByCourseId = 'http://localhost:3000/api/registrations/course/'; // ✅ URL corregida
  private apiGetCourses = 'http://localhost:3000/api/registration'
  private endpointTeacherRegistration= " http://localhost:3000/api/registration/course/ "

  private registrations: Registration[] | null = null

  constructor(private http: HttpClient) {}

  // ✅ Inscribir usuario o asignar docente a un curso
  inscribirUsuario(student_id: number, course_id: number, is_teacher: boolean = false): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/create`, { student_id, course_id, is_teacher }, { headers });
  }

  // ✅ Obtener inscripciones por usuario
  getUserRegistrations(user_id: number): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.apiUrl}/user/${user_id}`);
  }

  // ✅ Obtener inscripciones por curso
  getInscriptionsByIdCourse(course_id: number): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.endpointRegistrationByCourseId}${course_id}`);
  }

  // este metodo trae las inscripciones del docente
  getInscriptionsHowTeacher(teacher_id:number):Observable<Registration[]>{
    return this.http.get<Registration[]>(this.endpointTeacherRegistration+teacher_id)
  }

}
