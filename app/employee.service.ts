import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {}

  get() {
    /*let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);*/
    return this.http.get('mediaitems')
      .map(response => {
        return response.json().mediaItems;
      });
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
  }
}
