import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../../../service/employee.service';
import { LocationService } from '../../../service/location.service';

import { Location } from '../../../model/location.model';
import { Employee } from '../../../model/employee.model';

import { lookupListToken } from '../../../providers/provider';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  form;
  @Input() employee : Employee;
  private locations: Location [];
  locationID : String;
  private uploadURL;

  constructor( private formBuilder: FormBuilder,
  private employeeService : EmployeeService,
  private locationService: LocationService,
  @Inject(lookupListToken) public lookupLists){}

  ngOnInit() {
     this.locationService.get()
      .subscribe(response => this.locations = response);
      this.loadForm();
  }

  loadForm(){
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      dob: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      nationality: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      maritalStatus: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      subDivision: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      status: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      grade: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      email: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      location: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      division : this.formBuilder.control('', Validators.compose([
        Validators.required])),
      id : this.formBuilder.control(''),
      imageUrl : this.formBuilder.control('')
    });
  }

  update(employee) {
    if(!this.locationID){
      this.locationID = this.employee.location.id;
    }
    let jsonLocation  = {
      id : this.locationID
    }
    employee.location = jsonLocation;
    if(this.uploadURL){
      employee.imageUrl = this.uploadURL;
    }
    else{
      employee.imageUrl = this.employee.imageUrl;
    }
    this.employeeService.update(employee);
    this.employee = employee;
    this.uploadURL = null;
    this.locationID = null;
  }

  onChange(location){
    this.locationID = location;
  }

  imgProcess(photo){
    var test;
    var image = new FileReader();
    image.onload = (photo: any)=>{
      this.uploadURL = photo.target.result;
    }
    image.readAsDataURL(photo.target.files[0]);
    
  }
  
  

}
