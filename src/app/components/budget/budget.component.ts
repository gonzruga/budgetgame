import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  title: string = 'Budget Component Title';

  items = ['Akiba', 'Wekeza', 'Ujenzi', 'Harusi', 'Msiba', 'Manunuzi']

  annualIncome1: number = 0;
  annualIncome2: HTMLInputElement | null = null;

  totalCalc_Y1: number = 0;
  grandTotal_Y1: HTMLInputElement | null = null;
  balance_Y1 : number = 0;

  totalCalc_Y2: number = 0;
  grandTotal_Y2: HTMLInputElement | null = null;
  balance_Y2 : number = 0;

  totalCalc_Y3: number = 0;
  grandTotal_Y3: HTMLInputElement | null = null;
  balance_Y3 : number = 0;

  @Output()
  yearOneChanged = new EventEmitter<number>();

  @Input()
  color!: string;

  @Input()
  elementIdToChange!: string;

  @Input()
  month!: string;

  @Input()
  categories!: string;

  @Input()
  amount!: string;
 

  onClick(event: Event) {
    const currentButton: HTMLButtonElement= <HTMLButtonElement> event.target;
    // this.categories = this.items[Math.floor(Math.random() * this.items.length)];
    currentButton.innerHTML =  this.items[Math.floor(Math.random() * this.items.length)];

    //document.getElementById(this.elementIdToChange).innerText = categories;

    // console.log('button clicked');
    // var categories = "Holiday";
  }

  calculateSum() {
    console.log("SUM TRIGGERED");
    this.totalCalc_Y1 = this.totalCalc_Y2 = this.totalCalc_Y3 = 0;
    // this.annualIncome = document.getElementById('annual_income');

    // Assuming 'total' is the id of the element where you want to display the sum
    this.grandTotal_Y1 = <HTMLInputElement>document.getElementById('total_Y1');
    this.grandTotal_Y2 = <HTMLInputElement>document.getElementById('total_Y2');
    this.grandTotal_Y3 = <HTMLInputElement>document.getElementById('total_Y3');

    // Assuming 'sumDiv' is the class of elements containing input elements
    const sumDivs_Y1: NodeListOf<HTMLDivElement> = document.querySelectorAll('.sumDiv.year1');
    const sumDivs_Y2: NodeListOf<HTMLDivElement> = document.querySelectorAll('.sumDiv.year2');
    const sumDivs_Y3: NodeListOf<HTMLDivElement> = document.querySelectorAll('.sumDiv.year3');

    sumDivs_Y1.forEach(e=>{
      const sumDiv = e;
      const inputs: HTMLCollectionOf<HTMLInputElement> = sumDiv.getElementsByTagName('input');
              // Iterate through input elements
              for (let j = 0; j < inputs.length; j++) {
                const input = inputs[j];
                console.log(input.value); // Log input values
    
                // Add the numeric value of the input to the totalCalc
                this.totalCalc_Y1 += +input.value;

                this.balance_Y1 =  this.totalCalc_Y1
                this.yearOneChanged.emit(this.balance_Y1);
            }
    });

    sumDivs_Y2.forEach(e=>{
      const sumDiv = e;
      const inputs: HTMLCollectionOf<HTMLInputElement> = sumDiv.getElementsByTagName('input');
              // Iterate through input elements
              for (let j = 0; j < inputs.length; j++) {
                const input = inputs[j];
                console.log(input.value); // Log input values
    
                // Add the numeric value of the input to the totalCalc
                this.totalCalc_Y2 += +input.value;
            }
    });


    sumDivs_Y3.forEach(e=>{
      const sumDiv = e;
      const inputs: HTMLCollectionOf<HTMLInputElement> = sumDiv.getElementsByTagName('input');
              // Iterate through input elements
              for (let j = 0; j < inputs.length; j++) {
                const input = inputs[j];
                console.log(input.value); // Log input values
    
                // Add the numeric value of the input to the totalCalc
                this.totalCalc_Y3 += +input.value;
            }
    });


    // Set the value of the 'total' input element to the calculated total
    this.grandTotal_Y1.value = String(this.totalCalc_Y1);
    this.grandTotal_Y2.value = String(this.totalCalc_Y2);
    this.grandTotal_Y3.value = String(this.totalCalc_Y3);
}


// calculateBalance() {
//   this.balance_Y1 = this.balance_Y1 = this.balance_Y1 = 0;

//   this.balance_Y1 = this.grandTotal_Y1 - document.getElementById('total_Y1')



// }

}
