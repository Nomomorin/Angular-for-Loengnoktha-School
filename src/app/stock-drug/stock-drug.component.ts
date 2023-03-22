import { Component,OnInit } from '@angular/core';
import { DrugService } from '../services/drug.service';
import { drug } from '../shopping/models/drug';
@Component({
  selector: 'app-stock-drug',
  templateUrl: './stock-drug.component.html',
  styleUrls: ['./stock-drug.component.css']
})
export class StockDrugComponent {
  constructor(private drugService: DrugService){
    this.drugService.getDrug_all().subscribe(response =>{
      this.dataDrug = response
    })
  }
  dataDrug:drug[] =[]
  data_for_change = {}
  value_search_name:string = ''
  cols = [
    { header: 'ชื่อยา', field: 'name_drug' },
    { header: 'รายละเอียดยา', field: 'detail_drug' },
    { header: 'สถานะ', field: 'have_drug' },
    { header: 'อื่นๆ', field: 'more_drug' },
    { header: 'แก้ไข', field:'edit'}
];


  search_name_(value:string){
    this.drugService.getDrug_all().subscribe(response=> {
      this.dataDrug = response
      this.dataDrug = this.dataDrug.filter(response=>{
        const Name = response.name_drug.toLowerCase()
        const search_name = value.toLowerCase()
        return Name.indexOf(search_name)!=-1
      })
    })
  }

  showConfirm(value:any){
    console.log(value)
  }

  change_drug_true(value:any){
    this.data_for_change ={
      have_drug: false
    }
    this.drugService.editDrug(value,this.data_for_change).subscribe()
    window.location.reload();
  }

  change_drug_false(value:any){
    this.data_for_change ={
      'have_drug':true
    }
    this.drugService.editDrug(value,this.data_for_change).subscribe()
    window.location.reload();
  }
}
