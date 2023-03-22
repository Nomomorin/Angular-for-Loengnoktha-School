import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private http: HttpClient){

  }
}
