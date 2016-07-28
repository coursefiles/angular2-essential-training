import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { PLATFORM_DIRECTIVES } from '@angular/core'

import { AppComponent } from './app.component';

bootstrap(AppComponent, [  
    disableDeprecatedForms(),
    provideForms(),
    { provide: PLATFORM_DIRECTIVES, useValue: REACTIVE_FORM_DIRECTIVES, multi: true }
  ]);