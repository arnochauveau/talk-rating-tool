import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  title = 'Hello World!';
  counter = 0;

  IncreaseButtonClicked() {
    this.counter++;
  }
}
