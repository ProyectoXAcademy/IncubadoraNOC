import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../../models/grades.model';
import { Courses } from '../../models/courses.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyGradesService {

  constructor(private http:HttpClient) { }
  
  endpointGradeByUserGET = "http://localhost:3000/api/note/user/"
  endpointCourseIdGET = "http://localhost:3000/api/course/"
  endpointGradesByCourseGET = "http://localhost:3000/api/note/course/"
  endpointGradesByCourseANDStudentGET = "http://localhost:3000/api/note/student"
  endpointGradesPOST = "http://localhost:3000/api/note"
  

  


  
  gradesGET(id:number):Observable<any>{
    return this.http.get<any>(this.endpointGradeByUserGET+id)
  }

  courseIdGET(id:number):Observable<Courses>{
    return this.http.get<Courses>(this.endpointCourseIdGET+id)
  }

  gradesByIdCourseGET(id:number):Observable<Grade>{
    return this.http.get<Grade>(this.endpointGradesByCourseGET+id)
  }

  gradesByIdCourseANDIdStudent(body:any):Observable<Grade[]>{
    return this.http.post<Grade[]>(this.endpointGradesByCourseANDStudentGET,body)
  }

  gradesADD(body:any):Observable<Grade[]>{
    return this.http.post<Grade[]>(this.endpointGradesPOST,body)
  }

  
}//