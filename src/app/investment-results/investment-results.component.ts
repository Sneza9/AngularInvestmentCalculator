import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import for pipe 
import { CurrencyPipe } from '@angular/common';


type resultInput = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // App parent salje podatke 
  // Ako nije definisano ne bi trebalo da se prikazu rezultati iako je kliknuto dugme calculate 
  @Input({ required: true }) results?: resultInput[];

}
