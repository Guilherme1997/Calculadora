import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { CalculationKeysComponent } from './component/calculation-keys/calculation-keys.component';
import { DisplayComponent } from './component/display/display.component';
import { OperationComponent } from './component/operation/operation.component';
import { DisplayOperationService } from './services/display-operation.service';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculationKeysComponent,
    DisplayComponent,
    OperationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DisplayOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
