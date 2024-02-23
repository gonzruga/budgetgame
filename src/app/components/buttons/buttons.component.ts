import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input()
  color!: string;
  
  @Input()
  month!: string;

  @Input()
  elementIdToChange!: string;

  // 
  @Input()
  categories!: string;

  // @Output() buttonClicked = new EventEmitter();

  onClick() {
    this.categories = "X-MASS";
    // console.log('button clicked');
    // var categories = "Holiday";
    // document.getElementById(cellname).innerText = categories;
    // add logic for when I click on the month button
  }
}
