import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  clicks = 0;
  start = window["start"]; // easy access to window root scope function
  
  onButtonClick() {
    this.clicks += 1;
    this.title = `Hello from Kendo UI! You clicked ${this.clicks} times.`;
  }
  onButton2Click() {
    this.clicks += 1;
    this._data.getPersons().subscribe(data => console.log(data))
  }

  constructor(private _data : DataService) { 
    //this.start() 
  }
}
