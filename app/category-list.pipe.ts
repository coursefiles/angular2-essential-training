import {Pipe} from 'angular2/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe {
    transform(mediaItems) {
        var categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(', ');
    }
}