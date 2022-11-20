import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-descendant',
  templateUrl: './descendant.component.html',
  styleUrls: ['./descendant.component.css'],
})
export class DescendantComponent implements OnInit {
  @Input() array!: string;
  arrayList!: number[];
  firstValue!: number;
  secondValue!: number;
  @Output() checkResult = new EventEmitter<boolean>(false);
  constructor() {}

  ngOnInit(): void {
    console.log(this.checkFirstValue());
    if (this.array) {
      this.arrayList = this.array.split(' ').map((item) => {
        return +item;
      });
      let maxValue = Math.pow(Math.max(...this.arrayList), 3);
      let minValue = Math.pow(Math.min(...this.arrayList), 3);
      this.firstValue = +((maxValue + minValue) / 2).toFixed(3);
      this.secondValue = +Math.sqrt(maxValue * minValue).toFixed(3);
    }
    if(this.checkResultFunc()){
      this.checkResult.emit(true)
    }
  }
  checkFirstValue() {
    if (!this.firstValue) {
      return true;
    }
    return Number.isNaN(this.firstValue);
  }
  checkSecondValue() {
    if (!this.secondValue) {
      return true;
    }
    return Number.isNaN(this.secondValue);
  }
  checkResultFunc() {
    return this.checkFirstValue() && this.checkSecondValue();
  }
}
