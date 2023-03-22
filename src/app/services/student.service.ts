import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http: HttpClient
  ) { }

  postStudent(data_input:any): Observable<any> {
    return this._http.post("http://localhost:3000/api/student/",data_input)
  }
  getStudentAll(): Observable<any> {
    return this._http.get("http://localhost:3000/api/student/")
  }

  getStudentById(id:number):Observable<any>{
    return this._http.get('http://localhost:3000/api/student/'+id);
  }
  
  updateStudent(data_input:any,id:any): Observable<any>{
    return this._http.patch("api/student/"+id,data_input)
  }

  DeleteStudent(id:any): Observable<any>{
    return this._http.delete("api/student/"+id)
  }


}
