import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;

  constructor(private calculatorService: CalculatorService) {}

  calculate(operation: string) {
    switch (operation) {
      case 'add':
        this.calculatorService.add(this.num1, this.num2).subscribe(result => this.result = result);
        break;
      case 'subtract':
        this.calculatorService.subtract(this.num1, this.num2).subscribe(result => this.result = result);
        break;
      case 'multiply':
        this.calculatorService.multiply(this.num1, this.num2).subscribe(result => this.result = result);
        break;
      case 'divide':
        this.calculatorService.divide(this.num1, this.num2).subscribe(result => this.result = result, error => alert(error.error));
        break;
    }
  }
}
