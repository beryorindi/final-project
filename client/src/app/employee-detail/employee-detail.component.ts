import { Component, OnInit, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  form;
  @Input() employee;
  constructor( private formBuilder: FormBuilder,
  private employeeService : EmployeeService){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      locationId: this.formBuilder.control(''),
      division : this.formBuilder.control(''),
      id : this.formBuilder.control(''),
      imageUrl : this.formBuilder.control('')
    });
  }

  update(employee) {
    //employee.photo = this.avatar;
    this.employeeService.update(employee);
  }
  
  

}
