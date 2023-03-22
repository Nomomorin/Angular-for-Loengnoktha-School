import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { DataStudentComponent } from './data-student/data-student.component';
import {TableModule} from 'primeng/table';
import { InsertDataStudentComponent } from './insert-data-student/insert-data-student.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { EditComponent } from './edit/edit.component';
import { TetForRoutComponent } from './tet-for-rout/tet-for-rout.component';
import { TrapbarComponent } from './trapbar/trapbar.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FlutterComponent } from './flutter/flutter.component';
import {SpeedDialModule} from 'primeng/speeddial';
import { StockDrugComponent } from './stock-drug/stock-drug.component';
import { InsertDrugComponent } from './insert-drug/insert-drug.component';
import { DispenseDrugComponent } from './dispense-drug/dispense-drug.component';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import { PrescriptionHistoryComponent } from './prescription-history/prescription-history.component'
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DataStudentComponent,
    InsertDataStudentComponent,
    EditComponent,
    TetForRoutComponent,
    TrapbarComponent,
    FlutterComponent,
    StockDrugComponent,
    InsertDrugComponent,
    DispenseDrugComponent,
    PrescriptionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    InputTextareaModule,
    SpeedDialModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
