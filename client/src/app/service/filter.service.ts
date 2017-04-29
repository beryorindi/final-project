import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { Filter } from '../model/filter.model' ;

@Injectable()
export class FilterService {
  private states: BehaviorSubject<Filter>;
  private _states: Filter;
  constructor() {
    this.states = new BehaviorSubject<Filter>(new Filter());
    this.init();
  }

  init(){
    this._states = {
      "searchQuery" : "",
      "sortOrder" : "asc",
      "filter" : {
        "gender" : "",
        "location" : ""
      }
    }
    this.states.next(this._states);
  }

  get() {
    return this.states.asObservable();
  }

  setSearchQuery(searchQuery) {
    this._states.searchQuery = searchQuery;
    this.states.next(this._states);
  }

  setGender(gender) {
    this._states.filter.gender = gender;
    this.states.next(this._states);
  }

  setLocation(location) {
    this._states.filter.location = location;
    this.states.next(this._states);
  }
  
  setSortOrder(sortOrder) {
    this._states.sortOrder = sortOrder;
    this.states.next(this._states);
  }
}
