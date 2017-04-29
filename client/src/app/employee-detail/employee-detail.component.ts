import { Component, OnInit, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../employee.service';
import { LocationService } from '../service/location.service';

import { Location } from '../model/location.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  form;
  @Input() employee;
  private locations: Location [];
  locationID : String;

  constructor( private formBuilder: FormBuilder,
  private employeeService : EmployeeService,
  private locationService: LocationService){}

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
      emplocation: this.formBuilder.control(''),
      division : this.formBuilder.control(''),
      id : this.formBuilder.control(''),
      imageUrl : this.formBuilder.control('')
    });
     this.locationService.get()
      .subscribe(response => this.locations = response);
  }

  update(employee) {
    if(!this.locationID){
      this.locationID = this.employee.emplocation.id;
    }
    let jsonLocation  = {
      id : this.locationID
    }
    employee.emplocation = jsonLocation;
    //employee.photo = this.avatar;
    //console.log(employee);
    this.employeeService.update(employee);
  }

  onChange(location: Location){
    this.locationID = location.id;
  }
  
  

}
