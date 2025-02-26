import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserRole } from "../../models/user.model";

@Injectable({
  providedIn: "root",
})
export class CreateUserRoleService {
  emailGET(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private endpointEmailGet: string = "http://localhost:3000/api/user/mail";
  private endpointRoleByUserId: string = "http://localhost:3000/api/userRole/userID/";
  private endpointCreateUserRole: string = "http://localhost:3000/api/userRole/create";



  getUserBYMailGET(email: any):Observable<User> {
    return this.http.post<User>(this.endpointEmailGet, email);
  }

  getRolesByUserIdGET(id: number):Observable<User[]> {
    return this.http.get<User[]>(this.endpointRoleByUserId+id);
  }
  
  addTeacherRole(body:any):Observable<UserRole>{
    return this.http.post<UserRole>(this.endpointCreateUserRole,body);
  
  }


}/////////


