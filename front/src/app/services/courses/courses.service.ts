import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../../models/courses.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 // agregar endpoint
 endpoint_create_courses:string = "http://localhost:3000/api/course/create"
 endpoint_get_courses: string =  "http://localhost:3000/api/course"
 endpoint_get_course_by_id: string =  "http://localhost:3000/api/course/"
 endpoint_put_course_by_id: string =  "http://localhost:3000/api/course/put"
private apiUrl = 'http://localhost:3000/api/course'



 constructor( private http:HttpClient) { }

 createCoursePOST(course:Courses):Observable<any>{
      return this.http.post(this.endpoint_create_courses,course)
 }

  // Método para obtener los cursos (GET)
  getCoursesGET(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.endpoint_get_courses);
  }

  // Método para obtener los cursos (GET)
  getCourseByIdGET(id:number): Observable<Courses> {
    return this.http.get<Courses>(this.endpoint_get_course_by_id+id);
  }

  getCourseById(id: number): Observable<Courses>{
    return this.http.get<Courses>(`${this.apiUrl}/${id}`)
  }


  putCourseById(body:Courses):Observable<Courses>{
    return this.http.put<Courses>(this.endpoint_put_course_by_id,body)
  }

  getCoursesByTeacher(teacher_id: number): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.apiUrl}/teacher/${teacher_id}`);
  }


}///

