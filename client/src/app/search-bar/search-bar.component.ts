import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() media;
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
