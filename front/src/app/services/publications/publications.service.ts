import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../../models/publication.model';
@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  // agregar endpoint
  endpoint:string = "endpoint a los servicios"
  constructor( private http:HttpClient) { }

  publicationsGet():Observable<any>{
       return this.http.get(this.endpoint)
  }


}//
