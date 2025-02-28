import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedUser } from '../../models/registeredUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/user'
  private endpointGetUserById = 'http://localhost:3000/api/user/'


  constructor( private http: HttpClient) { }

  getUserById(userId: number): Observable<LoggedUser> {
    return this.http.get<LoggedUser>(`${this.apiUrl}/${userId}`);
  }

  editUser(userData: any): Observable<LoggedUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<any>(`${this.apiUrl}/edit`, { user: userData }, { headers });
  }


  }







