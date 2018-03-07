import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium) {
    let getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        })
      );
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
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