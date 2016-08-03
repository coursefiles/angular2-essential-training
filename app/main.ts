import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';

let appDirectives = [
  MediaItemComponent,
  MediaItemListComponent,
  FavoriteDirective
];

bootstrap(AppComponent, [
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: appDirectives,
    multi: true
  }
]);