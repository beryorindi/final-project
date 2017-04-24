import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private serverURL;

  constructor(private http: Http) {
    this.serverURL = '/api/employees/';
  }

  get() {
    return this.http.get(this.serverURL)
      .map(response => {
        return response.json();
      });
  }
  
  add(mediaItem) {
    return this.http.post('api', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`api/${mediaItem.id}`)
      .map(response => {});
  }
}
