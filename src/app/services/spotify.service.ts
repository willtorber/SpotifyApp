import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('SpotifyService start!');
    }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAA3GwfwVN6O0QXHYlNEaw9pM4Q5BPVvf46-kDf1c3_3SGGfYY2Iq1m1iZaGt5hD8QD-TfW2tHnMlMEScw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( (data: any) => data.albums.items ));
  }

  searchArtist(nameArtist: string): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAA3GwfwVN6O0QXHYlNEaw9pM4Q5BPVvf46-kDf1c3_3SGGfYY2Iq1m1iZaGt5hD8QD-TfW2tHnMlMEScw'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ nameArtist }&type=artist&limit=15`, { headers })
                    .pipe( map( (data: any) => data.artists.items ));
  }

}
