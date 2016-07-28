import { Component } from '@angular/core';

import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemListComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
}