import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
            'name': new FormControl(''),
            'category': new FormControl(''),
            'year': new FormControl('')
        });
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}