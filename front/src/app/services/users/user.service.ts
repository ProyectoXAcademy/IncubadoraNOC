import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedUser } from '../../models/registeredUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/user'

  constructor( private http: HttpClient) { }

  editUser(user_id: number, userData: any): Observable<LoggedUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<LoggedUser>(`${this.apiUrl}/edit/${user_id}`, { user: userData }, { headers });
  }
}






