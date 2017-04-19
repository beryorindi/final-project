import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: 'app/header/search-bar/search.component.html',
  styleUrls: ['app/header/search-bar/search.component.css']
})
export class SearchBarComponent { 
  form;
    onSubmit(mediaItem) {
    //this.mediaItemService.add(mediaItem)
      //.subscribe();
    }

    constructor(
    private formBuilder: FormBuilder
    ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: this.formBuilder.control('Search')
    });
  }
}
