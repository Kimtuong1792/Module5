import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';

  results = '';
  getValue(value: string) {
    this.results += value;
  }
  clear() {
    this.results = '';
  }
  calculate() {
    this.results = eval(this.results)
  }
}
