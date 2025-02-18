import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../../models/attendance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAttendanceService {

  constructor(private http:HttpClient) { }

  endpointAtendanceGET = "endoitn al attndance"
  attendancesGET():Observable<Attendance>{
    return this.http.get<Attendance>(this.endpointAtendanceGET)
  }
}
