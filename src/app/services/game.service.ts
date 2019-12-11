import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game';
import { PusherService } from './pusher.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _endPoint = 'http://localhost:2000/game'
  private _channel: any;

  constructor(private _http: HttpClient, private _pusherService: PusherService) {
    this._channel = this._pusherService.getPusher().subscribe('game');
  }

  /**
   * @return game's channel for the different event available under game
   */
  getChannel() {
    return this._channel;
  }

  list(): Observable<Game[]> {
    return this._http.get(this._endPoint).pipe(map(res => <Game[]>res));
  }

  /**
   * Create new game
   * @param param
   * @return Observable<Game> with the id
   */
  create(param: Game): Observable<Game> {
    return this._http.post(this._endPoint, param).pipe(map(res => <Game>res));
  }

  /**
   * Remove a game
   * @param game to remove
   * @return Observable<Game> the game just removed
   */
  delete(game: Game): Observable<Game> {
    return this._http.delete(`${this._endPoint}/${game.id}`).pipe(mapTo(game));
  }
}