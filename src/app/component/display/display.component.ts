import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DisplayOperationService } from 'src/app/services/display-operation.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @ViewChild('valueInput', { static: true }) valueInput: ElementRef;

  public operations = ["*", "/", "+", "-"];
  public clickedOnOperatio: boolean;
  public displayValue;
  public message: string;


  @Input() set value(calculatorKey: any) {
    if (!calculatorKey) return;
    this.createOperation(calculatorKey)
    this.clearInput(calculatorKey);
  };

  clearInput(calculatorKey: any) {
    switch (calculatorKey.value) {
      case "c":
        this.valueInput.nativeElement.value = "";
        break;
    }
  }

  createOperation(calculatorKey) {
    this.valueInput.nativeElement.value += calculatorKey.value;
  }

  constructor(private displayOperationService: DisplayOperationService) {

  }

  ngOnInit() {
  }


}
