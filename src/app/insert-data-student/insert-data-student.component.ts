import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { inser_data_model } from '../shopping/models/for_inser';
import {MessageService} from 'primeng/api';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-insert-data-student',
  templateUrl: './insert-data-student.component.html',
  styleUrls: ['./insert-data-student.component.css'],
  providers: [MessageService]
})


export class InsertDataStudentComponent {
  constructor(private studentService: StudentService,private messageService: MessageService){
    
  }

  data_for_insert = {}

  select_sex = [
    {name:"ชาย"},
    {name:"หญิง"}
  ]
  select_blood_type = [
    {name:"A"},
    {name:"B"},
    {name:"AB"},
    {name:"O"}
  ]
  select_level = [
    {name:1},
    {name:2},
    {name:3},
    {name:4},
    {name:5},
    {name:6},
  ]

  data_id_student = null
  data_name = null
  data_sex = null
  data_blood_type = null
  data_allergic_drug = null
  data_level = null
  data_more = null

  summit_insert_data(){
    this.data_for_insert = {
      "id_student": this.data_id_student,
      "drug_allergy": this.data_allergic_drug,
      "name": this.data_name,
      "sex": this.data_sex,
      "level": this.data_level,
      "blood_type": this.data_blood_type,
      "more": this.data_more
    }
    
    this.studentService.postStudent(this.data_for_insert).subscribe(response=> {
    })  
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'แจ้งเตือน', detail:"คุณแน่ใจที่จะอัปโหลดข้อมูลดังกล่าว"});
}

showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'ยกเลิกการอัปโหลดข้อมูล'});
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'อัปโหลดข้อมูลสำเร็จ'});
}

onConfirm(){
  this.summit_insert_data()
  this.showSuccess()
  this.messageService.clear("c")
}
onReject(){
  this.showError()
  this.messageService.clear("c")
}

}
