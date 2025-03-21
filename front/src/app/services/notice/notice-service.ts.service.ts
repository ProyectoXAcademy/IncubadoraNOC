import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Publication } from '../../models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeServiceTsService {
  private endpoint_create_notice:string = "http://localhost:3000/api/publication/create"

  constructor(private http:HttpClient) {}

  createNoticePOST(notice:Publication):Observable<any>{
    return this.http.post(this.endpoint_create_notice,notice)
}

}
