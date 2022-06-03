import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Created at Demo';

  dates = new Array<Date>();

  constructor() {
    this.dates.push(new Date());

    let d = new Date();
    d.setHours(d.getHours() - 1);
    this.dates.push(d);

    d = new Date();
    d.setDate(d.getDate() - 1);
    this.dates.push(d);

    d = new Date();
    d.setDate(d.getDate() - 7);
    this.dates.push(d);

    d = new Date();
    d.setDate(d.getDate() - 35);
    this.dates.push(d);

    d = new Date();
    d.setDate(d.getDate() - 180);
    this.dates.push(d);

  }
}
