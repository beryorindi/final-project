import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../employee.service';
import { FilterService } from '../service/filter.service';
import { LocationService } from '../service/location.service';

import { Location } from '../model/location.model';
import { Employee } from '../model/employee.model';
import { Filter } from '../model/filter.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() counter;
  private searchclick = false;
  private ascending = true;
  private filter = false;
  private delete = false;
  @Input() employee;
  private locations: Location [];
  private selectedGender;
  form;

  private employees$ : Observable<Employee[]>;
  private locations$ : Observable<Location[]>;
  private filter$ : Observable<Filter>;
  private selectedLocation : String;

    constructor(
    private filterService: FilterService,
    private employeeService: EmployeeService,
    private locationService: LocationService
    ){}

  ngOnInit() {
    this.locationService.get()
      .subscribe(response => this.locations = response);
    this.employees$ = this.employeeService.get();
    this.locations$ = this.locationService.get();
    this.filter$ = this.filterService.get();
  }

  onDelete(Id){
    this.employeeService.delete(Id);
    this.delete = false;
  }

  onSearch(){
    if(this.searchclick){
      this.searchclick = false;
    }
    else{
      this.searchclick = true;
    } 
  }

  onKeyPress(search) {
    this.filterService.setSearchQuery(search.value);
  }

  filterGender(gender){
    this.selectedGender = gender;
    this.filterService.setGender(gender);
  }

  filterLocation(locationId) {
    //console.log(locationId);
    this.selectedLocation = locationId;
    this.filterService.setLocation(locationId);
  }

  sortAscending() {
    this.filterService.setSortOrder('asc');
  }

  sortDescending() {
    this.filterService.setSortOrder('desc');
  }

  toggleSort(){
    if(this.ascending){
      this.ascending = false;
    }
    else{
      this.ascending = true;
    }
  }

  toggleFilter(){
    if(!this.filter){
      this.filter = true;
    }
    else{
      this.filter = false;
    } 
  }

  toggleDelete(){
    if(this.delete == true){
      this.delete = false;
    }
    else{
      this.delete = true;
    }
  }

  resetFilter(){
    this.filterService.setGender('');
    this.filterService.setLocation('');
    this.toggleFilter();
  }
}
