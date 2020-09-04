import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  title = 'Hello World!';
  numbers = [];
  counter = 0;

  @Input() maxAmount = 10;
  @Output() amountChanged = new EventEmitter();

  IncreaseButtonClicked() {
    this.counter++;
    this.numbers.push(this.counter);
    this.amountChanged.emit(this.counter);
  }
}
