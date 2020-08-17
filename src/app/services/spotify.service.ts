import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('SpotifyService start!');
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCeCdqNZJfDB0L9znmrizGlmr0ON8oaQTYYOI5jZm5ff2-XDSM08pdv4nmEPenLi2raFh2ve_nd1oEC0yU',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  searchArtists(nameArtist: string): any {
    return this.getQuery(`search?q=${nameArtist}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }
}
