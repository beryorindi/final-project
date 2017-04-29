import { Component, OnInit, Input, Output } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { FilterService } from '../service/filter.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchclick = false;
  ascending = true;
  @Input() employee;
  form;
    onSubmit(mediaItem) {
    //this.mediaItemService.add(mediaItem)
      //.subscribe();
    }

    constructor(
    private filterService: FilterService,
    private employeeService: EmployeeService
    ){}

  ngOnInit() {
    
  }

  onDelete(Id){
    this.employeeService.delete(Id);
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

  sortAscending() {
    this.filterService.setSortOrder('asc');
  }

  sortDescending() {
    this.filterService.setSortOrder('desc');
  }

  sorting(){
    if(this.ascending){
      this.ascending = false;
    }
    else{
      this.ascending = true;
    }
  }
}
