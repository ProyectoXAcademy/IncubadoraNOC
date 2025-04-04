import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/api/user/create'; 

  constructor(private http: HttpClient) {}

  registerUser(userData: Register): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
