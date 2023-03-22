import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  

  getHistory_all(): Observable<any> {
    return this.http.get("http://localhost:3000/api/history/")
  }

  editHistory(id:any,value:any): Observable<any> {
    return this.http.patch("http://localhost:3000/api/history/"+id,value)
  }

  postHistory(data_input:any): Observable<any> {
    return this.http.post("http://localhost:3000/api/history/",data_input)
  }
}
