import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();

  }

  /*onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }*/

  getEmployees() {
    this.employeeService.get()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

}
