import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { resultInput } from '../result-input.model';
// Import for pipe 
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

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
  // Nije nam potrebno jer koristimo servis 
  //results= input<resultInput[]>(); 

  // Koristimo istu instancu kao u user-input 
  // Sada dodajemo property ovako, ne treba nam konstruktor ako napisemo ovako 
  private investmentService =inject(InvestmentService);

  // Sada nam u html vise ne trebaju () jer vise nije signal, imamo service 
  // get results(){
  //   // resultData je iz servisa 
  //   return this.investmentService.resultData();
  // }

  // Umesto get mozemo i ovako 
  // Ovako omogucavamo da je signal read only, da ne mozemo da ga prepravimo izvan servisa 
  results = computed(()=>this.investmentService.resultData());
  // Ovo je skracena verzija 
  // results=this.investmentService.resultData.asReadonly();
}
