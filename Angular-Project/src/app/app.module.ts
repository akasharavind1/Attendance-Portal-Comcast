import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MbscModule, MbscProvider } from "ack-angular-mobiscroll";
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
// import {MatDialogModule} from "@angular/material";
// import { MatDialogModule } from '@angular/material/dialog';
// import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AddemployeeComponent,
    EmployeeComponent,
    UpdateComponent,
    DetailemployeeComponent,
    PagenotfoundComponent,
    // DialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    MbscModule,
// <<<<<<< HEAD
    MatFormFieldModule,
    MatDialogModule
// =======
    // MatDialogModule
    
// >>>>>>> 6686bbc2fd16bbc6caf5f78bba207a166666ca82
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }