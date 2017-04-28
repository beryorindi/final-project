import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { EmployeeService } from './employee.service';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { LastnameSearchPipe } from './pipes/lastname-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginBarComponent,
    SearchBarComponent,
    NavigationBarComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    LastnameSearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
