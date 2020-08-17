import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  artist: any = {};
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;
      this.loadingArtist = false;
    });
  }
}
