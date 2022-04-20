import { Injectable } from '@angular/core';
import { BaseDate } from './base-date.service';

@Injectable({ providedIn: 'root' })
export class PersianDate extends BaseDate {
  constructor() {
    super();
    this.type = 'persian';
    console.log('the calendar is set to persian');
  }
}
