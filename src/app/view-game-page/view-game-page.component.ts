import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from '../interfaces/game';
import { MatPaginator, MatTableDataSource } from '@angular/material';
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
  dataSource = new MatTableDataSource<Game>(GAME_DATA);

  options = {
    fieldSeparator: ',',
    filename: 'Games',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: false,
    showTitle: false,
    title: 'Games',
    useTextFile: false,
    useBom: false,
    useKeysAsHeaders: true,
  };

  csvExporter = new ExportToCsv(this.options);

  constructor() { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    GAME_DATA.push(history.state);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
