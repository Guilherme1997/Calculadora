import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayOperationService {

  message = new EventEmitter();

  constructor() { }

  public emmiterOperation(msg: string): void {
    this.message.emit(msg);
  }

}
