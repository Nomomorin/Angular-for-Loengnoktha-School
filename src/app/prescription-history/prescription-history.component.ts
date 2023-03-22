import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { history } from '../shopping/models/history';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import '../fonts/THSarabunNew-normal.js'
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.css']
})
export class PrescriptionHistoryComponent {
  constructor(private historyService: HistoryService){
    this.historyService.getHistory_all().subscribe(response => {
      this.data_history = response
      console.log(this.data_history)
    })
  }
  title = 'ng-xlsx-example';
  value_search_name =''
  value_search_date = ''
  active_ = [{text:'ปิดตารางข้อมูล',active:true}]
  data_history:history[] =[]
  data_for_export = [{
    drugRecipient:'ชื่อคนรับยา',illness:'อาการป่วย',list_drug:'ชื่อยา',nameDispenser:'ชื่อผู้จ่ายยา',date:'วันที่',time:'เวลา'
  }]
  cols =[
  { header: 'ชื่อคนรับยา', field: 'drugRecipient' },
  { header: 'อาการป่วย',field:'illness'},
  { header: 'ชื่อยา', field: 'list_drug' },
  { header: 'ชื่อผู้จ่ายยา', field: 'nameDispenser' },
  { header: 'วันที่', field: 'date' },
  { header: 'เวลา', field: 'time' },
  { header: 'เลือก', field: 'select'}]

  push_data(value:any){
    var data = {
      drugRecipient:value.drugRecipient,illness:value.illness,list_drug:value.list_drug,nameDispenser:value.nameDispenser,date:value.date,time:value.time
    }
    this.data_for_export.push(data)
  }
  push_all_data(){
    for(var i=0; i<this.data_history.length; i++){
      var data = {
        drugRecipient:this.data_history[i].drugRecipient,illness:this.data_history[i].illness,list_drug:this.data_history[i].list_drug,nameDispenser:this.data_history[i].nameDispenser,date:this.data_history[i].date,time:this.data_history[i].time
      }
      this.data_for_export.push(data)
    }
    console.log(this.data_for_export)
  }
  delete_data(value:any){
    
    this.data_for_export.splice(value,1)
    /* if(this.data_for_export.includes(data)){
      
      this.data_for_export.splice(this.data_for_export.indexOf( data ), 1);
    } */
  }
  delete_data_all(){
    this.data_for_export = [{
      drugRecipient:'ชื่อคนรับยา',illness:"อาการป่วย",list_drug:'ชื่อยา',nameDispenser:'ชื่อผู้จ่ายยา',date:'วันที่',time:'เวลา'
    }]
  }
  search_(value:any,id:number){
    if(id == 1){
      this.historyService.getHistory_all().subscribe(response=> {
        this.data_history = response
        this.data_history = this.data_history.filter(response=>{
          const Name = response.date.toLowerCase()
          const search_name = this.value_search_date.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
        this.data_history = this.data_history.filter(response=>{
          const Name = response.nameDispenser.toLowerCase()
          const search_name = value.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
      })
    }else{
      this.historyService.getHistory_all().subscribe(response=> {
        this.data_history = response
        this.data_history = this.data_history.filter(response=>{
          const Name = response.nameDispenser.toLowerCase()
          const search_name = this.value_search_name.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
        this.data_history = this.data_history.filter(response=>{
          const Name = response.date.toLowerCase()
          const search_name = value.toLowerCase()
          return Name.indexOf(search_name)!=-1
        })
      })
    }
  }
  Ontest(){
    if (this.active_[0].text == 'ปิดตารางข้อมูล'){
      this.active_[0].text = 'เปิดตารางข้อมูล'
      this.active_[0].active = false
    }else{
      this.active_[0].text = 'ปิดตารางข้อมูล'
      this.active_[0].active = true
    }
  }
  exportToExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data_for_export,{header:[],skipHeader:true});
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
    const fileName = 'history.xlsx';

    FileSaver.saveAs(data, fileName);
  }
  exportToPdf(){
    var head = [["ชื่อคนรับยา","ชื่อยา","ชื่อผู้จ่ายยา",'วันที่','เวลา']]
    var data_copy = this.data_for_export.concat();
    data_copy.shift()
    var data = data_copy.map((p,i=2)=>[p.drugRecipient,p.illness,p.list_drug,p.nameDispenser,p.date,p.time])
    var content = {
      head:head,
      body:data,
      styles:{font:'THSarabunNew'}
    }
    var doc = new jsPDF()
    //doc.save("history");
    doc.setFont('THSarabunNew','normal');
    autoTable(doc,content)
    doc.save("history");
  }
}
