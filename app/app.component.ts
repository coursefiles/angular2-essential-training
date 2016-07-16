import {Component} from 'angular2/core';
import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemListComponent, MediaItemFormComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
}