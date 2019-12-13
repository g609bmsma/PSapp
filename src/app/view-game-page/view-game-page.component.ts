import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { ExportToCsv } from 'export-to-csv';
import * as Papa from 'papaparse';

let GAME_DATA: Game[] = [];

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
    filename: "Games",
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: false,
    showTitle: false,
    title: "Games",
    useTextFile: false,
    useBom: false,
    useKeysAsHeaders: true,
  };

  csvExporter = new ExportToCsv(this.options);

  constructor() { }

  ngOnInit() {
    GAME_DATA.push(history.state);
  }

  onChange(files: File[]) {
    if (files[0]) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          GAME_DATA = result.data;
        }
      });
    }
  }

  exportToCSV() {
    this.csvExporter.generateCsv(GAME_DATA);
  }
}
