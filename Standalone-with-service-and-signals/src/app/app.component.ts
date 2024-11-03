import { Component, Input, Output, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
// Nije nam potrebno jer koristimo servis 
// import type { dataInput } from './data-input.model';
// import type { resultInput } from './result-input.model';

// type dataInput={
//   invEmm:number,
//   annInv:number,
//   expRet:number,
//   dur:number
// }

// type resultInput = {
//   year: number;
//   interest: number;
//   valueEndOfYear: number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Nije nam potrebno jer koristimo servis 

  // resultData= signal<{
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number;
  // }[] | undefined>(undefined);


  // Nije nam potrebno jer koristimo servis 
  // onCalculateInvestmentResults(data: dataInput) {
  //   const annualData = [];
  //   let investmentValue = data.invEmm;

  //   for (let i = 0; i < data.dur; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (data.expRet / 100);
  //     investmentValue += interestEarnedInYear + data.annInv;
  //     const totalInterest = investmentValue - data.annInv * year - data.invEmm;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: data.annInv,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: data.invEmm + data.annInv * year,
  //     });
  //   }

  //   console.log(annualData);
  //   // return annualData;
  //   this.resultData.set(annualData);
  // }
}
