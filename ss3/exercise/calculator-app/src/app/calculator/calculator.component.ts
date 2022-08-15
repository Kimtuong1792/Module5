import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = '';
  number2 = '';
  results = '';
  constructor() { }

  ngOnInit(): void {
  }
  getValue(calculation: string) {
    this.results = eval(this.number1 + calculation + this.number2);
  }
}
