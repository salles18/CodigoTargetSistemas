import { Component, OnInit } from '@angular/core';
import { calculateSum, checkFibonacci, analyzeFaturamento, calculatePercentages, reverseString } from './algorithms';

@Component({
  selector: 'app-root',
  template: '<h1>Angular TypeScript Solutions</h1>',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    calculateSum();
    console.log(checkFibonacci(21));

    const faturamento = [
      { dia: 1, valor: 150 },
      { dia: 2, valor: 0 },
      { dia: 3, valor: 200 },
      { dia: 4, valor: 50 },
    ];
    analyzeFaturamento(faturamento);

    const estados = [
      { estado: 'SP', valor: 67836.43 },
      { estado: 'RJ', valor: 36678.66 },
      { estado: 'MG', valor: 29229.88 },
      { estado: 'ES', valor: 27165.48 },
      { estado: 'Outros', valor: 19849.53 },
    ];
    calculatePercentages(estados);

    reverseString('Angular');
  }
}
