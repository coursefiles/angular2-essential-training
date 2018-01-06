import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium) {
    let getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .map(response => {
        return response.mediaItems;
      });
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[]
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}