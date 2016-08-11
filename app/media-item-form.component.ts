import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject('LOOKUP_LISTS') public lookupLists) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'medium': this.formBuilder.control('Movies'),
      'name': this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      'category': this.formBuilder.control(''),
      'year': this.formBuilder.control('', this.yearValidator)
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) return null;
    var year = parseInt(control.value);
    var minYear = 1800;
    var maxYear = 2500;
    if (year >= minYear && year <= maxYear) return null;
    return { 'year': { 'min': minYear, 'max': maxYear } };
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}
