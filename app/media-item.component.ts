import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();
    
    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}