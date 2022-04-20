import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseDate } from './factory/base-date.service';
import { EnglishDate } from './factory/english-date.service';
import { FactoryDate } from './factory/factory.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: BaseDate,
      useClass: FactoryDate,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
