import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('SpotifyService start!');
    }

  getNewReleases(): void {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBqJpjudAi7kbD9TfjdSWcO1ZqIsS9ATaFVZDtK9J10v9uyf6dlsO7D2hankzqz40RESIfTq_LGrLF7TNg'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe(data => {
          console.log(data);
        });
  }
}
