import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'employee-detail',
  templateUrl: 'app/container/employee-detail/employee-detail.component.html',
  styleUrls: ['app/container/employee-detail/employee-detail.component.css']
})
export class EmployeeDetailComponent { 
    form;
    constructor(
    private formBuilder: FormBuilder){}

    ngOnInit() {
    this.form = this.formBuilder.group({
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
}
