import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotityService: SpotifyService) {
    this.loading = true;
    this.error = false;
    spotityService.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      (errorService: any) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorService.error.error.message;
      }
    );
  }
}
