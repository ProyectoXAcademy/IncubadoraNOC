import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../../models/attendance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAttendanceService {

  constructor(private http:HttpClient) { }

  endpointAtendanceGET = "http://localhost:3000/api/assistance/"
  endpointAtendancePOST = "http://localhost:3000/api/assistance/"

  attendancesGET():Observable<Attendance>{
    return this.http.get<Attendance>(this.endpointAtendanceGET)
  }

  attendancePOST(body:Attendance):Observable<Attendance>{
    return this.http.post<Attendance>(this.endpointAtendancePOST,body)
  }
}
