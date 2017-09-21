import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  clicks = 0;

  onButtonClick() {
      this.clicks += 1;
      this.title = `Hello from Kendo UI! You clicked ${this.clicks} times.`;
  }
}
