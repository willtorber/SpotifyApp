import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('SpotifyService start!');
    }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAz3qhk3eh9czHAOIa1pxm95gOQklsC43t6h5ok7xx4zSUKByyPbD2wdCsYEq_dBSocY_BdehrIup0hAWU'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
