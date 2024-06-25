import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentData } from '../../models/Investment';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number  = 0;
  duration: number = 0;

  handleSubmit(){
    this.calculate.emit({
      initialInvestment: this.initialInvestment, 
      annualInvestment: this.annualInvestment, 
      expectedReturn: this.expectedReturn, 
      duration: this.duration
    });

  }
}
