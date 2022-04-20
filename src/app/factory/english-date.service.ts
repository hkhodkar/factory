import { Injectable } from '@angular/core';
import { BaseDate } from './base-date.service';

@Injectable({ providedIn: 'root' })
export class EnglishDate extends BaseDate {
  constructor() {
    super();
    this.type = 'english';
    console.log('the calendar is set to English');
  }
}
