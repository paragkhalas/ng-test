import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Character } from './types/character';
import { EpisodeResponse } from './types/episoderesponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test';

  constructor(private appService: AppService) { }

  ngOnInit() {
    // 1. HTTP Request Handling
    this.appService.loadData().subscribe((response: EpisodeResponse) => {
      if (response.results && response.results.length) {
        response.results.forEach((episode: any) => {
          if (episode.characters && episode.characters.length) {
            episode.characters.map((character: string, index: number) => {
              return this.appService.getCharacter(character).subscribe((res: Character) => {
                episode.characters[index] = res;
                return res;
              });
            });
          }
          return episode;
        });
        console.log(response);
      }
    });
  }
}
