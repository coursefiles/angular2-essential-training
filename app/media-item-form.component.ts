import {Component} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-form',
    providers: [MediaItemService],
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;
    
    constructor(private formBuilder: FormBuilder,
        private mediaItemService: MediaItemService) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            'medium': new Control('Movies'),
            'name': new Control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            'category': new Control(''),
            'year': new Control('', this.yearValidator)
        });
    }
    
    yearValidator(control) {
        if (control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var minYear = 1800;
        var maxYear = 2500;
        if (year >= minYear && year <= maxYear) return null;
        return {'year': { 'min': minYear, 'max': maxYear }};
    }

    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem);
    }
}