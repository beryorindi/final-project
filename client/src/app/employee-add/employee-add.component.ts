import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../employee.service';
import { LocationService } from '../service/location.service';

import { Location } from '../model/location.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  formadd;
  private locations: Location [];
  locationID : String;

  @Output() close = new EventEmitter();
  constructor( private formBuilder: FormBuilder,
   private employeeService : EmployeeService,
   private locationService: LocationService,
   ) {  }

  ngOnInit() {
    this.formadd = this.formBuilder.group({
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
      division : this.formBuilder.control('')
    });
    this.locationService.get()
      .subscribe(response => this.locations = response);
  }

  closePopup(){
    this.close.emit();
  }

   onChange(location: Location){
    this.locationID = location.id;
  }

  add(employee) {
    let jsonLocation  = {
      id : employee.emplocation
    }
    employee.emplocation = jsonLocation;
    employee.imageUrl = "../../media/employee.jpg";
    console.log(employee);
    this.employeeService.save(employee);
    this.closePopup();
  }

}
