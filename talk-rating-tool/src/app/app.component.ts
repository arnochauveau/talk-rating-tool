import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  onAmountChanged(newAmount: number) {
    this.title = `The button was clicked ${newAmount} times.`;
  }
}
