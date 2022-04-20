import { Component } from '@angular/core';
import { BaseDate } from './factory/base-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = this.baseDate.type;

  constructor(public baseDate: BaseDate) {
    console.log(this.baseDate.type);
  }
}
