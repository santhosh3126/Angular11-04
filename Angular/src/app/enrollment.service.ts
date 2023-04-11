import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private baseUrl = "http://localhost:8080/api/demo"

  constructor(private http:HttpClient) { }

  getEnrollmentList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
 

}
