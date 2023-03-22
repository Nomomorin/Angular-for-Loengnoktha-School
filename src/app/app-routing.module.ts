import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStudentComponent } from './data-student/data-student.component';
import { DispenseDrugComponent } from './dispense-drug/dispense-drug.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { InsertDataStudentComponent } from './insert-data-student/insert-data-student.component';
import { InsertDrugComponent } from './insert-drug/insert-drug.component';
import { StockDrugComponent } from './stock-drug/stock-drug.component';
import { TetForRoutComponent } from './tet-for-rout/tet-for-rout.component';
import { PrescriptionHistoryComponent } from './prescription-history/prescription-history.component';
const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'data',component:DataStudentComponent},
  {path:'insert',component:InsertDataStudentComponent},
  {path:'editData/:id',component:EditComponent},
  {path:'test',component:TetForRoutComponent},
  {path:'stock',component:StockDrugComponent},
  {path:'insert_drug',component:InsertDrugComponent},
  {path:'dispense',component:DispenseDrugComponent},
  {path:'history',component:PrescriptionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
