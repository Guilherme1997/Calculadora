import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {



  public valueKey: any;
  public valueDisplay;

  constructor() {

  }

  ngOnInit() {
  }

  getCalculationKey(valueCalculationKey) {
    this.valueKey = valueCalculationKey;
  }

}
