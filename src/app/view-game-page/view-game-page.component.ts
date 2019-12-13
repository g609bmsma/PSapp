import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { ExportToCsv } from 'export-to-csv';

const GAME_DATA: Game[] = [];

@Component({
  selector: 'app-view-game-page',
  templateUrl: './view-game-page.component.html',
  styleUrls: ['./view-game-page.component.css']
})
export class ViewGamePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'platform', 'genre', 'releaseDate', 'players', 'publisher', 'boxArt'];
  dataSource = GAME_DATA;

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: "Games",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  csvExporter = new ExportToCsv(this.options);

  constructor() { }

  ngOnInit() {
    GAME_DATA.push(history.state);
  }

  exportToCSV() {
    this.csvExporter.generateCsv(GAME_DATA);
  }
}
