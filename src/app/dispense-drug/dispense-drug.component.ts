import { Xliff } from '@angular/compiler';
import { Component } from '@angular/core';
import { DrugService } from '../services/drug.service';
import { HistoryService } from '../services/history.service';
import { StudentService } from '../services/student.service';
import { drug } from '../shopping/models/drug';
import { student } from '../shopping/models/student';
import {MessageService} from 'primeng/api';
import { history } from '../shopping/models/history';
@Component({
  selector: 'app-dispense-drug',
  templateUrl: './dispense-drug.component.html',
  styleUrls: ['./dispense-drug.component.css'],
  providers: [MessageService]
})
export class DispenseDrugComponent {
  constructor(private drugService:DrugService,private studentService:StudentService,private historyService:HistoryService,private messageService: MessageService){
    this.drugService.getDrug_all().subscribe(response=>{
      this.data_drug = response
    })
    this.studentService.getStudentAll().subscribe(response=>{
      this.data_student = response
    })
    this.selected_drug.pop()
  }
  time = new Date();
  active_drug = [{
    status:true,
    Text:"ปิดตารางข้อมูล"
  },{
    status:true,
    Text:"ปิดตารางข้อมูล"
  }
]
  cols = [
    { header: 'รหัสนักเรียน', field: 'id_student' },
    { header: 'ชื่อนักเรียน', field: 'name' },
    { header: 'เพศ', field: 'sex' },
    { header: 'กรุ๊ปเลือด', field: 'blood_type' },
    { header: 'ยาที่แพ้', field: 'drug_allergy' },
    { header: 'เพิ่มเติม', field: 'more' },
    { header: 'ผู้รับยา', field: 'drug_recipient'}
];
  data_drug:drug[]=[]
  data_student:student[]=[]
  selected_drug=[""]
  data_for_despencer= [{
    drugRecipient: '',
    illness: '',
    list_drug: '',
    nameDispenser: '',
    date: '',
    time: '',
  }]
  ExcelData:any
  value_search_name_drug=''
  value_search_name_srudent=''
  def_change_time(){
    this.time = new Date()
  }
  search_name_(value:string,id:number){
    if(id==1){
      this.drugService.getDrug_all().subscribe(response=> {
        this.data_drug = response
        this.data_drug = this.data_drug.filter(response=>{
          const Name = response.name_drug.toLowerCase()
          const search_name = value.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
      })
    }else{
      this.studentService.getStudentAll().subscribe(response=> {
        this.data_student = response
        this.data_student = this.data_student.filter(response=>{
          const Name = response.name.toLowerCase()
          const search_name = value.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
      })
    }
  }
  Ontest(value:number){
    if (this.active_drug[value].status){
      this.active_drug[value].status = false
      this.active_drug[value].Text = 'เปิดตารางข้อมูล'
    }else{
      this.active_drug[value].status = true
      this.active_drug[value].Text = 'ปิดตารางข้อมูล'
    }
  }
  push_drug(value:string) {
    if(this.selected_drug.includes(value)){
    }else{
      this.selected_drug.push(value)
    }
  }
  push_student(value:string){
    this.data_for_despencer[0].drugRecipient = value
  }
  delete_drug(value:string){
    if(this.selected_drug.includes(value)){
      this.selected_drug.splice(this.selected_drug.indexOf( value ), 1);
    }
  }

  summit_insert_data(){
    var text = ''
    for (var i = 0; i < this.selected_drug.length;i++){
      text = text + this.selected_drug[i] +', '
    }
    
    this.data_for_despencer[0].list_drug = text
    this.data_for_despencer[0].date = String(this.time.getDate()+'/'+(this.time.getMonth()+1)+'/'+this.time.getFullYear())
    this.data_for_despencer[0].time = String(this.time.getHours()+':'+this.time.getMinutes()+':'+this.time.getSeconds())
    this.historyService.postHistory(this.data_for_despencer).subscribe(repsonse =>{
      
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
  /* ReadExcel(event: any) {
    const files = event.target.files
    if (files.length) {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event:any) => {
        const wb = read(event.target.result)
        const sheet = wb.SheetNames

        if (sheet.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheet[0]])
          this.ExcelData = rows
          console.log(this.ExcelData)
        }
      }
      reader.readAsArrayBuffer(file)
    }
    
  }

  exportToExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.employee);
    const workbook: XLSX.WorkBook = {
      Sheets: { Sheet1: worksheet },
      SheetNames: ['Sheet1'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    const date = new Date();
    const fileName = 'example.xlsx';

    FileSaver.saveAs(data, fileName);
  }
 */


 

}
