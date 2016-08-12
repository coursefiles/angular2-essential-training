<<<<<<< HEAD
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemService } from './media-item.service';
import { LOOKUP_LISTS, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';

bootstrap(AppComponent, [  
    disableDeprecatedForms(),
    provideForms(),
    { provide: PLATFORM_DIRECTIVES, useValue: REACTIVE_FORM_DIRECTIVES, multi: true },
    MediaItemService,
    provide(LOOKUP_LISTS, { useValue: lookupLists }),
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockXHRBackend })
  ]);
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> 06_01b
