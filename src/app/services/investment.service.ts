import { Injectable } from "@angular/core";
import { Investment, InvestmentData } from "../models/Investment";

@Injectable({providedIn:'root'})
export class InvestmentService{
    public calculateInvestementResults(investmentData: InvestmentData): Investment[]{
        const annualData = [];
        let investmentValue = investmentData.initialInvestment;
      
        for (let i = 0; i < investmentData.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
          investmentValue += interestEarnedInYear + investmentData.annualInvestment;
          const totalInterest =
            investmentValue - investmentData.annualInvestment * year - investmentData.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            investmentValue: investmentValue,
            totalInvestment: investmentData.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
          });
        }
      
        return annualData;
    }
}