import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private _pusher: any;
  constructor() {
    this._pusher = new Pusher('45516cfbbe3891ec43f9', {
      cluster: 'eu',
      encrypted: true
    });
  }

  getPusher() {
    return this._pusher;
  }
}