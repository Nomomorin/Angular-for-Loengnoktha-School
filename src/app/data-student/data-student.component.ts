import { StudentService } from '../services/student.service';
import { Component } from '@angular/core';
import { student } from '../shopping/models/student';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.css'],
  providers: [MessageService]
})
export class DataStudentComponent {
  value_search_name:string =""
  id_for_delete = null
  dataStudent:student[] = []
  cols = [
    { header: 'ไอดี', field: 'id' },
    { header: 'รหัสนักเรียน', field: 'id_student' },
    { header: 'ชื่อนักเรียน', field: 'name' },
    { header: 'เพศ', field: 'sex' },
    { header: 'กรุ๊ปเลือด', field: 'blood_type' },
    { header: 'ยาที่แพ้', field: 'drug_allergy' },
    { header: 'เพิ่มเติม', field: 'more' },
    { header: 'แก้ไข-ลบ',field:"edit"}
];
  
  
  constructor(private studentService: StudentService,private messageService: MessageService){
    this.studentService.getStudentAll().subscribe(response=> {
      this.dataStudent = response
    })
  }

  search_name_(value:string){
      this.studentService.getStudentAll().subscribe(response=> {
        this.dataStudent = response
        this.dataStudent = this.dataStudent.filter(response=>{
          const Name = response.name.toLowerCase()
          const search_name = value.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
      })
  }

  OnDelete(){
    this.studentService.DeleteStudent(this.id_for_delete).subscribe()
    window.location.reload();
  }
  showConfirm(id :any) {
    this.id_for_delete = id
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'แจ้งเตือน', detail:"คุณแน่ใจที่จะลบข้อมูลดังกล่าว"});
}

showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'ยกเลิกการลบข้อมูล'});
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'ลบข้อมูลสำเร็จ'});
}

onConfirm(){
  this.OnDelete()
  this.showSuccess()
  this.messageService.clear("c")
}
onReject(){
  this.showError()
  this.messageService.clear("c")
}
}
