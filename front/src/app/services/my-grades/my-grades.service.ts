import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../../models/grades.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyGradesService {

  constructor(private http:HttpClient) { }
  
  endpointGradeGET = "endoint"
  
  gradesGET():Observable<Grade>{
    return this.http.get<Grade>(this.endpointGradeGET)
  }
}