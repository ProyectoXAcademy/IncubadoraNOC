import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from '../../models/enrollment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyEnrollmentsService {
  endpointEnrollmentGET = "endoint"

  constructor(private http:HttpClient) { }

  enrollmentsGET():Observable<Enrollment>{
    return this.http.get<Enrollment>(this.endpointEnrollmentGET)
  }
}