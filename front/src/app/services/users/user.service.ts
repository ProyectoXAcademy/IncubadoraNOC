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

  editUser(userData: any): Observable<any> {
    const tokenJWT = localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenJWT}` });

    console.log(userData)

    return this.http.put<any>(`${this.apiUrl}/edit`, { user: userData }, { headers });
  }


  getUserById(user_id:number):Observable<any[]>{
  return this.http.get<any[]>(this.endpointGetUserById+user_id)

  }
}






