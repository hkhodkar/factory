import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseDate } from './base-date.service';
import { EnglishDate } from './english-date.service';
import { PersianDate } from './persian-date.service';

@Injectable()
export class FactoryDate extends BaseDate {
  constructor() {
    super();

    if (environment.calendarSet == 'persian') {
      return new PersianDate();
    } else {
      return new EnglishDate();
    }
  }
}
