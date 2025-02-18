import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 // agregar endpoint
 endpoint_create_courses:string = "http://localhost:3000/api/course/create"
 endpoint_get_courses: string =  "http://localhost:3000/api/course"


 constructor( private http:HttpClient) { }

 createCoursePOST(course:Courses):Observable<any>{
      return this.http.post(this.endpoint_create_courses,course)
 }

  // Método para obtener los cursos (GET)
  getCoursesGET(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.endpoint_get_courses);
  }
}

