import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemService } from './media-item.service';
import { LOOKUP_LISTS, lookupLists } from './providers';

bootstrap(AppComponent, [  
    disableDeprecatedForms(),
    provideForms(),
    { provide: PLATFORM_DIRECTIVES, useValue: REACTIVE_FORM_DIRECTIVES, multi: true },
    MediaItemService,
    provide(LOOKUP_LISTS, { useValue: lookupLists })
  ]);
