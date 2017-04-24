import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

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
