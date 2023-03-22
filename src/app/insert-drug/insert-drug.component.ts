import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';
import { DrugService } from '../services/drug.service';
@Component({
  selector: 'app-insert-drug',
  templateUrl: './insert-drug.component.html',
  styleUrls: ['./insert-drug.component.css'],
  providers: [MessageService]
})
export class InsertDrugComponent {
  constructor(private drugService: DrugService,private messageService:MessageService){}
  name_drug = ''
  detail_drug = ''
  more_drug = ''
  data_for_insert={};

  summit_insert_data(){
    this.data_for_insert = {
      "name_drug": this.name_drug,
      "detail_drug": this.detail_drug,
      "more_drug": this.more_drug,
    }
    
    this.drugService.postDrug(this.data_for_insert).subscribe(response=> {
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
