import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
