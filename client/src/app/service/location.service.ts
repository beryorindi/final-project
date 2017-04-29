import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Location } from '../model/location.model';
@Injectable()
export class LocationService {

  constructor(private http:Http) { }

  get() : Observable<Location[]>{
    let url = "/api/locations"
    return this.http.get(url)
      .map(response => response.json());
  }
}
