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
import { EmployeeAddComponent } from './employee-add/employee-add.component';

import { EmployeeService } from './employee.service';
import { LocationService } from './service/location.service';

import { LastnameSearchPipe } from './pipes/lastname-search.pipe';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { SortingNamePipe } from './pipes/sorting-name.pipe';
import { FilterLocationPipe } from './pipes/filter-location.pipe';

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
    LastnameSearchPipe,
    FilterGenderPipe,
    SortingNamePipe,
    FilterLocationPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EmployeeService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
