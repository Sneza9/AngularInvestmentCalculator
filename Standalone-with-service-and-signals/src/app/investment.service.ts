import { Injectable, signal } from '@angular/core';
import type { dataInput } from './data-input.model';
import type { resultInput } from './result-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  // resultData=signal<resultInput[]>();

  // Mora da bude i undefined 
  resultData = signal<resultInput[] | undefined>(undefined);
  calculateInvestmentResults(data: dataInput) {
    const annualData = [];
    let investmentValue = data.invEmm;

    for (let i = 0; i < data.dur; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expRet / 100);
      investmentValue += interestEarnedInYear + data.annInv;
      const totalInterest = investmentValue - data.annInv * year - data.invEmm;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annInv,
        totalInterest: totalInterest,
        totalAmountInvested: data.invEmm + data.annInv * year,
      });
    }

    console.log(annualData);

    //Regularan property
    this.resultData.set(annualData);
  }
}
