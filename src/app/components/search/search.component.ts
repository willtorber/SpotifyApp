import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  searchArtist(nameArtist: string){
    this.spotifyService.searchArtist(nameArtist)
        .subscribe((data: any) => {
          console.log(data);
          this.artists = data.artists.items;
        });
  }



}
