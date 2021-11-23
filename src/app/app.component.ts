import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-created-at';
  value = new Array<Date>();

  constructor() {
    this.value.push(new Date());
    this.value.push(new Date('2021-11-23T15:50:30.652Z'));
    this.value.push(new Date('2021-11-22T15:50:30.652Z'));
    this.value.push(new Date('2021-11-18T15:50:30.652Z'));
    this.value.push(new Date('2021-10-23T15:50:30.652Z'));
    this.value.push(new Date('2021-09-23T15:50:30.652Z'));
    this.value.push(new Date('2020-11-23T15:50:30.652Z'));
    this.value.push(new Date('2019-11-23T15:50:30.652Z'));
  }
}
