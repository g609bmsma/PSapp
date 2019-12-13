import { Component } from '@angular/core';
import { Game } from '../interfaces/game';

const GAME_DATA: Game[] = [];

@Component({
  selector: 'app-view-game-page',
  templateUrl: './view-game-page.component.html',
  styleUrls: ['./view-game-page.component.css']
})
export class ViewGamePageComponent {
  displayedColumns: string[] = ['name', 'platform', 'genre', 'releaseDate', 'players', 'publisher', 'boxArt'];
  dataSource = GAME_DATA;

  constructor() { }

  ngOnInit() {
    GAME_DATA.push(history.state);
  }
}
