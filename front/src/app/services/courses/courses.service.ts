import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Courses } from '../../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // Endpoints
  private endpoint_create_courses: string = "http://localhost:3000/api/course/create";
 // Endpoint base de cursos
 private endpoint_get_courses: string = "http://localhost:3000/api/course/"; 

  constructor(private http: HttpClient) { }

  // Método para crear un curso (POST)
  createCoursePOST(course: Courses): Observable<any> {
    return this.http.post(this.endpoint_create_courses, course);
  }

// Método para obtener los cursos del usuario logueado usando solo el token
getCourses(): Observable<Courses[]> {
  const token = localStorage.getItem('token'); // Obtener el token del usuario

  if (!token) {
    return throwError(() => new Error("No se encontró el token en localStorage"));
  }

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Enviar el token en los headers
  return this.http.get<Courses[]>(this.endpoint_get_courses, { headers });
}
} 

