import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
inport { MediaItemListComponent } from './media-item-list.component';

let appDirectives = [
  MediaItemComponent,
  MediaItemListComponent
];

bootstrap(AppComponent, [
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: appDirectives,
    multi: true
  }
]);