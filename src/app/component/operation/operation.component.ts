import { Component, OnInit } from '@angular/core';
import { DisplayOperationService } from 'src/app/services/display-operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {


  message: string;
  calcululo: string = "";
  editMessage: string;

  constructor(private displayOperationService: DisplayOperationService) {
    this.displayOperationService.message.subscribe(x =>
      setTimeout(() => { this.calcululo += x, this.message = this.calcululo }, 1))

  }


}
