import { Component, OnInit } from '@angular/core';

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
}


