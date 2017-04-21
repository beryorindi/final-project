import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'app/container/employee-list/employee.component.html',
  styleUrls: ['app/container/employee-list/employee.component.css']
})
export class EmployeeComponent { 
    @Input() mediaItem;

}
