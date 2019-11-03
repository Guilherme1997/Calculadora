import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class DisplayOperationService {

  emitterOperation = new EventEmitter();

  constructor() { }

  addOperator(){}

}
