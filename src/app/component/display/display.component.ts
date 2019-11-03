import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @ViewChild('valueInput', { static: true }) valueInput: ElementRef;

  public operations = ["*", "/", "+", "-"];

  clickedOnOperatio: boolean;

  @Input() set value(calculatorKey: any) {
    if (!calculatorKey) return;
    this.clickOnOperatio(calculatorKey);
    this.clearInput(calculatorKey);
    this.setUpOperation(calculatorKey)
  };

  clearInput(calculatorKey: any) {
    switch (calculatorKey.value) {
      case "c":
        this.valueInput.nativeElement.value = "";
        break;
    }
  }

  setUpOperation(calculatorKey) {
    if (this.clickedOnOperatio) {
      if (this.operations.find(x => x == calculatorKey.value) == undefined) {
        this.valueInput.nativeElement.value = "";
        this.clickedOnOperatio = false;
        return;
      };
    }
  }

  clickOnOperatio(calculatorKey) {
    if (this.operations.find(x => x == calculatorKey.value) != undefined) {
      this.clickedOnOperatio = true;
      alert()
      return;
    };
    this.valueInput.nativeElement.value += calculatorKey.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
