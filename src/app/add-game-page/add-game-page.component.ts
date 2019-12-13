import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-game-page',
  templateUrl: './add-game-page.component.html',
  styleUrls: ['./add-game-page.component.css']
})
export class AddGamePageComponent implements OnInit {

  public game = { id: 1, name: "", platform: "", genre: "", releaseDate: "", players: "", publisher: "" };

  constructor() { }

  ngOnInit() {
  }

}
