import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import type { dataInput } from './data-input.model';
import type { resultInput } from './result-input.model';

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
  // Ovaj data se koristi ako nam treba u vise funkcija da se koristi, ako ne onda mozemo i samo u onCalculateInvestmentResults
  // da prosledimo data:dataInput i da to pozovemo u html

  //  @Input({required:true}) data!: dataInput;

  // onSubmit(data:dataInput){
  //   this.data=data;
  //   console.log(this.data);
  // }

  resultData?:resultInput[];

  onCalculateInvestmentResults(data: dataInput) {
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
    // return annualData;
    this.resultData=annualData;
  }
}
