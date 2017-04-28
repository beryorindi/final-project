import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  @Input() employee;
  @Output() loaddetail = new EventEmitter();
  
 

  constructor(
    
  ) { }

  ngOnInit() {
    
  }

  loadEmlpoyeeDetail(){
    this.loaddetail.emit(this.employee);
    //console.log(this.employee);
  }
}
