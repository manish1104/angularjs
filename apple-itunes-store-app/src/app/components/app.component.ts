import { Component } from '@angular/core';
import { Address } from '../components/address';
import { ItunesService } from '../services/ItunesService';
import { ItunesSearchResponse } from '../services/ItunesSearchResponse';
import { TrackDetails } from '../services/TrackDetails';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: '../components/app.component.html',
  styleUrls: ['../components/app.component.css'],
  providers: [ItunesService]
})

export class MyComponent {
  name: String;
  address: Address;
  showAddress: boolean;
  posts: ItunesSearchResponse;
  results: TrackDetails[];
  searchKey: string;

  constructor(private itunesService: ItunesService) {
    this.name = "Manish Singh";
    this.address = {
      name: '56, Kailashpuri',
      street: 'Tonk Road',
      city: 'Jaipur'
    }
    this.showAddress = false;
  }

  toggleAddress() {
    this.showAddress == false ? this.showAddress = true : this.showAddress = false;
  }

  search() {
    console.log("searching for key " + this.searchKey);

    if (this.searchKey != null) {
      this.itunesService.getPost(this.searchKey).subscribe(posts => {
        this.posts = posts;
        this.results = posts["results"];
        console.log(JSON.stringify(this.results));
      })
    }else{
      alert('Put in some text in search box.')
    }

  }

  showItunesResponse() {
    let trackDetails: TrackDetails[];
    trackDetails = this.posts["results"];

    console.log(JSON.stringify(trackDetails));
  }
}
