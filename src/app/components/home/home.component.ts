import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spotityService: SpotifyService) {
    spotityService.getNewReleases()
        .subscribe((data: any) => {
          console.log(data);
          this.newReleases = data.albums.items;
        });
  }

  ngOnInit(): void {
  }

}
