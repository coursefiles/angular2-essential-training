import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

let appDirectives = [
  MediaItemComponent,
  MediaItemListComponent,
  MediaItemFormComponent,
  FavoriteDirective,
  REACTIVE_FORM_DIRECTIVES
];

let appPipes = [
  CategoryListPipe
];

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: appDirectives,
    multi: true
  },
  {
    provide: PLATFORM_PIPES,
    useValue: appPipes,
    multi: true
  }
]);
