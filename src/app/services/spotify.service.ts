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
        'Bearer BQDO2wkiSX-VqLD3jP4JY13wnoLLyJHpmrxkT03PEZLe7HvdnfVSTonfWFq12lxbrtXCdZzH5_cANwn9nz0',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  searchArtist(nameArtist: string): any {
    return this.getQuery(`search?q=${nameArtist}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }
}
