import {Directive, HostBinding, Input} from 'angular2/core';

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    
    @Input()
    set mwFavorite(value) {
        this.isFavorite = value;
    }
}