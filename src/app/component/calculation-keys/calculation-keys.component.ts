import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { CalculationKeysOperationService } from 'src/app/services/calculation-keys-operation.service';

@Component({
  selector: 'app-calculation-keys',
  templateUrl: './calculation-keys.component.html',
  styleUrls: ['./calculation-keys.component.css']
})
export class CalculationKeysComponent implements OnInit {

  @Output() calculationKey = new EventEmitter();
  @Input() valueDisplay;

  constructor(private calculationKeysOperationService: CalculationKeysOperationService) { }

  ngOnInit() {
  }

  onClick(event): void {
    let valueKey = event.target.firstChild.data;
    if (valueKey == "=") {
      var valueDisplay = (document.getElementById('display') as HTMLInputElement).value
      this.calculationKeysOperationService.sendMessage(valueDisplay)
      return;
    }
    this.calculationKey.emit({ value: valueKey })
  }

}
