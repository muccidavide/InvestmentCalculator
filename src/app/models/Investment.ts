export class Investment{
    constructor(
        public year: number,
        public interest: number,
        public investmentValue: number,
        public totalInterest: number,
        public totalInvestment: number,
        public totalAmountInvested: number 
    ){}
}

export class InvestmentData{
    constructor(
        public initialInvestment: number,
        public annualInvestment: number,
        public expectedReturn: number,
        public duration: number
    ){}
}