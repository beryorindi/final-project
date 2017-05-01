import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../employee.service';
import { LocationService } from '../service/location.service';

import { Location } from '../model/location.model';

import { lookupListToken } from '../providers/provider';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  formadd;
  private locations: Location [];
  locationID : String;
  private uploadURL;

  @Output() close = new EventEmitter();
  constructor( private formBuilder: FormBuilder,
   private employeeService : EmployeeService,
   private locationService: LocationService,
   @Inject(lookupListToken) public lookupLists
   ) {  }

  ngOnInit() {
    this.uploadURL = '../../media/blank_profil.png';
    this.locationService.get()
      .subscribe(response => this.locations = response);
    this.emptyForm();
  }

  emptyForm(){
    this.formadd = this.formBuilder.group({
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
      suspendDate: this.formBuilder.control('', Validators.compose([
        Validators.required])),
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
      imageUrl:this.formBuilder.control(''),
    });
  }

  closePopup(){
    this.close.emit();
  }

  onChange(location){
    this.locationID = location;
  }

  add(employee) {
    let jsonLocation  = {
      id : employee.location
    }
    employee.location = jsonLocation;
    employee.imageUrl = this.uploadURL;
    console.log(employee);
    this.employeeService.save(employee);
    this.closePopup();
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
