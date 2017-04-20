import { Component } from '@angular/core';

import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: 'app/container/employee-list/employee-list.component.html',
  styleUrls: ['app/container/employee-list/employee-list.component.css']
})
export class EmployeeListComponent { 
  mediaItems = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getMediaItems();
  }

  /*onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }*/

  getMediaItems() {
    this.employeeService.get()
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
