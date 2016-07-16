import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent, ROUTER_DIRECTIVES],
    pipes: [CategoryListPipe],
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
    medium = '';
    mediaItems = [];
    
    constructor(private mediaItemService: MediaItemService,
        private routeParams: RouteParams) {}
    
    ngOnInit() {
        this.medium = this.routeParams.get('medium');
        this.getMediaItems(this.medium);
    }

    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem)
            .subscribe(() => {
                this.getMediaItems(this.medium);
            });
    }
    
    getMediaItems(medium) {
        this.medium = medium;
        this.mediaItemService.get(medium)
            .subscribe(mediaItems => {
                this.mediaItems = mediaItems;
            });
    }
}