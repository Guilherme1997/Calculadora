import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationKeysOperationService {

  message = new EventEmitter()

  constructor() {
    this.message.subscribe(
      calculo => {
        this.makeCalculation(calculo)
      }
    )
  }

  makeCalculation(calculo: string) {
    try {
      let result = eval(calculo)
      alert(result)
    }
    catch (e) {
      alert("Erro na expressão!")
    }
  }

  sendMessage(msg) {
    this.message.emit(msg)
  }

}
