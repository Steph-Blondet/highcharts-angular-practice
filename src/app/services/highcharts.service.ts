import { Injectable, ElementRef } from '@angular/core';
import * as highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor() { }

  render (el: HTMLElement, config: any) {
    highcharts.chart(el, config);
  }
}
