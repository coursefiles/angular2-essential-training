import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

let appDirectives = [
  MediaItemComponent
];

bootstrap(AppComponent, [
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: appDirectives,
    multi: true
  }
]);

