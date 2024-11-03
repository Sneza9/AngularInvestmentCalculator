import { Component, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { dataInput } from '../data-input.model';

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
  // Output ne moze biti required 
  @Output() calculate = new EventEmitter<dataInput>(); 

  // Vrednost iz html input polja je uvek string 
  initialInvestmentProperty='10';
  annualInvestmentProperty='15';
  expectedReturnProperty='50';
  durationProperty='20';

  onSubmit(){
    // console.log("submited!");
    this.calculate.emit({
      invEmm:+this.initialInvestmentProperty,
      annInv:+this.annualInvestmentProperty,
      expRet:+this.expectedReturnProperty,
      dur:+this.durationProperty
    })
  }
}
