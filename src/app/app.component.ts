import { Component } from '@angular/core';
import { Investment, InvestmentData } from './models/Investment';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentsResults!: Investment[];

  constructor(private _investmentService: InvestmentService){}

  handleCalculate(investmentData: InvestmentData): void{
    this.investmentsResults = this._investmentService.calculateInvestementResults(investmentData);
  }

}
