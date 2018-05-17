import { Component } from '@angular/core';
import { getChartData } from './data/highcharts-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartData: any;

  constructor(){
    this.chartData = getChartData;
  }
}
