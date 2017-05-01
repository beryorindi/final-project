import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/container/employee/employee.component';
import { EmployeeListComponent } from './components/container/employee-list/employee-list.component';
import { LoginBarComponent } from './components/header/login-bar/login-bar.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/header/navigation-bar/navigation-bar.component';
import { EmployeeDetailComponent } from './components/container/employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './components/container/employee-add/employee-add.component';

import { EmployeeService } from './service/employee.service';
import { LocationService } from './service/location.service';

import { LastnameSearchPipe } from './pipes/lastname-search.pipe';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { SortingNamePipe } from './pipes/sorting-name.pipe';
import { FilterLocationPipe } from './pipes/filter-location.pipe';

import { lookupListToken, lookupLists } from '../app/providers/provider';

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
  providers: [
  EmployeeService, 
  LocationService, 
  { provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
