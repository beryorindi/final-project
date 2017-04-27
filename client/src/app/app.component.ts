import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  media = null;
  add = false;
  loadEmployeeDetail(employee){
    this.media = employee;
    //console.log(this.media);
  }
  addEmployee(){
    this.media = null;
    this.add = true;
  }

  closePopup(){
    this.add = false;
  }
}
