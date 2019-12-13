import { Component } from '@angular/core';
import { Game } from '../interfaces/game';
import { Router, ActivatedRoute } from '@angular/router';

const GAME_DATA: Game[] = [
];

@Component({
  selector: 'app-view-game-page',
  templateUrl: './view-game-page.component.html',
  styleUrls: ['./view-game-page.component.css']
})
export class ViewGamePageComponent {
  displayedColumns: string[] = ['name', 'platform', 'genre', 'releaseDate', 'players', 'publisher'];
  dataSource = GAME_DATA;
  game


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.game = history.state;
    GAME_DATA.push(this.game);
  }
}
