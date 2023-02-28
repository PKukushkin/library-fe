import {Component} from "@angular/core";

@Component({ selector: 'app-root', templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  binaryArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  decimalNumber: number = 0;

  updateCheckboxes(value: string) {
    this.decimalNumber = parseInt(value);
    for (let i = 0; i < 8; i++) {
      this.binaryArray[7-i] = (this.decimalNumber & (1 << i)) >> i;
    }
  }

  updateCheckbox(index: number) {
    this.binaryArray[index] = this.binaryArray[index] === 1 ? 0 : 1;
    this.decimalNumber = 0;
    for (let i = 0; i < 8; i++) {
      this.decimalNumber += this.binaryArray[7-i] << i;
    }
  }
}
