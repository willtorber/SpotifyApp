import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  searchArtist(nameArtist: string): void {
    this.loading = true;
    this.spotifyService.searchArtists(nameArtist).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
