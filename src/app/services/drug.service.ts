import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { drug } from '../shopping/models/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(
    private http: HttpClient
  ) { }

  

  getDrug_all(): Observable<any> {
    return this.http.get("http://localhost:3000/api/drug/")
  }

  editDrug(id:any,value:any): Observable<any> {
    return this.http.patch("http://localhost:3000/api/drug/"+id,value)
  }

  postDrug(data_input:any): Observable<any> {
    return this.http.post("http://localhost:3000/api/drug/",data_input)
  }
}
