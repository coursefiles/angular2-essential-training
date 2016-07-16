import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
    constructor(private http: Http) {}
    
    get(medium) {
        var searchParams = new URLSearchParams();
        searchParams.append('medium', medium);
        return this.http.get('mediaitems', {search: searchParams})
            .map(response => {
                return response.json().mediaItems;
            });
    }
    
    add(mediaItem) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('mediaitems', JSON.stringify(mediaItem), { headers: headers })
            .map(response => {});
    }
    
    delete(mediaItem) {
        return this.http.delete(`mediaitems/${mediaItem.id}`)
            .map(response => {});
    }
    
    mediaItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
}