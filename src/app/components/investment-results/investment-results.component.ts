import { Component, Input } from '@angular/core';
import { Investment } from '../../models/Investment';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) investmentsResults!: Investment[];


}
