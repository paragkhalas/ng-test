import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EpisodeResponse } from '../types/episoderesponse';
import { Character } from '../types/character';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  loadData(): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}/episode`);
  }

  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }

}
