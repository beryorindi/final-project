import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  formadd;
  @Output() close = new EventEmitter();
  constructor( private formBuilder: FormBuilder ) {  }

  ngOnInit() {
    this.formadd = this.formBuilder.group({
      firstname: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      marital: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subdiv: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspenddate: this.formBuilder.control(''),
      hireddate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      office: this.formBuilder.control('')
      
    });
  }

  closePopup(){
    this.close.emit();
  }

}
