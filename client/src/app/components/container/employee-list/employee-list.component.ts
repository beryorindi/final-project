import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../../../service/employee.service';
import { FilterService } from '../../../service/filter.service';
import { Employee } from '../../../model/employee.model';
import { Filter } from '../../../model/filter.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees$ : Observable<Employee[]>;
  private filter$ : Observable<Filter>;
  private selectedLocation : String;
  private selectedEmployeeID : Employee;
  private found = true;
  private highlightedDiv: String;
  
  @Input() isSorted: boolean = false;
  @Output() selectedEmployee = new EventEmitter();
  @Output() add = new EventEmitter();

  media = null;
  loadEmployeeDetail(employee){
    this.media = employee;
    this.selectedEmployee.emit(employee);
    
    //console.log(this.media);
  }

  clearForm(){
    this.add.emit();
  }
  
  employees = [];

  constructor(
    private filterService : FilterService,
    private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.employeeService.get();
    this.filter$ = this.filterService.get();
    this.getEmployees();
  }

  getEmployees() {
      this.employeeService.get()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  toggleHighlight(newValue: String) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = null;
    }
    else {
      this.highlightedDiv = newValue;
    }
  }
}
