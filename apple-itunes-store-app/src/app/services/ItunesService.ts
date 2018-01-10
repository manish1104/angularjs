import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ItunesSearchResponse } from './ItunesSearchResponse';

@Injectable()
export class ItunesService{

    constructor(private http: Http){
        console.log('ItunesService Initialized... ');
    }

    getPosts(){
    return this.http.get("https://itunes.apple.com/search?term=rahman")
            .map(res => res.json());
    }

    getPost(searchKey: string){
        return this.http.get("https://itunes.apple.com/search?term=" + searchKey + "&limit=1000&entity=movie")
                .map(res => res.json());
        }

}