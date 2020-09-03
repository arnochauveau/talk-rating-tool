import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  title = 'Hello World!';
  numbers = [];
  counter = 0;

  IncreaseButtonClicked() {
    this.counter++;
    this.numbers.push(this.counter);
  }
}
