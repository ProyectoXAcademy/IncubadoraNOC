import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private API_URL = 'http://localhost:3000/api/course'; // URL del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los cursos desde el backend
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
}
