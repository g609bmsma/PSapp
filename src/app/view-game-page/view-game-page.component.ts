import { Component } from '@angular/core';
import { Game } from '../interfaces/game';

const GAME_DATA: Game[] = [
  { id: 1, name: 'GOD OF WAR', platform: 'PS4', genre: 'FIGHTING', releaseDate: '01-JULY-2018', players: 4, publisher: 'SONY INTERACTIVE ENTERTAINMENT' },
  { id: 2, name: 'SPIDER-MAN', platform: 'PS4', genre: 'ADVENTURE', releaseDate: '07-SEPT-2018', players: 1, publisher: 'SONY INTERACTIVE ENTERTAINMENT' }
];

@Component({
  selector: 'app-view-game-page',
  templateUrl: './view-game-page.component.html',
  styleUrls: ['./view-game-page.component.css']
})
export class ViewGamePageComponent {
  displayedColumns: string[] = ['name', 'platform', 'genre', 'releaseDate', 'players', 'publisher'];
  dataSource = GAME_DATA;
}
