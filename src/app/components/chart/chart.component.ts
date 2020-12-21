import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
declare let Plotly: any;
var datasets;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @Input() dataArr: any;
  constructor() {}

  ngOnInit(): void {
    datasets = [...this.dataArr];
    var layout = {
      xaxis: {
        type: 'date',
        title: 'Stock Price Dates'
      },
      yaxis: {
        title: 'Stock Prices'
      },
      title: 'Stock Price Analysis'
    };

    console.log('child', datasets);

    Plotly.newPlot('myDiv', datasets, layout);
  }
}
