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
      if (this.operations.find(x => x == calculatorKey.value) == undefined && calculatorKey.value != "c") {
        this.valueInput.nativeElement.value = calculatorKey.value;
        this.clickedOnOperatio = false;
        return;
      };
    }
  }

  clickOnOperatio(calculatorKey) {
    if (this.operations.find(x => x == calculatorKey.value) != undefined) {

      this.displayOperationService.emmiterOperation(this.valueInput.nativeElement.value + calculatorKey.value)

      this.clickedOnOperatio = true;
      return;
    };
    if (this.valueInput.nativeElement.value == "0") {
      this.valueInput.nativeElement.value = "";
      this.valueInput.nativeElement.value += calculatorKey.value;
      return;
    }
    this.valueInput.nativeElement.value += calculatorKey.value;

  }

  constructor(private displayOperationService: DisplayOperationService) {

  }

  ngOnInit() {
   // this.displayOperationService.customMessage.subscribe(msg => this.message = msg)
  }


}
