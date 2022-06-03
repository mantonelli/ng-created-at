import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { argv0 } from 'process';

@Component({
  selector: 'created-at',
  templateUrl: './created-at.component.html',
  styleUrls: ['./created-at.component.css'],
})
export class CreatedAtComponent implements OnInit {
  @Input() public value: Date;

  private valueToCompare: any;
  public label: string = '';

  constructor() {
    this.valueToCompare = moment(this.value);
  }

  public ngOnInit() {
    moment.locale('pt_br');
    let value = moment(this.value);
    let diff = value.diff(this.valueToCompare);
    console.log(diff);

    this.label = this.label + moment.duration(diff).humanize();
  }
}
