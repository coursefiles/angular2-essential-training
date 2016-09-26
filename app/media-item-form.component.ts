import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.medium]);
      });
  }
}
