import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { dataInput } from '../data-input.model';
import { InvestmentService } from '../investment.service';

// type dataInput={
//   invEmm:number, 
//   annInv:number, 
//   expRet:number, 
//   dur:number
// }

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // Slanje podataka komponenti investment-results 
  // Nije nam potrebno jer koristimo servis 
  //calculate = output<dataInput>(); 

  // Vrednost iz html input polja je uvek string 
  initialInvestmentProperty=signal('10');
  annualInvestmentProperty=signal('15');
  expectedReturnProperty=signal('50');
  durationProperty=signal('20');

  // Dodajemo ga zbog servisa 
  // Sa private/public se dodaje novi property 
  constructor(private investmentService: InvestmentService){

  }

  onSubmit(){
    // Nije nam potrebno jer koristimo servis 
    // console.log("submited!");
    // this.calculate.emit({
    //   invEmm:+this.initialInvestmentProperty(),
    //   annInv:+this.annualInvestmentProperty(),
    //   expRet:+this.expectedReturnProperty(),
    //   dur:+this.durationProperty()
    // })

    // Za signals 
    this.investmentService.calculateInvestmentResults({
          invEmm:+this.initialInvestmentProperty(),
          annInv:+this.annualInvestmentProperty(),
          expRet:+this.expectedReturnProperty(),
          dur:+this.durationProperty()
    });
    this.initialInvestmentProperty.set('10');
    this.annualInvestmentProperty.set('15');
    this.expectedReturnProperty.set('50');
    this.durationProperty.set('20');
  }
}
