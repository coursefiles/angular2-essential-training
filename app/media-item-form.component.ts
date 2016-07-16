import {Component} from 'angular2/core';
import {ControlGroup, Control} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;

    ngOnInit() {
        this.form = new ControlGroup({
            'medium': new Control('Movies'),
            'name': new Control(''),
            'category': new Control(''),
            'year': new Control('')
        });
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}