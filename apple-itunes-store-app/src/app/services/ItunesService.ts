import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ItunesSearchResponse } from './ItunesSearchResponse';
import { AppSettings } from '../AppSettings';
@Injectable()
export class ItunesService {

        constructor(private http: Http) {
                console.log('ItunesService Initialized... ');
        }

        getPost(searchKey: string) {
                return this.http.get(AppSettings.ITUNES_SEARCH_API + "?term=" + searchKey + "&limit=1000")
                        .map(res => res.json());
        }

}