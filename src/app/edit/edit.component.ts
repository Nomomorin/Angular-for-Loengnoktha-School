import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inser_data_model } from '../shopping/models/for_inser';
import { ActivatedRoute } from '@angular/router';
import { student } from '../shopping/models/student';
import { StudentService } from '../services/student.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {
  id:any = null
  dataStudent:student[] = []
  data_id_student = null
  data_name = null
  data_sex = null
  data_blood_type = null
  data_allergic_drug = null
  data_level = null
  data_more = null

  data = [];

  
  
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,private messageService: MessageService){
    this.id =  this.route.snapshot.paramMap.get('id')
  
      // console.log(response);
      
  }
  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this.studentService.getStudentById(this.id).subscribe(student => {
      this.data_id_student = student.id_student
      this.data_name = student.name
      this.data_sex = student.sex
      this.data_more = student.more
      this.data_blood_type = student.blood_type
      this.data_allergic_drug = student.drug_allergy
      this.data_level = student.level
    })
    
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
    
    this.studentService.updateStudent(this.data_for_insert, this.id).subscribe()
     
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

