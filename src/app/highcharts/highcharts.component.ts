import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { HighchartsService } from '../services/highcharts.service';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit, OnChanges {
  @Input() config: any;
  @ViewChild('host') host;

  constructor(private chartService: HighchartsService) { }

  ngOnInit(){}

  ngOnChanges( changes: SimpleChanges ) {
    const { config } = changes;
    this.chartService.render(
      this.host.nativeElement, config.currentValue
    );
  }

}
