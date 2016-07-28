import { Component, Input } from '@angular/core';

@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    @Input('mediaItemToWatch') mediaItem;
    
    onDelete() {
        console.log('deleted');
    }
}