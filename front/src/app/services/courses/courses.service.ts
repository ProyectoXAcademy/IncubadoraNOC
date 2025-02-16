import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 // consultar si el endpoint es el correcto
 endpoint_create_courses:string = "http://localhost:3000/courses/create"


 constructor( private http:HttpClient) { }

 createCoursePOST(course:Courses):Observable<any>{
      return this.http.post(this.endpoint_create_courses,course)
 }


}

