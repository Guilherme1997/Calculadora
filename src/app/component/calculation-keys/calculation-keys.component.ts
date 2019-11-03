import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculation-keys',
  templateUrl: './calculation-keys.component.html',
  styleUrls: ['./calculation-keys.component.css']
})
export class CalculationKeysComponent implements OnInit {

  @Output() calculationKey = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(event):void{
    this.calculationKey.emit({value:event.target.firstChild.data})
  }

}
