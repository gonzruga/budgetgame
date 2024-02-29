import { Component, Input, OnInit } from '@angular/core';


interface FormAndValue {
  label: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}
  
  title: string = 'App Component Title';

  akiba =0;
  wekeza=0;
  total = 0;
  forms: FormAndValue[] = [];

  ngOnInit(): void {
      this.forms = [
        {
          label: 'AKIBA',
          value: 0,
        },
        {
          label: 'WEKEZA',
          value: 0,
        },
        {
          label: 'UJENZI',
          value: 0,
        },
        {
          label: 'HARUSI',
          value: 0,
        },
        {
          label: 'MSIBA',
          value: 0,
        },
        {
          label: 'MANUNUZI',
          value: 0,
        },
      ]
  }

  totalBudget() {
    return this.forms.reduce((prev, current) => {
      return prev + current.value;
    }, 0)
  }

  public changed($event: any) {
    console.log($event.target.value);
    
  }

  salary: number = 0;
  annualIncome: number = 0;
  total_Y1 = 0;
  balance_Y1 = 0;
  balance_Y2 = 0;
  balance_Y3 = 0;


  calculateAnnualIncome() {
    // Assuming salary is in months, multiply it by 12 to get annual income
    this.annualIncome = this.salary * 12;
  }

  calculateBalanceY1() {
    return this.annualIncome - this.total_Y1;
  }

  // yearOneChanged($event: number) {
  //   console.log($event, '=> de logged one');
  // }

  yearChanged(balance: number, year: number) {
    switch (year) {
      case 1:
        this.balance_Y1 = balance;
        break;
      case 2:
        this.balance_Y2 = balance;
        break;
      case 3:
        this.balance_Y3 = balance;
        break;
    
  }

}

}


