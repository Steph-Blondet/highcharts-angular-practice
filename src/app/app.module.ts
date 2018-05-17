import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

import { HighchartsService } from './services/highcharts.service';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
