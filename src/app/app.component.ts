import { Component } from '@angular/core';
import { inser_data_model } from './shopping/models/for_inser';
import { Test_For_Post } from './shopping/models/test';
import { student } from './shopping/models/student';
import { users } from './shopping/models/user';
import { StudentService } from './services/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: users[] =[]

  

  constructor(private studentService: StudentService){
    
  }

    
  }

