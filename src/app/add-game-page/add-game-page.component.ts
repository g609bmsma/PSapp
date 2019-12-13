import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game-page',
  templateUrl: './add-game-page.component.html',
  styleUrls: ['./add-game-page.component.css']
})
export class AddGamePageComponent implements OnInit {

  public game = { name: '', platform: '', genre: '', releaseDate: '', players: '', publisher: '', boxArt: '' };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addGame() {
    this.router.navigateByUrl('/view', { state: this.game });
  }

}
