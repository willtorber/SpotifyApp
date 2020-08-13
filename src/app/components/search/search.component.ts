import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  searchArtist(nameArtist: string): void {
    this.spotifyService.searchArtist(nameArtist).subscribe((data: any) => {
      this.artists = data;
    });
  }
}
