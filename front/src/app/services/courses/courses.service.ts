import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../../models/courses.model';
import { Content } from '../../models/content.model';
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
  endpoint_create_content:string = "http://localhost:3000/api/content/create"
  endpoint_get_contents:string = "http://localhost:3000/api/content/"





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
  // content
  createContentPOST(content:Content):Observable<Content>{
    return this.http.post<Content>(this.endpoint_create_courses,content)
}

getContentsGET(id_course:number):Observable<Content[]>{
  return this.http.get<Content[]>(this.endpoint_create_courses+id_course)
}

}///

