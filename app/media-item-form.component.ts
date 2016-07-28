import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            'medium': new FormControl('Movies'),
            'name': new FormControl('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            'category': new FormControl(''),
            'year': new FormControl('', this.yearValidator)
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
        console.log(mediaItem);
    }
}